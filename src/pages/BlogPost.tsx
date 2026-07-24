import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import SEO from '../components/SEO';
import { db } from '../lib/firebase';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    async function fetchPost() {
      if (!id) return;
      try {
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
          
          // Increment views asynchronously
          updateDoc(docRef, {
            views: increment(1)
          }).catch(err => console.error("Error updating views:", err));
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">Loading article...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <div className="text-center">
          <h1 className="text-4xl font-sans font-bold text-[#1A1A1A] mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you are looking for does not exist or has been removed.</p>
          <Link to="/blog" className="text-[#5A3A22] font-semibold hover:text-[#D4AF37] flex items-center justify-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-[#FAFAF8] min-h-screen pb-20">
      <SEO 
        title={post.title} 
        description={post.excerpt}
      />
      
      {/* Hero Image */}
      {post.image && (
        <div className="w-full h-[40vh] md:h-[60vh] relative">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${post.image ? '-mt-20' : 'pt-20'}`}>
        <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-gray-100">
          <div className="flex items-center space-x-4 mb-6 text-sm">
            <span className="text-[#D4AF37] font-semibold uppercase tracking-wider">{post.category}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">{post.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#1A1A1A] mb-8 leading-tight">
            {post.title}
          </h1>

          {post.content?.includes('<p>') || post.content?.includes('<h1>') || post.content?.includes('<ul>') ? (
            <div 
              className="prose prose-lg prose-[#0a66c2] max-w-none text-gray-800 font-sans"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <div className="prose prose-lg prose-[#0a66c2] max-w-none text-gray-800 font-sans">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <Link to="/blog" className="inline-flex items-center text-[#5A3A22] font-semibold hover:text-[#D4AF37] transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
            </Link>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 font-medium">Share:</span>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors shadow-sm border border-gray-100"
                title="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-colors shadow-sm border border-gray-100"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors shadow-sm border border-gray-100"
                title="Copy Link"
              >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <LinkIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
