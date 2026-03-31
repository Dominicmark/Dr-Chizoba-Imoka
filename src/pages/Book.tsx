import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Star } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function Book() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <SEO 
        title="Know Your Roots, Know Your Truth" 
        description="The definitive guide to raising confident, culturally grounded children in a disconnected world. A foundational book by Dr. Chizoba Imoka."
      />
      {/* Hero */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#D4AF37]">
                Know Your Roots, Know Your Truth
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                The definitive guide to raising confident, culturally grounded children in a disconnected world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.amazon.com/dp/B0FHFPFHXJ/ref=sr_1_1?crid=3E5MWSLZUH24U&dib=eyJ2IjoiMSJ9.YOScbf88fhjfASm85TN4L1ak-vCb8GAg_E37bjo6OFWFe8pFbY9njPBPOF_Zacc6Ydj-4DT9iE0n3jH9FnTx9-hsGqItNAipLq2hgWZ6ymI8c5hPecilDf9L8076PSU2.OYzDd6EoV6nfsqxu5dYrflWGpfhS0L7bmVrAjEAHBYE&dib_tag=se&keywords=know+your+roots+know+your+truth&qid=1752478259&refinements=p_n_feature_browse-bin%3A2656022011&rnid=618072011&sprefix=know+your+roots+know+your+truth%2Caps%2C306&sr=8-1" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="text-lg px-8 py-4 w-full">
                    Buy Now on Amazon
                  </Button>
                </a>
                <a href="https://www.knowmyroot.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="text-lg px-8 py-4 border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-800 w-full">
                    Go to website
                  </Button>
                </a>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 flex justify-center"
            >
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczO5epPhWkzQJ9UGZ3mjsJUXlolZFSBoN7uYAznowyr8BqegQwTK9e6Ntn5YsMx_GMX-GAxvtBMRUYEdUZCfwIltER3gCLFeso051JRlrpdDgoY-Z2W8f_Sy_EMvAf1EDTicbmEY1_p6qD_jINDxmJsS5w=w879-h879-s-no-gm?authuser=0" 
                alt="Book Cover" 
                className="rounded-sm shadow-2xl max-w-lg w-full transform rotate-2 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Solved */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-8">The Problem It Solves</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Too many children grow up learning a version of history that excludes their ancestors' greatness. This leads to identity confusion, lower self-esteem, and a disconnect from their potential. <strong>Know Your Roots, Know Your Truth</strong> provides the antidote: a practical framework for parents and educators to teach history accurately and empoweringly.
          </p>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 bg-[#5A3A22] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-8">What's Inside</h2>
              <ul className="space-y-6">
                {[
                  "Age-appropriate conversation guides about race and history.",
                  "Frameworks for evaluating school curriculum for bias.",
                  "Actionable activities to celebrate African heritage at home.",
                  "Strategies to build resilience against systemic narratives.",
                  "A curated list of supplementary Afrocentric literature for children."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#D4AF37] mr-4 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 bg-[#4A2A12] p-10 rounded-sm">
              <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-8">The Benefits</h2>
              <ul className="space-y-6">
                {[
                  "Deepened family connection and cultural pride.",
                  "Increased academic confidence in children.",
                  "Empowered parents who know how to advocate for their kids.",
                  "Educators equipped to create truly inclusive environments."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="h-6 w-6 text-[#D4AF37] mr-4 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-[#1A1A1A] mb-16">What Readers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "A masterpiece. This is the manual I've been searching for to help my daughters navigate their identity.", author: "Dr. James K.", role: "Parent & Psychologist" },
              { text: "I've completely overhauled my 4th-grade social studies curriculum based on the principles in this book.", author: "Elena R.", role: "Educator" },
              { text: "Clear, compassionate, and profoundly necessary. A must-read for anyone raising Black children today.", author: "Michelle T.", role: "Community Leader" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <div className="flex text-[#D4AF37] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#1A1A1A]">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="https://www.knowmyroot.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="text-lg px-12 py-4">
                Buy Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
