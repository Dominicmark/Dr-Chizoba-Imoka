import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Book', path: '/book' },
  { name: 'Services', path: '/services' },
  { name: 'Speaking', path: '/speaking' },
  { name: 'Insights', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#5A3A22]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl md:text-3xl font-sans text-[#4A3B32] flex items-center tracking-tight">
              <span className="font-bold">Dr. Chizoba</span>
              <span className="font-light ml-1.5">Imoka</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                  location.pathname === link.path ? 'text-[#D4AF37]' : 'text-[#1A1A1A]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#5A3A22] text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-[#4A2A12] transition-colors"
            >
              Start Your Journey
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1A1A1A] hover:text-[#5A3A22] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-b border-[#5A3A22]/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37] bg-[#5A3A22]/5'
                    : 'text-[#1A1A1A] hover:text-[#D4AF37] hover:bg-[#5A3A22]/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-[#5A3A22] text-white px-5 py-3 rounded-sm text-base font-medium hover:bg-[#4A2A12]"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
