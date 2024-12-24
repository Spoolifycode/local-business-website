"use client";

import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use Your Information' },
  { id: 'data-protection', label: 'Data Protection' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'contact', label: 'Contact Information' },
  { id: 'updates', label: 'Updates' }
];

const breadcrumbItems = [
  {
    label: "Privacy Policy",
    href: "/privacy"
  }
];

export default function PrivacyPolicyPage() {
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
          {/* Title Section - Now outside the columns */}
          <div className="text-center lg:text-left py-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Privacy Policy
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Learn how we collect, use, and protect your personal information
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
                    At GarageFinder, we take your privacy seriously. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit our website or use our services.
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy
                    policy, please do not access the site.
                  </p>
                </section>

                <section id="information-we-collect">
                  <h2>Information We Collect</h2>
                  <h3>Personal Information</h3>
                  <p>
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul>
                    <li>Register on our website</li>
                    <li>Express interest in obtaining information about our services</li>
                    <li>Participate in activities on our website</li>
                    <li>Contact us for support</li>
                  </ul>

                  <h3>Automatically Collected Information</h3>
                  <p>
                    When you visit our website, we may automatically collect certain information about your
                    device, including:
                  </p>
                  <ul>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>IP address</li>
                    <li>Usage patterns and preferences</li>
                  </ul>
                </section>

                <section id="how-we-use">
                  <h2>How We Use Your Information</h2>
                  <p>
                    We use the information we collect to:
                  </p>
                  <ul>
                    <li>Provide and maintain our services</li>
                    <li>Improve user experience</li>
                    <li>Send you relevant information and updates</li>
                    <li>Process transactions</li>
                    <li>Prevent fraudulent activities</li>
                    <li>Respond to customer service requests</li>
                  </ul>
                </section>

                <section id="data-protection">
                  <h2>Data Protection</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your
                    personal information. However, please note that no method of transmission over the internet
                    or electronic storage is 100% secure.
                  </p>
                </section>

                <section id="your-rights">
                  <h2>Your Rights</h2>
                  <p>
                    You have the right to:
                  </p>
                  <ul>
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to our use of your data</li>
                    <li>Request data portability</li>
                  </ul>
                </section>

                <section id="cookies">
                  <h2>Cookies</h2>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and hold
                    certain information. You can instruct your browser to refuse all cookies or to indicate
                    when a cookie is being sent.
                  </p>
                </section>

                <section id="contact">
                  <h2>Contact Information</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="mb-2">Email: privacy@garagefinder.com</p>
                    <p className="mb-2">Phone: +31 (0) 20 123 4567</p>
                    <p>Address: GarageFinder Headquarters, Amsterdam, Netherlands</p>
                  </div>
                </section>

                <section id="updates">
                  <h2>Updates to This Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by
                    posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
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