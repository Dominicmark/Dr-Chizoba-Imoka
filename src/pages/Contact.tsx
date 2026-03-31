import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    const inquiry = params.get('inquiry');
    
    if (service) {
      setFormData(prev => ({ ...prev, inquiryType: 'consulting' }));
    } else if (inquiry === 'speaking') {
      setFormData(prev => ({ ...prev, inquiryType: 'speaking' }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      message: ''
    });
  };

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <SEO 
        title="Contact" 
        description="Get in touch with Dr. Chizoba Imoka for speaking engagements, consulting, media inquiries, or general questions."
      />
      {/* Hero */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#D4AF37]">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Ready to start your journey? Let's connect and discuss how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-8">Contact Information</h2>
              <p className="text-gray-600 mb-10">
                Whether you're looking to book a speaking engagement, inquire about consulting services, or just have a general question, we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#5A3A22]/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#5A3A22]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">Email</h3>
                    <p className="text-gray-600">hello@afrocentriced.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#5A3A22]/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#5A3A22]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#5A3A22]/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#5A3A22]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">Location</h3>
                    <p className="text-gray-600">Atlanta, GA<br/>Available Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-white p-10 rounded-sm shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#5A3A22]"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#5A3A22]"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#5A3A22]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#5A3A22] bg-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="workshops">Workshops</option>
                      <option value="press">Press / Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#5A3A22] resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full md:w-auto flex items-center justify-center">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
