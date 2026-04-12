import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ShoppingBag,
  Factory,
  HeartPulse,
  Bot,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Templates & Pricing",
};

export default function TemplatesPage() {
  const templates = [
    {
      name: "Gold Canyon Resale Toolkit",
      description:
        "Cross-list products across multiple marketplaces in seconds. AI-assisted descriptions, bulk management, and platform-specific optimization.",
      price: "$499",
      icon: ShoppingBag,
      color: "teal",
      borderColor: "border-teal",
      bgColor: "bg-teal/5",
      status: "Available Now",
      statusColor: "text-teal",
      features: [
        "Multi-platform listing management",
        "AI-powered product descriptions",
        "Bulk operations",
        "Inventory synchronization",
      ],
      href: "/services/resale",
    },
    {
      name: "Gold Canyon ERP",
      description:
        "AI-powered manufacturing ERP for jobs, parts, inventory, scheduling, and document management. Built for production environments.",
      price: "$1,499",
      icon: Factory,
      color: "navy",
      borderColor: "border-navy-light",
      bgColor: "bg-navy/5",
      status: "In Production",
      statusColor: "text-gold",
      features: [
        "Job and project tracking",
        "Parts and inventory management",
        "Production scheduling",
        "Document management",
        "Real-time dashboards",
      ],
      href: "/services/erp",
    },
    {
      name: "ClearChart",
      description:
        "Personal healthcare application that analyzes medical records, generates case reports, suggests relevant CPT codes, and empowers patient advocacy.",
      price: "Contact for pricing",
      icon: HeartPulse,
      color: "gray",
      borderColor: "border-gray-200",
      bgColor: "bg-gray-50",
      status: "Coming Soon",
      statusColor: "text-gray-500",
      features: [
        "Medical record analysis",
        "Case report generation",
        "CPT code suggestions",
        "Patient advocacy tools",
      ],
      href: "/services/clearchart",
    },
    {
      name: "AI Chatbot Starter",
      description:
        "Pre-built intelligent chatbot template for customer service, knowledge bases, lead qualification, and appointment scheduling. Ready to customize.",
      price: "$799",
      icon: Bot,
      color: "navy",
      borderColor: "border-navy-light",
      bgColor: "bg-navy/5",
      status: "Available Now",
      statusColor: "text-gold",
      features: [
        "Customer service automation",
        "Knowledge base integration",
        "Lead qualification",
        "Appointment scheduling",
        "Custom training capability",
      ],
      href: "/services/chatbots",
    },
    {
      name: "Automation Starter",
      description:
        "AI-driven business process automation template for document processing, reporting, workflow orchestration, and operational efficiency.",
      price: "$599",
      icon: Workflow,
      color: "navy",
      borderColor: "border-navy-light",
      bgColor: "bg-navy/5",
      status: "Available Now",
      statusColor: "text-gold",
      features: [
        "Document processing",
        "Automated reporting",
        "Workflow orchestration",
        "Integration framework",
        "Custom automation rules",
      ],
      href: "/services/automation",
    },
  ];

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
              Templates <span className="text-gold">&</span> Pricing
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Ready-to-deploy solutions that work out of the box. Designed to get you running fast without sacrificing quality or customization.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Model Explanation */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Our Pricing Model
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer three ways to get the tools you need
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {/* Templates */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Templates</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pre-built, proven solutions ready to deploy. Customize as needed, or use as-is.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span>Fast deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span>Customizable</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span>Fixed pricing</span>
                </li>
              </ul>
            </div>

            {/* SaaS */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Hosted SaaS
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Templates deployed and managed for you. Focus on your business, not infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>Fully managed</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>Security & backups</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>Monthly pricing</span>
                </li>
              </ul>
            </div>

            {/* Custom */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Custom Development
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Built exactly as you need it. Specialized integrations, unique workflows, your vision.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  <span>Fully customized</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  <span>Direct collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  <span>Project-based pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Available Templates
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose a template or combine with custom development for your specific needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => {
              const Icon = template.icon;
              return (
                <div
                  key={template.name}
                  className={`rounded-xl border ${template.borderColor} ${template.bgColor} p-8 hover:shadow-lg transition-all flex flex-col`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-${template.color}/20 rounded-lg flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 text-${template.color}`} />
                    </div>
                    <span
                      className={`text-xs font-semibold ${template.statusColor} bg-white px-3 py-1 rounded-full`}
                    >
                      {template.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    {template.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {template.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {template.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 text-${template.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-2xl font-bold text-charcoal mb-4">
                      {template.price}
                    </div>
                    <Link
                      href={template.href}
                      className="inline-flex items-center justify-center gap-2 w-full bg-navy hover:bg-navy-dark text-white font-medium px-4 py-3 rounded-lg transition-colors"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Development CTA */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Something Custom?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Our templates are a great starting point, but we specialize in building exactly what you need. Tell us about your business, your challenges, and your vision — we'll create a solution tailored to your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Discuss Custom Development
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-gray-500 hover:border-white text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Learn Our Approach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
