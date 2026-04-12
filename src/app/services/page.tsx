import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Factory,
  HeartPulse,
  Bot,
  Workflow,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions & Services",
};

const products = [
  {
    name: "Gold Canyon Resale Toolkit",
    description:
      "Cross-list products across eBay, Poshmark, Mercari, and more from a single interface. AI-assisted listings, bulk management, and marketplace optimization.",
    href: "/services/resale",
    icon: ShoppingBag,
    badge: "Available Now",
    badgeColor: "bg-teal",
    featured: true,
  },
  {
    name: "Gold Canyon ERP",
    description:
      "AI-powered manufacturing ERP for jobs, parts, inventory, scheduling, and document management. Proven in production.",
    href: "/services/erp",
    icon: Factory,
    badge: "In Production",
    badgeColor: "bg-gold",
  },
  {
    name: "ClearChart",
    description:
      "Personal healthcare app that analyzes medical records, generates case study reports, provides CPT codes, and empowers patient advocacy.",
    href: "/services/clearchart",
    icon: HeartPulse,
    badge: "In Development",
    badgeColor: "bg-gray-400",
  },
  {
    name: "AI Chatbots & Assistants",
    description:
      "Custom chatbots for customer service, knowledge bases, lead qualification, and appointment scheduling.",
    href: "/services/chatbots",
    icon: Bot,
  },
  {
    name: "Automation Workflows",
    description:
      "AI-driven business process automation — document processing, reporting, workflow orchestration, and more.",
    href: "/services/automation",
    icon: Workflow,
  },
];

const servicePackages = [
  {
    name: "AI Discovery Sprint",
    description: "Problem scoping, feasibility analysis, and a clear solution roadmap.",
    price: "Starting at $2,500",
    timeline: "~1 week",
    features: [
      "Business problem analysis",
      "AI feasibility assessment",
      "Solution roadmap",
      "Budget estimate",
    ],
  },
  {
    name: "Custom AI Integration",
    description: "Fixed-scope AI integration into your existing systems and workflows.",
    price: "$8,000 – $15,000",
    timeline: "2–4 weeks",
    features: [
      "Integration architecture",
      "API connections",
      "Testing & QA",
      "Documentation",
      "Deployment support",
    ],
  },
  {
    name: "AI-Powered Application",
    description: "Full custom AI application designed and built to your specifications.",
    price: "$15,000 – $40,000+",
    timeline: "4–8 weeks",
    features: [
      "Complete application design",
      "Full development & testing",
      "Deployment infrastructure",
      "Training & documentation",
      "Ongoing support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 50%, rgba(212, 168, 67, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(42, 165, 160, 0.2) 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Solutions &<br />
              <span className="text-gold">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              From ready-to-deploy templates to fully custom AI applications. Every solution is available at multiple tiers to match your budget and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product: Resale Toolkit */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-teal text-sm font-semibold uppercase tracking-wider mb-3">
                <ShoppingBag className="w-4 h-4" />
                Featured Product
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
                Gold Canyon Resale Toolkit
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Stop wasting hours creating the same listing on every marketplace.
                The Gold Canyon Resale Toolkit lets you list once and push
                everywhere — with AI that helps write better descriptions, suggest
                competitive prices, and optimize for each platform.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Cross-list to eBay, Poshmark, Mercari, Amazon, Etsy & more",
                  "AI-assisted listing creation and optimization",
                  "Bulk listing management and editing",
                  "Marketplace-specific formatting and optimization",
                  "Available as a template or managed SaaS",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/services/resale"
                  className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/resale"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-charcoal font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10">
              <div className="bg-navy rounded-xl p-6 text-white mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-gray-400">{"//"} Cross-list in seconds</div>
                  <div>
                    <span className="text-teal-light">listing</span>.
                    <span className="text-gold">crossPost</span>({"{"}{" "}
                  </div>
                  <div className="pl-4 text-gray-300">
                    platforms: [<span className="text-green-400">&quot;ebay&quot;</span>,{" "}
                    <span className="text-green-400">&quot;poshmark&quot;</span>,{" "}
                    <span className="text-green-400">&quot;mercari&quot;</span>],
                  </div>
                  <div className="pl-4 text-gray-300">
                    optimize: <span className="text-teal-light">true</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    aiDescriptions: <span className="text-teal-light">true</span>,
                  </div>
                  <div>{"}"});</div>
                  <div className="text-green-400 mt-2">
                    {"// ✓ 3 listings created in 4.2s"}
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500">
                List once. Sell everywhere.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              All Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready-to-deploy products and custom AI development. Every solution
              is available as a template, managed SaaS, or custom build.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className={`group block rounded-xl border p-6 transition-all hover:shadow-lg hover:-translate-y-1 ${
                  product.featured
                    ? "border-teal bg-teal/5 hover:border-teal-dark"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    product.featured ? "bg-teal text-white" : "bg-navy/10 text-navy"
                  }`}>
                    <product.icon className="w-5 h-5" />
                  </div>
                  {product.badge && (
                    <span className={`text-xs text-white px-2 py-0.5 rounded-full font-medium ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-navy">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-teal group-hover:text-teal-dark">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Custom AI Development Services
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a unique problem? We build custom AI solutions for businesses
              of any size. Every custom project starts with a free discovery call.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {servicePackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-navy-light rounded-xl border border-navy-light p-6 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                <div className="border-t border-navy pt-4 mb-4">
                  <div className="text-gold font-semibold text-lg">{pkg.price}</div>
                  <div className="text-gray-500 text-sm">{pkg.timeline}</div>
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Book a Free Discovery Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Not sure where to start?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Talk to our team about your specific needs. We'll help you find the right solution at the right price.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
