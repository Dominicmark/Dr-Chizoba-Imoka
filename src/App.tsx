/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Services from './pages/Services';
import Speaking from './pages/Speaking';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col font-sans text-neutral-900 bg-[#FAFAF8]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/services" element={<Services />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
