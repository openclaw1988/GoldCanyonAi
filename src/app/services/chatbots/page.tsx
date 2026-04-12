import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  MessageSquare,
  Users,
  Zap,
  BarChart3,
  Clock,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Chatbots & Assistants",
};

const useCases = [
  {
    icon: MessageSquare,
    title: "Customer Service Bots",
    description:
      "Instantly answer customer questions, handle common requests, and escalate complex issues to human agents when needed.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge Base Assistants",
    description:
      "Create intelligent assistants that can search your documentation, policies, and FAQs to provide instant answers.",
  },
  {
    icon: Users,
    title: "Lead Qualification",
    description:
      "Automatically qualify inbound leads by asking relevant questions and scoring them based on fit and interest.",
  },
  {
    icon: Clock,
    title: "Appointment Scheduling",
    description:
      "Let customers book appointments or consultations directly through chat. Integration with your calendar systems.",
  },
  {
    icon: BarChart3,
    title: "Internal Knowledge Assistants",
    description:
      "Help your team find information quickly. Search documents, policies, previous cases, and institutional knowledge.",
  },
  {
    icon: Zap,
    title: "Multi-Language Support",
    description:
      "Serve customers in their preferred language. Real-time translation and localization for global support.",
  },
];

const capabilities = [
  "Custom training on your data and documentation",
  "Natural conversation flow and context awareness",
  "Integration with your systems (CRM, ticketing, calendars, etc.)",
  "Human handoff capabilities for complex issues",
  "Analytics and conversation logging",
  "Custom branding and styling",
  "Multi-language support",
  "Real-time learning from feedback",
];

const deploymentOptions = [
  {
    name: "Website Widget",
    description: "Embed on your website for instant customer support.",
  },
  {
    name: "Mobile App",
    description: "Native iOS/Android app for direct customer access.",
  },
  {
    name: "Slack Integration",
    description: "Answer questions directly in your Slack workspace.",
  },
  {
    name: "WhatsApp/Messaging",
    description: "Reach customers where they are already chatting.",
  },
  {
    name: "Email Bot",
    description: "Automatically respond to email inquiries.",
  },
  {
    name: "API/Custom Integration",
    description: "Connect to any system or platform you need.",
  },
];

const caseStudies = [
  {
    title: "Customer Support Efficiency",
    metric: "65%",
    description: "Reduction in support response time with 24/7 bot availability.",
  },
  {
    title: "Cost Savings",
    metric: "40%",
    description: "Reduction in support costs while improving customer satisfaction.",
  },
  {
    title: "Lead Conversion",
    metric: "3x",
    description: "Increase in qualified leads through intelligent qualification.",
  },
];

export default function ChatbotsPage() {
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
              <Bot className="w-4 h-4" />
              Custom & Templates Available
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              AI Chatbots &<br />
              <span className="text-gold">Assistants</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
              Intelligent chatbots for customer service, knowledge bases, lead qualification, and appointment scheduling. Available as pre-built templates or fully custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?service=chatbots-custom"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-6 py-3 rounded-lg transition-colors text-base"
              >
                Get a Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#templates"
                className="inline-flex items-center justify-center gap-2 border border-gray-500 hover:border-white text-white font-medium px-6 py-3 rounded-lg transition-colors text-base"
              >
                View Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Chatbots for Every Purpose
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you need customer service automation, internal knowledge assistants, or lead qualification — we build intelligent bots tailored to your needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold/10">
                    <useCase.icon className="h-6 w-6 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Powerful Features
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our chatbots are built on modern AI technology with capabilities designed to handle real-world customer interactions.
              </p>
              <ul className="space-y-3">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700">{capability}</span>
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
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-gray-400">{"//"} Customer: Hello, do you have product X?</div>
                  <div className="text-gold">Bot: Yes! Let me help you find it...</div>
                  <div className="text-gray-400">{"//"} Instant response, 24/7 availability</div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500">
                Always available. Always helpful.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Deploy Anywhere
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our chatbots integrate with your existing systems and platforms.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deploymentOptions.map((option) => (
              <div
                key={option.name}
                className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-gold/30 transition-all text-center"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {option.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Real Results
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Companies using our chatbots see measurable improvements across customer satisfaction and operational efficiency.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="bg-navy-light rounded-xl border border-navy-light p-8 text-center hover:border-gold/30 transition-colors"
              >
                <div className="text-4xl font-bold text-gold mb-2">{study.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="templates" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Custom Builds & Templates
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from pre-built templates or let us build a custom bot for your specific use case.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Pre-Built Templates
              </h3>
              <p className="text-gray-600 mb-6">
                Ready-to-deploy chatbot templates for common use cases. Customize with your data and deploy in days.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700">Quick deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700">Training included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ongoing support</span>
                </li>
              </ul>
              <Link
                href="/contact?service=chatbots-template"
                className="inline-flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-charcoal font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                View Templates
              </Link>
            </div>

            <div className="rounded-xl border-2 border-gold bg-gold/5 p-8 hover:shadow-lg transition-all ring-2 ring-gold/20">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Custom Build
              </h3>
              <p className="text-gray-600 mb-6">
                Need something unique? We build custom chatbots tailored to your specific business processes and requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom AI training</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700">System integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ongoing optimization</span>
                </li>
              </ul>
              <Link
                href="/contact?service=chatbots-custom"
                className="inline-flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to automate customer interactions?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's talk about your customer service challenges and find the right chatbot solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=chatbots-custom"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              Get a Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-500 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
