"use client";

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-4 py-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">GarageFinder</h3>
            <p className="text-gray-400 mb-4">
              Find and book trusted auto repair services in your area.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/garages" className="text-gray-400 hover:text-white transition-colors">
                  Find a Garage
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/articles" className="text-gray-400 hover:text-white transition-colors">
                  Articles
=======
                <Link href="/garages/categories" className="text-gray-400 hover:text-white transition-colors">
                  Service Categories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
                </Link>
              </li>
              <li>
                <Link href="/garages/register" className="text-gray-400 hover:text-white transition-colors">
                  Register Your Garage
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-3">
              <li>
<<<<<<< HEAD
                <Link href="/garages/auto-repair" className="text-gray-400 hover:text-white transition-colors">
=======
                <Link href="/garages/categories/auto-repair" className="text-gray-400 hover:text-white transition-colors">
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
                  Auto Repair
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/garages/tire-service" className="text-gray-400 hover:text-white transition-colors">
=======
                <Link href="/garages/categories/tire-services" className="text-gray-400 hover:text-white transition-colors">
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
                  Tire Services
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/garages/body-shop" className="text-gray-400 hover:text-white transition-colors">
                  Body Shops
                </Link>
              </li>
              <li>
                <Link href="/garages/oil-change" className="text-gray-400 hover:text-white transition-colors">
=======
                <Link href="/garages/categories/oil-change" className="text-gray-400 hover:text-white transition-colors">
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
                  Oil Change
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/garages/brake-service" className="text-gray-400 hover:text-white transition-colors">
=======
                <Link href="/garages/categories/brake-service" className="text-gray-400 hover:text-white transition-colors">
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
                  Brake Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+31 (0) 20 123 4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@garagefinder.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GarageFinder. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}