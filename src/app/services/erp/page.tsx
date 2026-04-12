import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Check,
  Database,
  Boxes,
  Clock,
  BarChart3,
  Users,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gold Canyon ERP",
};

const features = [
  {
    icon: Database,
    title: "Job & Project Management",
    description:
      "Track jobs from quote through completion. Manage scope, timelines, costs, and resource allocation in real-time.",
  },
  {
    icon: Boxes,
    title: "Parts & Inventory",
    description:
      "Complete parts management with bill of materials, inventory tracking, reorder points, and automatic alerts.",
  },
  {
    icon: Clock,
    title: "Production Scheduling",
    description:
      "AI-powered scheduling that optimizes machine utilization, reduces bottlenecks, and meets delivery dates.",
  },
  {
    icon: BarChart3,
    title: "Financial Tracking",
    description:
      "Track costs by job, project profitability, labor allocation, and generate detailed financial reports.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description:
      "Store and organize specifications, drawings, work instructions, and quality documentation. Dropbox integration included.",
  },
  {
    icon: Users,
    title: "Incentive Tracking",
    description:
      "Track employee performance, bonuses, and incentives tied to production metrics and quality goals.",
  },
];

const benefits = [
  "Reduce setup time and improve machine utilization",
  "Eliminate manual tracking and reduce data entry errors",
  "Make data-driven decisions with real-time financial insights",
  "Improve on-time delivery rates and customer satisfaction",
  "Optimize workforce planning and incentive management",
  "Scale manufacturing operations without scaling overhead",
];

const pricingTiers = [
  {
    name: "Template",
    subtitle: "Self-Hosted or Custom Deploy",
    price: "$1,499",
    period: "one-time",
    description: "Own your infrastructure. Full source code and customization.",
    features: [
      "Complete source code and documentation",
      "Self-hosted deployment option",
      "Lifetime code access",
      "Setup documentation & guides",
      "Community support",
      "Customization rights",
    ],
    cta: "Get the Template",
    ctaHref: "/contact?service=erp-template",
    featured: false,
  },
  {
    name: "Managed SaaS",
    subtitle: "Cloud-Hosted Solution",
    price: "$299",
    period: "/month",
    description: "We handle hosting, updates, and support. You focus on manufacturing.",
    features: [
      "Cloud-hosted dashboard & mobile app",
      "Automatic updates & maintenance",
      "Multi-user accounts & departments",
      "Dropbox integration included",
      "Email & phone support",
      "Monthly reports & dashboards",
      "API access for integrations",
      "99.9% uptime SLA",
    ],
    cta: "Start Free Trial",
    ctaHref: "/contact?service=erp-saas",
    featured: true,
  },
  {
    name: "Custom Enterprise",
    subtitle: "Full Custom Implementation",
    price: "Custom Quote",
    period: "",
    description: "Custom features, private infrastructure, dedicated support.",
    features: [
      "Custom feature development",
      "Private infrastructure option",
      "Advanced integrations",
      "White-label options",
      "Dedicated account manager",
      "Custom training & onboarding",
      "Priority support",
      "Migration support",
    ],
    cta: "Request a Quote",
    ctaHref: "/contact?service=erp-custom",
    featured: false,
  },
];

const useCases = [
  {
    title: "Small Job Shops",
    description:
      "Track multiple concurrent jobs, manage custom parts, and optimize labor allocation without complex setup.",
  },
  {
    title: "Contract Manufacturers",
    description:
      "Manage customer specs, maintain quality standards, and scale production without adding administrative overhead.",
  },
  {
    title: "Made-to-Order Manufacturers",
    description:
      "Handle custom orders, track custom parts, manage quotes to cash, and maintain profitability.",
  },
  {
    title: "Assembly & Finishing",
    description:
      "Coordinate complex assembly workflows, manage sub-assemblies, track completion status, and manage incentives.",
  },
  {
    title: "Fabrication Shops",
    description:
      "Track raw materials, manage cutting plans, optimize machine utilization, and monitor project costs.",
  },
  {
    title: "Multi-Facility Operations",
    description:
      "Centralize management across multiple facilities, track cross-facility transfers, and maintain consistent processes.",
  },
];

