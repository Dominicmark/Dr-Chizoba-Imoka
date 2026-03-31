import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Why 'Colorblind' Parenting Doesn't Work",
      excerpt: "Ignoring race doesn't protect children; it leaves them unequipped to understand their world. Here's how to have age-appropriate conversations about identity.",
      category: "Parenting",
      date: "October 12, 2023",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Auditing Your Classroom Library",
      excerpt: "A step-by-step guide for educators to ensure their reading materials reflect diverse histories and empower all students.",
      category: "Education",
      date: "September 28, 2023",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "The History They Didn't Teach Us",
      excerpt: "Five pre-colonial African civilizations that should be standard in every world history curriculum.",
      category: "Cultural Awareness",
      date: "September 10, 2023",
      image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Building Resilience Through Ancestral Stories",
      excerpt: "How knowing the triumphs of their ancestors helps children navigate modern systemic challenges with greater confidence.",
      category: "Identity Development",
      date: "August 22, 2023",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Navigating Pushback: A Guide for Teachers",
      excerpt: "Strategies for educators facing resistance when trying to implement more inclusive, Afrocentric lesson plans.",
      category: "Education",
      date: "August 5, 2023",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Celebrating Heritage Beyond February",
      excerpt: "Practical ways families can integrate cultural celebration into their daily lives, not just during Black History Month.",
      category: "Parenting",
      date: "July 18, 2023",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <SEO 
        title="Blog & Insights" 
        description="Read the latest insights, articles, and resources on Afrocentric education, parenting, and cultural awareness from Dr. Chizoba Imoka."
      />
      {/* Hero */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#D4AF37]">Insights & Articles</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Thoughts on Afrocentric education, identity development, and culturally responsive parenting.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-sm overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3 text-sm">
                    <span className="text-[#D4AF37] font-semibold uppercase tracking-wider text-xs">{post.category}</span>
                    <span className="text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#1A1A1A] mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-[#5A3A22] font-semibold hover:text-[#D4AF37] flex items-center mt-auto">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Pagination Placeholder */}
          <div className="mt-16 flex justify-center space-x-2">
            <button className="px-4 py-2 border border-[#5A3A22] text-[#5A3A22] rounded-sm hover:bg-[#5A3A22] hover:text-white transition-colors">Previous</button>
            <button className="px-4 py-2 bg-[#5A3A22] text-white rounded-sm">1</button>
            <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-sm hover:bg-gray-50 transition-colors">2</button>
            <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-sm hover:bg-gray-50 transition-colors">3</button>
            <button className="px-4 py-2 border border-[#5A3A22] text-[#5A3A22] rounded-sm hover:bg-[#5A3A22] hover:text-white transition-colors">Next</button>
          </div>
        </div>
      </section>
    </div>
  );
}
