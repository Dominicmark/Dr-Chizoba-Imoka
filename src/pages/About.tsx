import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <SEO 
        title="About" 
        description="Learn more about Dr. Chizoba Imoka, a Nigerian-born education researcher, policy thinker, and passionate advocate for inclusive and culturally grounded learning."
      />
      {/* Hero */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#D4AF37]">About the Author</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Educator, Author, and Advocate for Afrocentric Learning
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczNjF5VMvuEp9pxo6Rdi3ii7IgOGdO5NtR69NC3QpGsr0CFLu7EjMBhqk-ChuLUtbaeXDMQrmZ8Wsi87ASh-InfP6HhVuPM4sQTV8Qn_fljKWEzFU2qgCUgCvWsvyAB93hCuxMZPB4tIfT5RWBNwhJ1brw=w703-h879-s-no-gm?authuser=0" 
                alt="Author portrait" 
                className="rounded-sm shadow-xl w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-6">My Personal Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  I’m a Nigerian-born education researcher, policy thinker, and passionate advocate for inclusive and culturally grounded learning. At 16, I left Nigeria for Canada to begin my post-secondary journey, and quickly encountered the deep disconnects within global education systems, especially for students of color. I saw how education could alienate rather than affirm, uproot rather than root. That early experience planted the seed for a lifelong commitment to rethinking education.
                </p>
                <p>
                  As a teenager, I was already pushing for change—at age 13, I led a 500-student protest in my secondary school that resulted in major reforms to the school’s food program. By 19, I founded Unveiling Africa, a nonprofit that mobilized African youth in Canada and the UK around urgent issues on the continent—raising funds for communities affected by the Darfur crisis and igniting purpose-driven activism in young people. Later, I returned home and led transformative initiatives with thousands of Nigerian teenagers.
                </p>
                
                {isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <p>
                      I went on to earn a Ph.D. in Education Policy & Leadership from the University of Toronto, where I was recognized as a thought leader and changemaker. I delivered the Hancock Lecture, gave a TEDx talk, and was honored with awards including the Clarkson Laureate and Adel Sedra Distinguished Graduate Award. My research centers on education systems that are bold enough to decolonize, holistic enough to embrace indigenous wisdom, and brave enough to center equity.
                    </p>
                    <p>
                      As a practitioner, my work has two intertwined paths. First, in African-centered education reform: I lead the Re-Rooting in African History Initiative, which supports teachers, families, and schools to reconnect learning with cultural identity. My team has trained over 1,000 educators and continues to build momentum toward an education system that equips African children with the tools, mindset, and pride to lead transformative change.
                    </p>
                    <p>
                      Second, in global development and philanthropy: I work at the intersection of youth inclusion, institutional reform, and research systems strengthening. My focus is on elevating marginalized voices and supporting African institutions to generate knowledge rooted in their own realities.
                    </p>
                    <p>
                      I’ve helped shape major education policy efforts in Nigeria, including adapting the SDGs in education, developing the National Reading Framework, and piloting the Policy Linking Methodology for Hausa.
                    </p>
                    <p>
                      Above all, I’m a mother—and motherhood has sharpened my resolve to raise children who are connected to their history and grounded in purpose. Whether I’m writing, running a workshop, or exploring the continent with my kids, my mission is the same: to build systems, schools, and futures that affirm, uplift, and transform.
                    </p>
                  </motion.div>
                )}
                
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#5A3A22] font-bold hover:text-[#D4AF37] transition-colors mt-4 inline-flex items-center"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                  <svg className={`w-4 h-4 ml-2 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#5A3A22] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#4A2A12] p-10 rounded-sm">
              <h3 className="text-2xl font-serif font-bold mb-4 text-[#D4AF37]">Our Mission</h3>
              <p className="text-gray-200 text-lg">
                To equip parents, educators, and communities with the knowledge, frameworks, and confidence to teach Afrocentric history and foster unshakeable cultural pride in children.
              </p>
            </div>
            <div className="bg-[#4A2A12] p-10 rounded-sm">
              <h3 className="text-2xl font-serif font-bold mb-4 text-[#D4AF37]">Our Vision</h3>
              <p className="text-gray-200 text-lg">
                A world where every child of African descent understands their heritage, knows their worth, and steps into their future with absolute clarity and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="relative rounded-sm overflow-hidden shadow-2xl group cursor-pointer bg-black" 
            onClick={toggleMute}
          >
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/dbbw8jsjc/video/upload/v1774023227/videoplayback_2_gua2xp.mp4"
              autoPlay
              loop
              playsInline
              muted={isMuted}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {isMuted ? <VolumeX size={32} /> : <Volume2 size={32} />}
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">Click the video to mute/unmute</p>
        </div>
      </section>

      {/* Authority Positioning */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-16">Why This Work Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#5A3A22] mb-3">As an Author</h3>
              <p className="text-gray-600">Translating complex historical and pedagogical concepts into accessible, transformative literature for everyday use.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#5A3A22] mb-3">As an Educator</h3>
              <p className="text-gray-600">Developing curriculum that meets academic standards while centering marginalized voices and histories.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#5A3A22] mb-3">As a Speaker</h3>
              <p className="text-gray-600">Igniting conversations that challenge the status quo and inspire institutional change across the country.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <Link to="/contact">
              <Button variant="primary" className="text-lg px-8 py-4">
                Work With Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