export default function ERPPage() {
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
            <div className="inline-flex items-center gap-2 bg-navy-light/50 text-gold border border-gold/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              Proven in Production
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Gold Canyon<br />
              <span className="text-gold">ERP</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
              AI-powered manufacturing ERP system for jobs, parts, inventory, scheduling, and financial management. Built for any manufacturer. Proven in production environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?service=erp-saas"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-6 py-3 rounded-lg transition-colors text-base"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 border border-gray-500 hover:border-white text-white font-medium px-6 py-3 rounded-lg transition-colors text-base"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Built for Manufacturers
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Gold Canyon ERP is designed by people who understand manufacturing operations. It handles job tracking, parts management, inventory, scheduling, and financial reporting — without requiring an MBA in ERP configuration.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10">
              <div className="bg-navy rounded-xl p-6 text-white mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-gray-400">{"//"} Schedule jobs & optimize</div>
                  <div>
                    <span className="text-teal-light">erp</span>.
                    <span className="text-gold">scheduleJobs</span>({"{"}{" "}
                  </div>
                  <div className="pl-4 text-gray-300">
                    machines: [<span className="text-green-400">&quot;lathe-01&quot;</span>,{" "}
                    <span className="text-green-400">&quot;mill-02&quot;</span>],
                  </div>
                  <div className="pl-4 text-gray-300">
                    optimize: <span className="text-teal-light">&quot;efficiency&quot;</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    deadline: <span className="text-teal-light">&quot;2024-03-15&quot;</span>,
                  </div>
                  <div>{"}"});</div>
                  <div className="text-green-400 mt-2">
                    {"// ✓ 5 jobs scheduled, 87% utilization"}
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500">
                Intelligent production scheduling
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Complete Manufacturing Management
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              All the tools you need to run an efficient manufacturing operation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold/10">
                    <feature.icon className="h-6 w-6 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              For Every Type of Manufacturer
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you're a small job shop or multi-facility operation, Gold Canyon ERP scales with you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-gold/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Choose Your Deployment Model
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you want to own the code, use our cloud service, or get a fully custom implementation.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-8 transition-all ${
                  tier.featured
                    ? "border-gold bg-gold/5 ring-2 ring-gold shadow-lg"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                {tier.featured && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 bg-gold text-navy-dark text-xs font-semibold px-3 py-1 rounded-full">
                      <Factory className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-charcoal mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{tier.subtitle}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-charcoal">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-gray-600 ml-2">{tier.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaHref}
                  className={`block w-full py-2.5 px-4 rounded-lg font-semibold text-center transition-colors ${
                    tier.featured
                      ? "bg-gold hover:bg-gold-dark text-navy-dark"
                      : "bg-gray-100 hover:bg-gray-200 text-charcoal"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Quick Implementation
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Most manufacturers are up and running in 2-4 weeks, not months.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-navy-light rounded-xl border border-navy-light p-6">
              <div className="text-4xl font-bold text-gold mb-2">2-4</div>
              <h3 className="text-lg font-semibold text-white mb-2">Weeks to Deploy</h3>
              <p className="text-gray-400 text-sm">
                Most setups are completed faster than traditional ERP systems.
              </p>
            </div>
            <div className="bg-navy-light rounded-xl border border-navy-light p-6">
              <div className="text-4xl font-bold text-teal mb-2">70%</div>
              <h3 className="text-lg font-semibold text-white mb-2">Faster to Configure</h3>
              <p className="text-gray-400 text-sm">
                Compared to enterprise ERP systems with complex setups.
              </p>
            </div>
            <div className="bg-navy-light rounded-xl border border-navy-light p-6">
              <div className="text-4xl font-bold text-gold mb-2">3x</div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI Timeline</h3>
              <p className="text-gray-400 text-sm">
                See measurable improvements in 30-90 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Ready to modernize your manufacturing?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's schedule a demo and show you how Gold Canyon ERP can improve your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=erp-saas"
              className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-charcoal font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
