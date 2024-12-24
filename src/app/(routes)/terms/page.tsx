"use client";

import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'account', label: 'Account Responsibilities' },
  { id: 'services', label: 'Services' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'termination', label: 'Termination' },
  { id: 'contact', label: 'Contact Information' }
];

const breadcrumbItems = [
  {
    label: "Terms of Service",
    href: "/terms"
  }
];

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Please read these terms carefully before using our services
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
                    Welcome to GarageFinder. By accessing our website or using our services, you agree to 
                    these terms of service. These terms govern your use of our website and services, so please 
                    read them carefully.
                  </p>
                </section>

                <section id="acceptance">
                  <h2>Acceptance of Terms</h2>
                  <p>
                    By accessing or using our services, you agree to be bound by these Terms. If you disagree 
                    with any part of the terms, then you may not access our services.
                  </p>
                </section>

                <section id="eligibility">
                  <h2>Eligibility</h2>
                  <p>
                    To use our services, you must be:
                  </p>
                  <ul>
                    <li>At least 18 years old</li>
                    <li>Capable of forming a binding contract</li>
                    <li>Not barred from using our services under applicable law</li>
                  </ul>
                </section>

                <section id="account">
                  <h2>Account Responsibilities</h2>
                  <p>
                    When you create an account with us, you must:
                  </p>
                  <ul>
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account</li>
                    <li>Promptly update any changes to your information</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                </section>

                <section id="services">
                  <h2>Services</h2>
                  <p>
                    GarageFinder provides a platform connecting vehicle owners with automotive service providers. 
                    We reserve the right to:
                  </p>
                  <ul>
                    <li>Modify or withdraw services</li>
                    <li>Refuse service to anyone</li>
                    <li>Change service fees with notice</li>
                    <li>Limit service availability by region</li>
                  </ul>
                </section>

                <section id="intellectual-property">
                  <h2>Intellectual Property</h2>
                  <p>
                    All content, features, and functionality on our platform are owned by GarageFinder and 
                    protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section id="liability">
                  <h2>Limitation of Liability</h2>
                  <p>
                    GarageFinder shall not be liable for any indirect, incidental, special, consequential, 
                    or punitive damages resulting from your use or inability to use our services.
                  </p>
                </section>

                <section id="termination">
                  <h2>Termination</h2>
                  <p>
                    We may terminate or suspend your account and access to our services immediately, without 
                    prior notice, for conduct that we believe violates these Terms or is harmful to other 
                    users, us, or third parties, or for any other reason.
                  </p>
                </section>

                <section id="contact">
                  <h2>Contact Information</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="mb-2">Email: legal@garagefinder.com</p>
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