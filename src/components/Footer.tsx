import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl md:text-3xl font-sans text-white mb-6 flex items-center tracking-tight">
              <span className="font-bold">Dr. Chizoba</span>
              <span className="font-light ml-1.5 opacity-90">Imoka</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Raising confident children through Afrocentric education. Reconnecting families to their identity, heritage, and purpose.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/chichiofafrica/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://web.facebook.com/chizoba.imoka" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://rw.linkedin.com/in/dr-chizoba-imoka-ubochioma-49b67558" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/book" className="hover:text-white transition-colors">The Book</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/speaking" className="hover:text-white transition-colors">Speaking</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">School Consulting</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Parent Coaching</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Workshops</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hello@afrocentriced.com
              </li>
              <li className="mt-4">
                <Link to="/contact" className="inline-block border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] px-4 py-2 rounded-sm transition-colors">
                  Book a Session
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Afrocentric Education. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
