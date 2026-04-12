import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  Check,
  Upload,
  Zap,
  DollarSign,
  Users,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ClearChart",
};

const features = [
  {
    icon: Upload,
    title: "Medical Record Upload",
    description:
      "Securely upload medical records, test results, prescriptions, and prior authorization documents in one place.",
  },
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description:
      "AI analyzes your full medical history and creates comprehensive case study reports that doctors actually review.",
  },
  {
    icon: DollarSign,
    title: "Billing & Cost Transparency",
    description:
      "See CPT codes, service costs, and expected out-of-pocket amounts before procedures. No more surprise medical bills.",
  },
  {
    icon: Users,
    title: "Patient Advocacy",
    description:
      "Get organized records, treatment plans, and documentation to take control of your healthcare decisions.",
  },
];

const problems = [
  {
    title: "Doctors Don't Review Full History",
    description:
      "Most patients' medical histories are fragmented across multiple providers and systems. When you see a new doctor, they rarely have your complete picture — leading to missed diagnoses, duplicate tests, and suboptimal treatment.",
  },
  {
    title: "Medical Billing is Opaque",
    description:
      "CPT codes and costs are hidden until after services are rendered. No transparency on what procedures cost or why charges are added. Result: surprise bills, insurance denials, and confusion.",
  },
  {
    title: "Patient Advocacy Takes Hours",
    description:
      "Fighting medical bills, coordinating between providers, and tracking treatment plans is time-consuming and stressful. Most patients give up before the issue is resolved.",
  },
];

const pricingTiers = [
  {
    name: "Consumer SaaS",
    subtitle: "Personal Health Records",
    price: "$9.99",
    period: "/month",
    description: "Manage your own health records and medical information.",
    features: [
      "Personal medical record storage",
      "AI-powered health insights",
      "CPT code reference library",
      "Cost transparency tools",
      "Document organization",
      "Basic patient advocacy guides",
      "Mobile app access",
    ],
    cta: "Get Started",
    ctaHref: "/contact?service=clearchart-consumer",
    featured: true,
  },
  {
    name: "White-Label for Clinics",
    subtitle: "Clinic-Branded Solution",
    price: "Custom Quote",
    period: "",
    description: "Provide ClearChart to your patients with your clinic's branding.",
    features: [
      "White-label platform",
      "Patient access portal",
      "Clinic branding & customization",
      "Patient data integration",
      "HIPAA-compliant hosting",
      "Support & onboarding",
      "Analytics & reporting",
    ],
    cta: "Request a Demo",
    ctaHref: "/contact?service=clearchart-clinic",
    featured: false,
  },
  {
    name: "Template",
    subtitle: "Deploy Your Own",
    price: "$2,499",
    period: "one-time",
    description: "Full source code to deploy your own white-label version.",
    features: [
      "Complete source code",
      "HIPAA compliance documentation",
      "Deployment guides",
      "Database schemas",
      "API integration examples",
      "User documentation",
      "Customization rights",
    ],
    cta: "Get the Template",
    ctaHref: "/contact?service=clearchart-template",
    featured: false,
  },
];

const useCases = [
  {
    title: "Managing Chronic Conditions",
    description:
      "Track medications, test results, and treatment changes across multiple doctors and specialties. Get comprehensive reports for new providers.",
  },
  {
    title: "Before Major Procedures",
    description:
      "Compile your full medical history, understand all costs involved (with CPT codes), and make informed decisions about treatment options.",
  },
  {
    title: "Insurance Appeals & Medical Bills",
    description:
      "Use organized records and analysis to challenge incorrect bills and support insurance appeals with complete documentation.",
  },
  {
    title: "Family Health Advocacy",
    description:
      "Help elderly parents or family members organize their medical information and coordinate care across multiple providers.",
  },
];

export default function ClearChartPage() {
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
            <div className="inline-flex items-center gap-2 bg-navy-light/50 text-gray-400 border border-gray-600 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <AlertCircle className="w-4 h-4" />
              In Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              ClearChart<br />
              <span className="text-teal">Patient Advocacy Made Simple</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
              A personal healthcare app that organizes your medical records, analyzes your full health history, shows CPT codes and costs upfront, and empowers you to advocate for better care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?service=clearchart-consumer"
                className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-base"
              >
                Get Early Access
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

      {/* Disclaimer */}
      <section className="bg-teal/10 border-b border-teal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-teal shrink-0 mt-0.5" />
            <p className="text-sm text-teal-dark">
              <span className="font-semibold">Disclaimer:</span> ClearChart is an informational tool designed to help you organize and understand your medical records. It does not provide medical diagnosis, treatment recommendations, or professional medical advice. Always consult with qualified healthcare providers for medical decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Healthcare has real problems
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Problems that affect millions of patients every year.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-xl border border-gray-200 bg-white p-8 hover:shadow-lg hover:border-teal/30 transition-all"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How ClearChart Helps */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              How ClearChart Helps
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take control of your healthcare with organized records, AI insights, and full cost transparency.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
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

      {/* Use Cases */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Who Benefits From ClearChart
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you're managing chronic conditions, preparing for surgery, or advocating for yourself or a family member.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <HeartPulse className="w-5 h-5 text-teal" />
                </div>
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
      <section id="pricing" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Choose Your Option
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Available as a consumer app, white-label for clinics, or as source code to customize.
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
                      Starting Soon
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

      {/* Privacy & Security */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
            Your Health Data is Sacred
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-charcoal mb-2">HIPAA Compliant</h3>
              <p className="text-sm text-gray-600">
                Full HIPAA compliance for patient privacy and security.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-charcoal mb-2">End-to-End Encryption</h3>
              <p className="text-sm text-gray-600">
                Your medical records are encrypted in transit and at rest.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-charcoal mb-2">You Own Your Data</h3>
              <p className="text-sm text-gray-600">
                Download your data anytime. We never sell or share your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            ClearChart is currently in development. Be first to know when it launches.
          </p>
          <Link
            href="/contact?service=clearchart-consumer"
            className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
