info

code
Code

preview
Preview

Deploy
Deploy
Robot
Hey David, Quick input needed :
Ask Question
Agent will continue working after your reply
Perfect! 🎉 Now let's create the final website section - your professional footer with all your business information and links!

📋 Next File: src/components/Footer.jsx
This is your professional footer with company info, quick links, services, and contact details.

Step 1: Create the footer component
Go to this URL:

https://github.com/daviddell305/dell-property-management2/new
Step 2: Name the File
Type: src/components/Footer.jsx
Step 3: Copy and Paste This Content:
import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { contactInfo } from "../mock/mockData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dell Property</h3>
                <p className="text-sm text-slate-400 -mt-1">Management</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your trusted partner in property management and real estate services. 
              Maximizing your investment returns with professional expertise and personalized service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("services")}
                className="block text-slate-400 hover:text-emerald-400 transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-slate-400 hover:text-emerald-400 transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-slate-400 hover:text-emerald-400 transition-colors duration-200"
              >
                Contact
              </button>
              <a href="#" className="block text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="block text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Property Management
              </a>
              <a href="#" className="block text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Real Estate Sales
              </a>
              <a href="#" className="block text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Tenant Services
              </a>
              <a href="#" className="block text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Investment Advisory
              </a>
              <a href="#" className="block text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Property Maintenance
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">{contactInfo.phone}</p>
                  <p className="text-sm text-slate-400">24/7 Emergency Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">{contactInfo.email}</p>
                  <p className="text-sm text-slate-400">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Office Location</p>
                  <p className="text-sm text-slate-400">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Dell Property Management. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
