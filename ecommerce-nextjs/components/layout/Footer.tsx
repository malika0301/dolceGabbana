'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Основной контент футера */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-400">Find location nearest to you:</p>
              <Link href="/stores" className="text-sm hover:text-gray-300 block underline">
                See Our Stores
              </Link>
              <p className="text-sm text-gray-400 mt-4">+998 99 123 45 67</p>
              <p className="text-sm text-gray-400">hello@mail.com</p>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/account" className="text-sm text-gray-400 hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-gray-400 hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm text-gray-400 hover:text-white">
                  My Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-sm text-gray-400 hover:text-white">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-sm text-gray-400 hover:text-white">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">
              Enter your e-mail below to be the first to know about new collections and product launches.
            </p>
            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <Mail className="w-5 h-5 text-gray-400 ml-4" />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 text-black outline-none text-sm"
              />
              <button className="bg-black text-white p-3 hover:bg-gray-800">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">©Company 2024</p>

            {/* Социальные сети */}
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
