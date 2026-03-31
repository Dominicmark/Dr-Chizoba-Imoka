import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function Services() {
  const services = [
    {
      id: "school-consulting",
      title: "School Consulting",
      icon: GraduationCap,
      description: "Transform your institution's approach to history and culture. We work with administrators and teachers to integrate Afrocentric perspectives into existing curricula.",
      outcomes: [
        "Comprehensive curriculum audit and redesign",
        "Teacher training on culturally responsive pedagogy",
        "Strategies for inclusive classroom environments"
      ],
      audience: "K-12 Schools, Educational Districts, Private Academies",
      image: "https://lh3.googleusercontent.com/pw/AP1GczN4XecXCKzQSO5VqoK6MF3otoFKyd97KI7eJPqKNY-u3xXEcUDA7bbLuhXv3MCT4zyS190Uo8dkneoAoTNAO_3ef7B-9y5PsX5byiT1CN99o9Kk1yhMGknpqWwaD0BcIf_hbL-IEDJYpzVnC90gsCHj7w=w1318-h879-s-no-gm?authuser=0"
    },
    {
      id: "parent-coaching",
      title: "Parent Coaching",
      icon: Users,
      description: "Navigate the complexities of raising culturally confident children. Personalized guidance to help you foster identity, resilience, and pride at home.",
      outcomes: [
        "Customized family cultural action plans",
        "Scripts for difficult conversations about race and history",
        "Curated resources for home libraries"
      ],
      audience: "Parents, Guardians, Caregivers",
      image: "https://lh3.googleusercontent.com/pw/AP1GczOCKFc1B5-wPd1a3I9y5pzgY_xcA9z33evhdM-_wxUQdij5q158feIjyE8c0DAmklWR7NDtI98i402oiUE9RC5gcdee8NRHWmWL8g3tWtbXPyJu4KOFvKgEPS8ZOeo5uFV5CiDrKnxY4OmwgO4NNRA8ew=w1319-h879-s-no-gm?authuser=0"
    },
    {
      id: "workshops",
      title: "Community Workshops",
      icon: BookOpen,
      description: "Interactive, engaging sessions designed to educate and empower groups. Perfect for community centers, parent-teacher associations, and corporate diversity groups.",
      outcomes: [
        "Shared understanding of historical context",
        "Actionable community-building strategies",
        "Facilitated dialogue on identity and representation"
      ],
      audience: "Community Organizations, PTAs, Corporate ERGs",
      image: "https://lh3.googleusercontent.com/pw/AP1GczO0xF1RMrgCH6oGbnds-ehLoti0Q5dD77hZsqpAbeIE0XKM_TLrDZqScgvOvhrq3xkEDB_PM5fShjp1_Kp0e3alFsQIhu3d1Mt5jLIsQUYDKH6whPiJYAdedvvJXmSxppwdOiKVRc538Mnrh2VR5vERmg=w1319-h879-s-no-gm?authuser=0"
    }
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <SEO 
        title="Consulting & Services" 
        description="Transform your institution's approach to history and culture. Dr. Chizoba Imoka offers school consulting, parent coaching, and curriculum development."
      />
      {/* Hero */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#D4AF37]">Consulting & Services</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Tailored solutions to build cultural confidence in homes, schools, and communities.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-[#5A3A22]/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-10 w-10 text-[#5A3A22]" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-[#1A1A1A] mb-2">Key Outcomes:</h4>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className="text-[#D4AF37] mr-2 font-bold">•</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-[#1A1A1A] mb-1">Best For:</h4>
                    <p className="text-gray-600">{service.audience}</p>
                  </div>

                  <Link to={`/contact?service=${service.id}`}>
                    <Button variant="primary">Book a Session</Button>
                  </Link>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-sm overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="object-cover w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#5A3A22] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-6">Not sure which service is right for you?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Let's schedule a brief discovery call to discuss your specific needs and how we can work together to achieve your goals.
          </p>
          <Link to="/contact">
            <Button variant="secondary" className="text-lg px-8 py-4">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
