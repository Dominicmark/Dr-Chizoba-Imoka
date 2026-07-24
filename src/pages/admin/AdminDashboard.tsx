import { useState, useEffect, useRef, useMemo } from 'react';
import { db, auth } from '../../lib/firebase';
import { collection, getDocs, doc, setDoc, deleteDoc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { Trash2, Edit2, Plus, LogOut, Image as ImageIcon } from 'lucide-react';
import Button from '../../components/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<any>(null);
  
  const coverInputRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<ReactQuill>(null);

  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  }), []);

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchPosts();
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchPosts = async () => {
    try {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Make sure you are authorized.");
    }
  };

  const handleLogout = () => signOut(auth);

  const resizeImage = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 1200;
          let width = img.width;
          let height = img.height;

          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          resolve(canvas.toDataURL('image/webp', 0.8));
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await resizeImage(file);
    setCurrentPost({ ...currentPost, image: dataUrl });
    if (coverInputRef.current) coverInputRef.current.value = '';
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPost.title || !currentPost.content) return;

    try {
      const postId = currentPost.id || crypto.randomUUID();
      const postRef = doc(db, 'posts', postId);
      
      const payload = {
        title: currentPost.title || '',
        excerpt: currentPost.excerpt || '',
        category: currentPost.category || 'Article',
        date: currentPost.date || new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        image: currentPost.image || '',
        content: currentPost.content || '',
        externalLink: currentPost.externalLink || '',
        updatedAt: serverTimestamp(),
      };

      if (!currentPost.id) {
        // @ts-ignore
        payload.createdAt = serverTimestamp();
      } else {
        // @ts-ignore
        payload.createdAt = currentPost.createdAt || serverTimestamp();
      }

      await setDoc(postRef, payload);
      setIsEditing(false);
      setCurrentPost(null);
      fetchPosts();
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Failed to save post. Check permissions.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      await deleteDoc(doc(db, 'posts', id));
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post. Check permissions.");
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAF8]">
        <div className="bg-white p-8 rounded-sm shadow-md max-w-md w-full text-center border border-gray-100">
          <h1 className="text-2xl font-sans font-bold text-[#1A1A1A] mb-4">Admin Login</h1>
          <p className="text-gray-600 mb-8">Sign in with your authorized Google account to manage content.</p>
          <Button onClick={handleLogin} variant="primary" className="w-full justify-center">
            Sign in with Google
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isEditing ? (
          <div className="fixed inset-0 bg-[#FAFAF8] z-50 flex flex-col overflow-hidden">
            {/* Toolbar Header */}
            <header className="h-16 border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 bg-white shrink-0 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-lg">
                  {user.email?.[0].toUpperCase()}
                </div>
                <div className="text-sm hidden sm:block">
                  <p className="font-semibold text-gray-900">{user.email?.split('@')[0]}</p>
                  <p className="text-xs text-gray-500">Individual article</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button onClick={() => setIsEditing(false)} className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">Cancel</button>
                <button onClick={handleSave} className="px-5 py-2 text-sm font-semibold text-white bg-[#0a66c2] hover:bg-[#004182] rounded-full shadow-sm transition-colors">Publish</button>
              </div>
            </header>

            {/* Editor Canvas */}
            <div className="flex-grow overflow-y-auto bg-white">
              <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
                
                {/* Cover Image Area */}
                <div className="relative group mb-10">
                  {currentPost.image ? (
                    <div className="relative w-full aspect-[21/9] bg-gray-100 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                      <img src={currentPost.image} alt="Cover" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                        <button onClick={() => coverInputRef.current?.click()} className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-full text-sm shadow-sm hover:bg-gray-50">Change cover</button>
                        <button onClick={() => setCurrentPost({...currentPost, image: ''})} className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full text-sm shadow-sm hover:bg-red-700">Remove</button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full aspect-[21/9] bg-[#F9FAFB] rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => coverInputRef.current?.click()}>
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="mb-4 text-sm font-medium text-gray-600">Add a cover image to your article.</p>
                      <button type="button" className="px-5 py-1.5 border border-gray-400 rounded-full text-sm font-semibold hover:bg-gray-100 hover:text-gray-900 transition-colors pointer-events-none">
                        ↑ Upload from computer
                      </button>
                    </div>
                  )}
                  <input type="file" accept="image/*" ref={coverInputRef} className="hidden" onChange={handleCoverUpload} />
                </div>

                {/* Title */}
                <textarea
                  className="w-full text-4xl sm:text-5xl font-sans font-bold text-gray-900 border-none outline-none resize-none placeholder-gray-300 mb-6 bg-transparent leading-tight"
                  placeholder="Title"
                  rows={1}
                  value={currentPost.title || ''}
                  onChange={(e) => {
                    setCurrentPost({...currentPost, title: e.target.value});
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                  onFocus={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                />

                {/* Meta details */}
                <div className="flex flex-wrap gap-4 mb-8">
                   <input type="text" className="text-sm font-sans border-b border-gray-200 outline-none text-gray-700 placeholder-gray-400 w-32 bg-transparent pb-1 focus:border-gray-500 transition-colors" placeholder="Category" value={currentPost.category || ''} onChange={e => setCurrentPost({...currentPost, category: e.target.value})} />
                   <input type="text" className="text-sm font-sans border-b border-gray-200 outline-none text-gray-700 placeholder-gray-400 w-32 bg-transparent pb-1 focus:border-gray-500 transition-colors" placeholder="Date String" value={currentPost.date || ''} onChange={e => setCurrentPost({...currentPost, date: e.target.value})} />
                   <input type="text" className="text-sm font-sans border-b border-gray-200 outline-none text-gray-700 placeholder-gray-400 flex-grow bg-transparent pb-1 focus:border-gray-500 transition-colors min-w-[200px]" placeholder="Brief Excerpt / Description..." value={currentPost.excerpt || ''} onChange={e => setCurrentPost({...currentPost, excerpt: e.target.value})} />
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none prose-[#0a66c2]">
                  <ReactQuill 
                    theme="bubble" 
                    value={currentPost.content || ''} 
                    onChange={(val) => setCurrentPost({...currentPost, content: val})}
                    modules={modules}
                    formats={formats}
                    placeholder="Write here. Select text to format or insert images..."
                    className="min-h-[50vh] text-lg sm:text-xl font-sans"
                    ref={quillRef}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-sans font-bold text-[#1A1A1A]">Content Dashboard</h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{user.email}</span>
                <button onClick={handleLogout} className="text-gray-500 hover:text-red-500" title="Logout">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-50 text-[#0a66c2] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Total Views</p>
                  <p className="text-2xl font-bold text-gray-900">{posts.reduce((sum, post) => sum + (post.views || 0), 0).toLocaleString()}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Total Posts</p>
                  <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold font-sans">All Posts</h2>
                <Button onClick={() => { setCurrentPost({}); setIsEditing(true); }} variant="primary" className="flex items-center text-sm px-4 py-2 bg-[#0a66c2] hover:bg-[#004182]">
                  <Plus className="h-4 w-4 mr-2" /> New Post
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-sans">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-sans">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-sans">Views</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-sans">Category</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider font-sans">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {posts.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 truncate max-w-xs font-sans">{post.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-sans">{post.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-sans">
                          <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>{(post.views || 0).toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-sans">{post.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button onClick={() => { setCurrentPost(post); setIsEditing(true); }} className="text-indigo-600 hover:text-indigo-900 mr-4">
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-900">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {posts.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500 font-sans">
                          No posts found. Create your first post!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
