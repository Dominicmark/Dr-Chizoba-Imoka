import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Roots-Based Education & Global Education",
      excerpt: "Insights on creating roots-based, glocal education systems that empower our communities.",
      category: "Article",
      date: "May 2026",
      image: "/linkedin-cover.jfif",
      externalLink: "https://www.linkedin.com/posts/dr-chizoba-imoka-ubochioma-49b67558_rootsbasededucation-glocaleducation-globaleducation-ugcPost-7457616055981748224-1Voc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6hiWkBPVoJ8L2hlmvn6xMAl33XWsPl_aw"
    },
    {
      id: 2,
      title: "Nigeria's New Curriculum: A Step Forward in Transformation",
      excerpt: "An analysis of Nigeria's new educational curriculum and its potential to drive meaningful transformation in the education sector.",
      category: "Article",
      date: "Recent",
      image: "https://media.licdn.com/dms/image/v2/D4E12AQE3AVbwLAKUBw/article-cover_image-shrink_720_1280/B4EZkvcKq.HoAI-/0/1757437545236?e=2147483647&v=beta&t=dTMcBJq0suGGkZObmopIFZETL_14PNfPW_YI6E66g7c",
      externalLink: "https://www.linkedin.com/pulse/nigerias-new-curriculum-step-forward-transformation-imoka-ubochioma-vvsme"
    },
    {
      id: 3,
      title: "EDUCATING TO TRANSFORM",
      excerpt: "When it comes to education reform in Africa, there is somewhat of a consensus amongst students, activists, critical education scholars, and practitioners that a complete system overhaul is required...",
      category: "Article",
      date: "Recent",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQEBAT_ND5Ptlw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1668161521539?e=2147483647&v=beta&t=xPPVBJUthnNylPuZGS4H2JG3VaO3jYjM3HsXqrJ7FmM",
      externalLink: "https://www.linkedin.com/pulse/educating-transform-dr-chizoba-imoka-ubochioma"
    },
    {
      id: 4,
      title: "Re-Imagining Early Childhood Education in Nigeria.",
      excerpt: "A few months ago, my 2.5 years old son began school.",
      category: "Article",
      date: "Recent",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQHT1dRcL3Ez5w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1669130192673?e=2147483647&v=beta&t=mHMFldsO0mxPwNhER4TbEx7MTEj2nfA9QgMEbmR-SzA",
      externalLink: "https://www.linkedin.com/pulse/re-imagining-early-childhood-education-nigeria-imoka-ubochioma"
    },
    {
      id: 5,
      title: "THE ABA WOMEN RIOT OF 1929",
      excerpt: "On January 1, 1914, Lord Lugard signed documents Amalgamating the Northern Protectorate and the southern Protectorate giving birth to today’s Nigeria. He also introduced the indirect rule system under which the British would rule locally through indigenes of the community called “warrant chiefs”.",
      category: "Article",
      date: "Recent",
      image: "https://media.licdn.com/dms/image/v2/C4D12AQEMD3NwoACJpg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1644504660223?e=2147483647&v=beta&t=ePouSNPrLy1Ik_ovHvMslLrJu3TBrcg2r94wyZR0arM",
      externalLink: "https://www.linkedin.com/pulse/aba-women-riot-1929-dr-chizoba-imoka-ubochioma"
    },
    {
      id: 6,
      title: "The Yoruba story of creation.",
      excerpt: "Months had passed, Obatala was proud of all he had achieved but, he began to feel lonely and bored. He decided to make beings like himself to keep him company.",
      category: "Article",
      date: "Recent",
      image: "https://media.licdn.com/dms/image/v2/C5612AQFkBOdQCRJRKA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1638953527770?e=2147483647&v=beta&t=MYzlYMGlgr2oGomfubTV8j8l28lXv0iqOu27IqHZCQA",
      externalLink: "https://www.linkedin.com/pulse/yoruba-story-creation-dr-chizoba-imoka-ubochioma"
    }
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <SEO 
        title="Articles" 
        description="Read the latest articles and resources on Afrocentric education, parenting, and cultural awareness from Dr. Chizoba Imoka."
      />
      {/* Hero */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#D4AF37]">Articles</h1>
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
                className="group bg-white rounded-sm overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {post.externalLink && (
                    <div className="absolute top-4 right-4 bg-[#0a66c2] text-white text-xs font-bold px-3 py-1 rounded-sm shadow-sm flex items-center">
                      LinkedIn
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
                      View on LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
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
