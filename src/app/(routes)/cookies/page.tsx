"use client";

import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'what-are-cookies', label: 'What Are Cookies' },
  { id: 'types-of-cookies', label: 'Types of Cookies' },
  { id: 'how-we-use', label: 'How We Use Cookies' },
  { id: 'managing-cookies', label: 'Managing Cookies' },
  { id: 'third-party', label: 'Third-Party Cookies' },
  { id: 'updates', label: 'Updates to Policy' },
  { id: 'contact', label: 'Contact Information' }
];

const breadcrumbItems = [
  {
    label: "Cookie Policy",
    href: "/cookies"
  }
];

export default function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px'
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Main Content with Side Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Title Section */}
          <div className="text-center lg:text-left py-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Cookie Policy
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Understanding how and why we use cookies on our website
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Side Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8 bg-white rounded-lg border border-gray-200 overflow-hidden">
              <nav className="p-2">
                {sections.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`w-full text-left px-4 py-2 text-sm rounded transition-colors ${
                      activeSection === id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-12">
                <section id="introduction">
                  <h2>Introduction</h2>
                  <p>
                    This Cookie Policy explains how GarageFinder uses cookies and similar technologies to 
                    recognize you when you visit our website. It explains what these technologies are and 
                    why we use them, as well as your rights to control our use of them.
                  </p>
                </section>

                <section id="what-are-cookies">
                  <h2>What Are Cookies</h2>
                  <p>
                    Cookies are small data files that are placed on your computer or mobile device when you 
                    visit a website. They are widely used by website owners to make their websites work, or 
                    to work more efficiently, as well as to provide reporting information.
                  </p>
                </section>

                <section id="types-of-cookies">
                  <h2>Types of Cookies</h2>
                  <p>We use the following types of cookies:</p>
                  <ul>
                    <li>
                      <strong>Essential Cookies:</strong> Required for the website to function properly
                    </li>
                    <li>
                      <strong>Performance Cookies:</strong> Help us understand how visitors interact with our website
                    </li>
                    <li>
                      <strong>Functionality Cookies:</strong> Remember your preferences and settings
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Track your visit across websites to help deliver relevant advertising
                    </li>
                  </ul>
                </section>

                <section id="how-we-use">
                  <h2>How We Use Cookies</h2>
                  <p>We use cookies for the following purposes:</p>
                  <ul>
                    <li>To authenticate users and prevent fraudulent use of accounts</li>
                    <li>To remember your preferences and settings</li>
                    <li>To analyze how our website is used and improve our services</li>
                    <li>To help us understand how users engage with our content</li>
                    <li>To provide personalized content and advertisements</li>
                  </ul>
                </section>

                <section id="managing-cookies">
                  <h2>Managing Cookies</h2>
                  <p>
                    Most web browsers allow you to control cookies through their settings preferences. 
                    However, if you limit the ability of websites to set cookies, you may worsen your 
                    overall user experience.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mt-4">
                    <h3 className="text-lg font-semibold mb-3">How to manage cookies in your browser:</h3>
                    <ul>
                      <li>Chrome: Settings → Privacy and Security → Cookies</li>
                      <li>Firefox: Options → Privacy & Security → Cookies</li>
                      <li>Safari: Preferences → Privacy → Cookies</li>
                      <li>Edge: Settings → Privacy & Security → Cookies</li>
                    </ul>
                  </div>
                </section>

                <section id="third-party">
                  <h2>Third-Party Cookies</h2>
                  <p>
                    In addition to our own cookies, we may also use various third-party cookies to report 
                    usage statistics, deliver advertisements, and so on. These cookies may track your 
                    browsing activity across multiple websites.
                  </p>
                </section>

                <section id="updates">
                  <h2>Updates to Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in technology, 
                    legislation, or our data practices. When we post changes to this policy, we will revise 
                    the "Last Updated" date at the bottom of this page.
                  </p>
                </section>

                <section id="contact">
                  <h2>Contact Information</h2>
                  <p>
                    If you have any questions about our use of cookies, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="mb-2">Email: privacy@garagefinder.com</p>
                    <p className="mb-2">Phone: +31 (0) 20 123 4567</p>
                    <p>Address: GarageFinder Headquarters, Amsterdam, Netherlands</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Last Updated: March 24, 2024
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}