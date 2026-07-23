import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { db } from '../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const fetchedPosts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []);

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <SEO 
        title="Articles & Blog" 
        description="Read the latest articles and resources on Afrocentric education, parenting, and cultural awareness from Dr. Chizoba Imoka."
      />

      {/* Hero */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-[#D4AF37]">Articles & Blog</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Thoughts on Afrocentric education, identity development, and culturally responsive parenting.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20 text-gray-500">Loading articles...</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 text-gray-500">No articles found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-sm overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden relative">
                    {post.image && (
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    {post.externalLink && (
                      <div className="absolute top-4 right-4 bg-[#0a66c2] text-white text-xs font-bold px-3 py-1 rounded-sm shadow-sm flex items-center">
                        External
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3 text-sm">
                      <span className="text-[#D4AF37] font-semibold uppercase tracking-wider text-xs">{post.category}</span>
                      <span className="text-gray-400">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-3 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                    
                    {post.externalLink ? (
                      <a 
                        href={post.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#5A3A22] font-semibold hover:text-[#D4AF37] flex items-center mt-auto"
                      >
                        Visit Link <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    ) : (
                      <Link to={`/blog/${post.id}`} className="text-[#5A3A22] font-semibold hover:text-[#D4AF37] flex items-center mt-auto">
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
