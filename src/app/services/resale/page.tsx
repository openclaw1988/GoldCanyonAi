import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Check,
  Zap,
  Globe,
  BarChart3,
  Clock,
  Settings,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gold Canyon Resale Toolkit",
};

const features = [
  {
    icon: Globe,
    title: "Multi-Marketplace Support",
    description:
      "List once and sync to eBay, Poshmark, Mercari, Amazon, Etsy, Facebook Marketplace, and more — all from a single dashboard.",
  },
  {
    icon: Zap,
    title: "AI-Assisted Listing Creation",
    description:
      "Get smart title suggestions, auto-generated descriptions, and optimized formatting for each platform's specific requirements.",
  },
  {
    icon: BarChart3,
    title: "Price Optimization",
    description:
      "AI suggests competitive prices based on marketplace trends, item condition, and market demand.",
  },
  {
    icon: Clock,
    title: "Bulk Management",
    description:
      "Update inventory, prices, and descriptions across all platforms in seconds. Edit multiple listings at once.",
  },
  {
    icon: Settings,
    title: "Marketplace-Specific Optimization",
    description:
      "Each platform has different formatting rules and best practices. We handle that automatically.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Dashboard",
    description:
      "Manage your resale business from anywhere — desktop, tablet, or smartphone.",
  },
];

const pricingTiers = [
  {
    name: "Template",
    subtitle: "Self-Hosted or Custom Deploy",
    price: "$499",
    period: "one-time",
    description: "Own your infrastructure. Full source code included.",
    features: [
      "Complete source code and documentation",
      "Self-hosted deployment option",
      "Lifetime code access",
      "Basic setup documentation",
      "Community support",
    ],
    cta: "Get the Template",
    ctaHref: "/contact?service=resale-template",
    featured: false,
  },
  {
    name: "Managed SaaS",
    subtitle: "Cloud-Hosted Solution",
    price: "$49",
    period: "/month",
    description: "We handle hosting, updates, and support. You focus on selling.",
    features: [
      "Cloud-hosted dashboard",
      "Automatic updates & maintenance",
      "Multi-user accounts",
      "API access for integrations",
      "Email & chat support",
      "Monthly performance reports",
    ],
    cta: "Start Free Trial",
    ctaHref: "/contact?service=resale-saas",
    featured: true,
  },
  {
    name: "Custom Deployment",
    subtitle: "Enterprise Custom Build",
    price: "Custom Quote",
    period: "",
    description: "We build a custom solution tailored to your specific needs.",
    features: [
      "Custom feature development",
      "White-label options",
      "Private infrastructure",
      "Advanced integrations",
      "Dedicated account manager",
      "Custom training & onboarding",
    ],
    cta: "Request a Quote",
    ctaHref: "/contact?service=resale-custom",
    featured: false,
  },
];

const steps = [
  {
    number: 1,
    title: "Create Your Listing",
    description:
      "Upload a product photo and fill in the details. Our AI helps with descriptions and titles.",
  },
  {
    number: 2,
    title: "Select Marketplaces",
    description:
      "Choose which platforms you want to list on. Set marketplace-specific prices if needed.",
  },
  {
    number: 3,
    title: "Sync Across Platforms",
    description:
      "One click publishes your listing to all selected marketplaces with optimized formatting.",
  },
  {
    number: 4,
    title: "Manage from One Place",
    description:
      "Update inventory, prices, and descriptions once. Changes sync automatically across all platforms.",
  },
];

const faqs = [
  {
    question: "Which marketplaces are supported?",
    answer:
      "We currently support eBay, Poshmark, Mercari, Amazon, Etsy, and Facebook Marketplace. More platforms are being added regularly. Custom integrations are available for enterprise customers.",
  },
  {
    question: "Can I sync existing listings?",
    answer:
      "Yes. If you already have listings on various platforms, we can help consolidate them into a single dashboard. Setup support is included.",
  },
  {
    question: "Do I have to use all the features?",
    answer:
      "No. The toolkit is modular. Use just the basic listing sync if that's all you need, or leverage AI pricing and optimization features for more power.",
  },
  {
    question: "What about inventory management?",
    answer:
      "The core toolkit handles listings and pricing. Our Enterprise plan includes inventory sync, so when an item sells on one platform, it's automatically delisted on others.",
  },
  {
    question: "Is there a free tier?",
    answer:
      "We offer a 14-day free trial of the SaaS version. No credit card required. The template version is a one-time $499 purchase with no ongoing fees.",
  },
  {
    question: "Can you integrate with my existing tools?",
    answer:
      "Our SaaS version offers API access. Custom integrations with accounting software, inventory systems, and shipping tools are available on the Enterprise plan.",
  },
];

export default function ResalePage() {
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
            <div className="inline-flex items-center gap-2 bg-navy-light/50 text-teal border border-teal/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <ShoppingBag className="w-4 h-4" />
              Available Now
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Gold Canyon<br />
              <span className="text-teal">Resale Toolkit</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
              List once. Sell everywhere. Cross-list to all major marketplaces from a single interface with AI-powered optimization, bulk management, and marketplace-specific formatting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?service=resale-saas"
                className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-base"
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

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to manage a multi-marketplace resale business efficiently.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal/10">
                    <feature.icon className="h-6 w-6 text-teal" />
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

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get up and running in minutes, not hours.
            </p>
          </div>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the plan that works for your business. No hidden fees, no surprises.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-8 transition-all ${
                  tier.featured
                    ? "border-teal bg-teal/5 ring-2 ring-teal shadow-lg"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                {tier.featured && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 bg-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <Zap className="w-3 h-3" />
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
                      <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaHref}
                  className={`block w-full py-2.5 px-4 rounded-lg font-semibold text-center transition-colors ${
                    tier.featured
                      ? "bg-teal hover:bg-teal-dark text-white"
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

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-lg font-semibold text-charcoal">
                    {faq.question}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to list smarter?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join resellers who are saving hours every week with the Gold Canyon Resale Toolkit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=resale-saas"
              className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-500 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
