import Link from "next/link";

const solutions = [
  { name: "Gold Canyon Resale Toolkit", href: "/services/resale" },
  { name: "Gold Canyon ERP", href: "/services/erp" },
  { name: "ClearChart", href: "/services/clearchart" },
  { name: "AI Chatbots & Assistants", href: "/services/chatbots" },
  { name: "Automation Workflows", href: "/services/automation" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Templates", href: "/templates" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Terms of Service", href: "/legal/terms" },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy-dark font-bold text-sm">GC</span>
              </div>
              <span className="text-lg font-bold">
                Gold Canyon <span className="text-gold">AI</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Intelligent business solutions — from custom AI development to
              ready-to-deploy templates. Built in Arizona, deployed everywhere.
            </p>
            <a
              href="mailto:hello@goldcanyonai.com"
              className="text-gold hover:text-gold-light text-sm transition-colors"
            >
              hello@goldcanyonai.com
            </a>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Get Started
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Ready to build something intelligent? Book a free discovery call.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-navy-dark font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-navy-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Gold Canyon AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
