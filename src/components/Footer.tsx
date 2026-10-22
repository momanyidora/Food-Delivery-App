"use client";
import Link from "next/link";
import { useState } from "react";
import {
//   Facebook,
//   Twitter,
//   Instagram,
  Mail,
  Phone,
  MapPin,
  X,
  Send,
} from "lucide-react";

export default function Footer() {
  const [showContact, setShowContact] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <span className="text-2xl font-bold text-white">DorahDash</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Delivering happiness to your doorstep. Order from the best local
              and international restaurants across Africa and beyond.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
              >
                {/* <Facebook size={16} /> */}
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
              >
                {/* <Twitter size={16} /> */}
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
              >
                {/* <Instagram size={16} /> */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="hover:text-orange-500 transition"
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/owner"
                  className="hover:text-orange-500 transition"
                >
                  Partner with Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setShowContact(true)}
                  className="hover:text-orange-500 transition"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 shrink-0" />
                <span>
                  123 Innovation Drive,
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500 shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <span>support@dorahdash.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DorahDash. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Made with ❤️ in Kenya</span>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-slide-up">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Contact Support
                </h2>
                <p className="text-sm text-gray-500">
                  We typically reply within 5 minutes
                </p>
              </div>
              <button
                onClick={() => setShowContact(false)}
                className="p-1 hover:bg-gray-200 rounded-full text-gray-500"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>
              <button
                onClick={() => {
                  alert("Message sent! Our team will contact you shortly.");
                  setShowContact(false);
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
