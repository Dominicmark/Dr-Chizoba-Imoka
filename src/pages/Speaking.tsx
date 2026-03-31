import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mic, Calendar, Users, Globe, GraduationCap } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function Speaking() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <SEO 
        title="Speaking & Keynotes" 
        description="Book Dr. Chizoba Imoka for your next event. Inspiring audiences to rethink education, embrace heritage, and lead with cultural confidence."
      />
      {/* Hero */}
      <section className="py-20 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Speaking engagement" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Mic className="h-16 w-16 text-[#D4AF37] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#D4AF37]">Speaking & Keynotes</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Inspiring audiences to rethink education, embrace heritage, and lead with cultural confidence.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">Signature Topics</h2>
            <p className="mt-4 text-lg text-gray-600">Customized presentations for your specific audience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "The Power of Representation in the Classroom",
                desc: "An exploration of how seeing oneself in curriculum impacts academic performance and self-esteem. Actionable strategies for educators to diversify their teaching materials."
              },
              {
                title: "Raising Confident Children in a Disconnected World",
                desc: "A keynote designed for parents and caregivers on practical ways to instill cultural pride and resilience at home, countering negative societal narratives."
              },
              {
                title: "Beyond Black History Month",
                desc: "How institutions can move from performative, once-a-year celebrations to deep, integrated, year-round Afrocentric education."
              },
              {
                title: "Knowing Your Roots: The Foundation of Leadership",
                desc: "For corporate and student leaders: understanding how cultural grounding and historical awareness create more empathetic, effective, and visionary leaders."
              }
            ].map((topic, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 border-l-4 border-l-[#5A3A22]"
              >
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{topic.title}</h3>
                <p className="text-gray-600">{topic.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience & Past Engagements */}
      <section className="py-20 bg-[#5A3A22] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-8">Who I Speak To</h2>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <div className="bg-[#4A2A12] p-3 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <span className="text-lg">Educational Conferences & Summits</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-[#4A2A12] p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <span className="text-lg">Parent-Teacher Associations (PTAs)</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-[#4A2A12] p-3 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <span className="text-lg">Corporate Diversity & Inclusion Events</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-[#4A2A12] p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <span className="text-lg">University Symposia & Student Groups</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-8">Past Engagements</h2>
              <div className="bg-[#4A2A12] p-8 rounded-sm">
                <p className="text-gray-300 italic mb-6">
                  "Her keynote was the highlight of our annual summit. She didn't just inspire us; she gave us a clear, actionable roadmap for change. The standing ovation was well-deserved."
                </p>
                <p className="font-bold">— Director, National Education Equity Conference</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 opacity-70">
                {/* Placeholders for logos/names */}
                <span className="px-4 py-2 border border-gray-400 rounded-sm">Global Ed Summit</span>
                <span className="px-4 py-2 border border-gray-400 rounded-sm">State PTA Convention</span>
                <span className="px-4 py-2 border border-gray-400 rounded-sm">TechCorp D&I Week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-6">Ready to inspire your audience?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Check availability and discuss how we can tailor a presentation for your next event.
          </p>
          <Link to="/contact?inquiry=speaking">
            <Button variant="primary" className="text-lg px-8 py-4">
              Book for Speaking
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
