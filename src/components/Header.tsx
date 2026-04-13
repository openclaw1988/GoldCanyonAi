"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Gold Canyon Resale Toolkit", href: "/services/resale", badge: "New" },
  { name: "Gold Canyon ERP", href: "/services/erp" },
  { name: "ClearChart", href: "/services/clearchart" },
  { name: "AI Chatbots & Assistants", href: "/services/chatbots" },
  { name: "Automation Workflows", href: "/services/automation" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.jpg"
              alt="Gold Canyon AI"
              width={44}
              height={44}
              className="w-9 h-9 lg:w-11 lg:h-11 rounded-lg object-cover"
              priority
            />
            <span className="text-base lg:text-lg font-bold tracking-tight leading-tight">
              Gold Canyon <span className="text-gold">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-charcoal hover:bg-gray-50 font-semibold"
                  >
                    All Solutions & Services
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-charcoal"
                    >
                      {item.name}
                      {item.badge && (
                        <span className="text-xs bg-teal text-white px-1.5 py-0.5 rounded-full font-medium">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/templates"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Templates
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Case Studies
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-navy-light">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" className="block py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              All Solutions
            </Link>
            {services.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 py-2 pl-4 text-sm text-gray-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                {item.badge && (
                  <span className="text-xs bg-teal text-white px-1.5 py-0.5 rounded-full font-medium">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
            <Link href="/templates" className="block py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              Templates
            </Link>
            <Link href="/case-studies" className="block py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              Case Studies
            </Link>
            <Link href="/contact" className="block py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/contact"
                className="block text-center bg-gold hover:bg-gold-dark text-navy-dark font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
