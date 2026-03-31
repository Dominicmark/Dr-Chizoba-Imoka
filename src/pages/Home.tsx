import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ArrowRight, BookOpen, Users, GraduationCap, Mic } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { useRef, useEffect } from 'react';

// To use your own PNG logos, upload them to the `public` folder in your project
// and update the `src` paths below to match your filenames (e.g., '/youtube.png').
const brandImages = [
  { name: "Corona Schools' Trust Council", src: '/brands/cropped-Logo-white-background.png', className: 'h-24 w-auto object-contain max-w-[250px]', containerClass: 'min-w-[250px]' },
  { name: 'Mastercard Foundation', src: '/brands/mastercard_foundation.png', className: 'h-20 w-auto object-contain max-w-[250px]', containerClass: 'min-w-[250px]' },
  { name: 'University of Toronto', src: '/brands/University_of_Toronto-Logo.wine.png', className: 'h-24 w-auto object-contain max-w-[250px]', containerClass: 'min-w-[250px]' },
  { name: 'TEDx', src: '/brands/TEDx-Logo-768x432.png', className: 'h-12 w-auto object-contain max-w-[150px]', containerClass: 'min-w-[150px]' },
  { name: 'Teach For Nigeria', src: '/brands/TFN-Logo.png', className: 'h-12 w-auto object-contain max-w-[150px]', containerClass: 'min-w-[150px]' }
];

export default function Home() {
  const movementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: movementRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { margin: "-100px" });

  useEffect(() => {
    if (isVideoInView && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    } else if (!isVideoInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isVideoInView]);

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Home" 
        description="Dr. Chizoba Imoka is an Afrocentric educator, author, and speaker dedicated to raising confident children through culturally grounded learning and education justice."
      />
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#FAFAF8] overflow-hidden pt-10 pb-16 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Order 1 on mobile, Order 2 on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <img
                className="w-full h-auto rounded-sm shadow-xl object-cover max-h-[600px] object-top"
                src="https://lh3.googleusercontent.com/pw/AP1GczOpEtbrprTYv3ykDiNNcPisVd6bZ9-R63LbneZHrD1kZrVj33lnixeUascUSlK5KY7ZxVlY37WDsDhzJtcIlxH9NFiOSQRRbiu_HdV93afkrl5cO1iD9h6c3VUKVgABSeoF9SZ77WQaA5jP-5H2q0quPg=w703-h879-s-no-gm?authuser=0"
                alt="Professional portrait of the author and educator"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Text - Order 2 on mobile, Order 1 on desktop */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
            >
              <span className="block text-[#D4AF37] font-bold tracking-widest uppercase text-xl md:text-2xl mb-4">
                Dr. Chizoba Imoka-Ubochioma
              </span>
              <h1 className="text-4xl tracking-tight font-serif font-bold text-[#1A1A1A] sm:text-5xl md:text-6xl leading-tight">
                <span className="block xl:inline">Raising Confident Children Through</span>{' '}
                <span className="block text-[#5A3A22]">Afrocentric Education</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Helping families and schools reconnect children to their identity, heritage, and purpose.
              </p>
              <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link to="/book">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Get my Book
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="w-full sm:w-auto mt-3 sm:mt-0">
                    Work With Me
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCROLLING MARQUEE */}
      <div className="bg-[#D4AF37] py-4 overflow-hidden flex whitespace-nowrap border-y border-[#1A1A1A]/10">
        <div className="animate-marquee flex space-x-8 items-center min-w-max">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex space-x-8 items-center">
              <span className="text-[#1A1A1A] font-bold uppercase tracking-widest text-sm">Cultural Identity</span>
              <span className="text-[#1A1A1A]">•</span>
              <span className="text-[#1A1A1A] font-bold uppercase tracking-widest text-sm">Afrocentric Curriculum</span>
              <span className="text-[#1A1A1A]">•</span>
              <span className="text-[#1A1A1A] font-bold uppercase tracking-widest text-sm">Parent Coaching</span>
              <span className="text-[#1A1A1A]">•</span>
              <span className="text-[#1A1A1A] font-bold uppercase tracking-widest text-sm">Community Leadership</span>
              <span className="text-[#1A1A1A]">•</span>
              <span className="text-[#1A1A1A] font-bold uppercase tracking-widest text-sm">Heritage</span>
              <span className="text-[#1A1A1A]">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. PROBLEM SECTION */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-[#D4AF37]">The Disconnection is Real</h2>
            <p className="text-lg text-gray-300 mb-12">
              In modern education, many children experience a profound loss of identity, cultural disconnection, and a lack of representation. This isn't just an academic issue—it's a crisis of confidence and purpose.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Loss of Identity", desc: "Children struggle to understand who they are when their history is absent from the curriculum." },
              { title: "Cultural Disconnection", desc: "Families find it increasingly difficult to pass down heritage in a fast-paced, assimilated world." },
              { title: "Lack of Representation", desc: "You can't be what you can't see. The absence of diverse voices limits a child's perceived potential." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#2A2A2A] p-8 rounded-sm border-t-4 border-[#5A3A22]"
              >
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">A Path to Reconnection</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Through literature, consulting, and community workshops, we provide the tools to rebuild cultural confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-[#5A3A22]/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-[#5A3A22]" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Book</h3>
              <p className="text-gray-600">A foundational guide for parents and educators to instill cultural pride.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Consulting</h3>
              <p className="text-gray-600">Strategic guidance for schools to integrate Afrocentric perspectives.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-[#5A3A22]/10 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-[#5A3A22]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Workshops</h3>
              <p className="text-gray-600">Interactive sessions for communities to learn and grow together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white">Historical Consciousness</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              A Precondition for Education Justice
            </p>
          </div>
          <div className="relative rounded-sm overflow-hidden shadow-2xl bg-black aspect-video">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/dbbw8jsjc/video/upload/v1774776946/Historical_Consciousness__A_Precondition_for_Education_Justice___Chizoba_Imoka___TEDxUTSC_2_WEB_zgiadn.mp4"
              controls
              loop
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* 4. BOOK FEATURE SECTION */}
      <section className="py-20 bg-[#5A3A22] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczO5epPhWkzQJ9UGZ3mjsJUXlolZFSBoN7uYAznowyr8BqegQwTK9e6Ntn5YsMx_GMX-GAxvtBMRUYEdUZCfwIltER3gCLFeso051JRlrpdDgoY-Z2W8f_Sy_EMvAf1EDTicbmEY1_p6qD_jINDxmJsS5w=w879-h879-s-no-gm?authuser=0" 
                alt="Know Your Roots, Know Your Truth Book Cover" 
                className="rounded-sm shadow-2xl w-full max-w-xl mx-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold tracking-widest text-[#D4AF37] uppercase mb-2">Featured Publication</h2>
              <h3 className="text-4xl font-serif font-bold mb-6">Know Your Roots, Know Your Truth</h3>
              <p className="text-lg text-gray-200 mb-6">
                A transformative guide that empowers parents and educators to teach history with truth and dignity. This book provides actionable frameworks to build unshakeable self-esteem in children of African descent.
              </p>
              <ul className="space-y-3 mb-8 text-gray-200">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span> For parents seeking cultural resources
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span> For educators wanting inclusive classrooms
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span> Transforms identity confusion into cultural pride
                </li>
              </ul>
              <Link to="/book">
                <Button variant="secondary">Buy the Book</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS MARQUEE */}
      <section className="py-12 bg-white border-y border-[#1A1A1A]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">
            Trusted By & Featured In
          </p>
        </div>
        <div className="flex whitespace-nowrap relative">
          {/* Gradient masks for smooth fade effect on edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="animate-marquee flex space-x-16 items-center min-w-max px-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex space-x-16 items-center">
                {brandImages.map((brand, index) => (
                  <div key={index} className={`flex items-center justify-center ${brand.containerClass || 'min-w-[150px]'}`}>
                    <img 
                      src={brand.src} 
                      alt={brand.name} 
                      className={brand.className || "h-12 w-auto object-contain max-w-[150px]"}
                      // Fallback to text if image is missing
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="hidden text-xl font-bold text-gray-400">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">How We Can Work Together</h2>
            <p className="mt-4 text-lg text-gray-600">Tailored approaches for institutions and families.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "School Consulting", icon: GraduationCap, desc: "Integrate Afrocentric curriculum and inclusive teaching practices.", link: "/services" },
              { title: "Parent Guidance", icon: Users, desc: "Coaching to navigate identity-focused parenting challenges.", link: "/services" },
              { title: "Workshops", icon: BookOpen, desc: "Engaging sessions for schools, organizations, and communities.", link: "/services" },
              { title: "Speaking", icon: Mic, desc: "Keynotes that inspire, educate, and spark meaningful change.", link: "/speaking" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <service.icon className="h-10 w-10 text-[#5A3A22] mb-6" />
                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{service.desc}</p>
                <Link to={service.link} className="text-[#5A3A22] font-semibold hover:text-[#D4AF37] flex items-center text-sm">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-16 text-[#D4AF37]">Voices of Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2A2A2A] p-8 rounded-sm relative">
              <span className="text-6xl text-[#5A3A22] absolute top-4 left-4 opacity-50 font-serif">"</span>
              <p className="relative z-10 text-gray-300 italic mb-6 pt-4">
                "The consulting provided completely transformed our school's approach to Black History Month. It's no longer a month, but an integrated part of our daily curriculum. The students are more engaged than ever."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Sarah Jenkins" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Jenkins</h4>
                  <p className="text-sm text-gray-400">Principal, Oakridge Academy</p>
                </div>
              </div>
            </div>
            <div className="bg-[#2A2A2A] p-8 rounded-sm relative">
              <span className="text-6xl text-[#5A3A22] absolute top-4 left-4 opacity-50 font-serif">"</span>
              <p className="relative z-10 text-gray-300 italic mb-6 pt-4">
                "Reading 'Know Your Roots' gave me the language I needed to talk to my son about his heritage. It's more than a book; it's a manual for raising proud, confident Black children in today's world."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Marcus T." referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold">Marcus T.</h4>
                  <p className="text-sm text-gray-400">Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MOVEMENT SECTION */}
      <section ref={movementRef} className="py-32 relative overflow-hidden bg-[#1A1A1A]">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
        >
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczO0WTa3K2MweZBCYdSSMEOVvvsqynZVr3H0y_O_clzmsrjYNXryILmWD0zZ6-tKx-ofHDmVD2Xi7IQOwaYmgJocyIwvHulQHgb04e_0i1fKVXvu_5mvVWkVNpm9KUNKmLu-THdLmmyCWuZFf9xejbLHNw=w1319-h879-s-no-gm?authuser=0" 
            alt="Movement background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#5A3A22]/80 mix-blend-multiply"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold mb-6"
          >
            This is More Than Education. It's a Movement.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-10 text-gray-200"
          >
            Join thousands of educators, parents, and advocates who are committed to changing the narrative and empowering the next generation with the truth of their history.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact">
              <Button variant="secondary" className="text-lg px-8 py-4">
                Join the Movement
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 8. EMAIL CAPTURE */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-sm shadow-xl border border-gray-100 text-center">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Free Guide: 3 Questions Every African Parent Should Ask Their Child About Identity</h2>
            <p className="text-gray-600 mb-8">Download this actionable guide to start meaningful conversations tonight.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#5A3A22]"
                required
              />
              <Button type="submit" variant="primary" className="whitespace-nowrap">
                Get the Guide
              </Button>
            </form>
            <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
