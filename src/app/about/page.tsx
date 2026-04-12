import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Users,
  MapPin,
  ShoppingBag,
  Factory,
  HeartPulse,
  Bot,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
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
              About <span className="text-gold">Gold Canyon AI</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Building practical, intelligent solutions that solve real business problems. From ready-made tools to fully custom AI applications.
            </p>
          </div>
        </div>
      </section>

      {/* Steve's Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Steve's Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  With deep experience in software engineering and a passion for AI, Steve has spent years building solutions that help businesses work smarter. He's seen firsthand how the right technology can transform operations — and how the wrong fit can cost time and money.
                </p>
                <p>
                  That experience led to Gold Canyon AI. The mission is simple: create tools and systems that actually solve problems, not just check boxes. Whether it's a ready-to-deploy template or a fully custom application, every solution is built with care and real-world needs in mind.
                </p>
                <p>
                  When he's not building, you'll find Steve exploring the Arizona landscape — which is how Gold Canyon, a beautiful town in Arizona, became the namesake for this venture. It's a reminder to stay grounded, focused, and authentic in everything we build.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-navy-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal">Steve</h3>
                  <p className="text-gray-600">Founder & Lead Developer</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>Software engineer with expertise in full-stack development</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>AI and machine learning implementation specialist</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>Built solutions for manufacturing, e-commerce, and healthcare</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>Passionate about making AI accessible to businesses of all sizes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
              <Lightbulb className="w-8 h-8 text-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Build Once, Sell Twice
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our philosophy: why build a custom solution for one business when that same solution could help dozens of others facing similar challenges?
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-navy-light rounded-xl border border-navy-light p-8 hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom First</h3>
              <p className="text-gray-300 leading-relaxed">
                When you need a solution that's uniquely yours, we build it custom. We work directly with you to understand your business, your challenges, and your vision.
              </p>
            </div>

            <div className="bg-navy-light rounded-xl border border-navy-light p-8 hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Template Ready</h3>
              <p className="text-gray-300 leading-relaxed">
                Then we package that solution as a ready-to-deploy template. Other businesses benefit from the same solid foundation — at a fraction of the cost.
              </p>
            </div>
          </div>

          <p className="text-center text-gray-300 mt-8 text-lg">
            This means enterprise-grade AI is accessible at every price point. Custom solutions for those who need specialized builds. Templates for those who need proven tools, fast.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              What We Build
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Products and solutions across industries. Each designed to solve real problems in manufacturing, e-commerce, healthcare, and beyond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gold Canyon Resale Toolkit */}
            <div className="rounded-xl border border-teal bg-teal/5 p-6 hover:border-teal-dark hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-teal text-white rounded-lg flex items-center justify-center mb-4">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Gold Canyon Resale Toolkit
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cross-list products across multiple marketplaces in seconds. AI-assisted descriptions, bulk management, and platform-specific optimization.
              </p>
              <div className="mt-4 inline-flex text-sm font-medium text-teal">
                Available Now
              </div>
            </div>

            {/* Gold Canyon ERP */}
            <div className="rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-navy/10 text-navy rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Gold Canyon ERP
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI-powered manufacturing ERP for jobs, parts, inventory, scheduling, and document management. Built for production environments.
              </p>
              <div className="mt-4 inline-flex text-sm font-medium text-gold">
                In Production
              </div>
            </div>

            {/* ClearChart */}
            <div className="rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-navy/10 text-navy rounded-lg flex items-center justify-center mb-4">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                ClearChart
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Personal healthcare application that analyzes medical records, generates case reports, suggests relevant CPT codes, and empowers patient advocacy.
              </p>
              <div className="mt-4 inline-flex text-sm font-medium text-gray-500">
                In Development
              </div>
            </div>

            {/* AI Chatbots */}
            <div className="rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-navy/10 text-navy rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                AI Chatbots & Assistants
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Custom intelligent chatbots for customer service, knowledge bases, lead qualification, and appointment scheduling.
              </p>
            </div>

            {/* Automation Workflows */}
            <div className="rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-navy/10 text-navy rounded-lg flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Automation Workflows
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI-driven business process automation for document processing, reporting, workflow orchestration, and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-navy/10 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-navy" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Based in Arizona
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Gold Canyon, Arizona — a town known for staying grounded while reaching for the sky. It's a fitting home for a company focused on practical, down-to-earth AI solutions that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg">
              What drives us every day
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Practical</h3>
              <p className="text-gray-600 leading-relaxed">
                We build solutions that solve real problems, not theoretical ones. Every feature exists for a reason.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Trustworthy</h3>
              <p className="text-gray-600 leading-relaxed">
                We're transparent about what's possible, what it costs, and how long it takes. No surprises.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-7 h-7 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Innovative</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of AI developments and apply cutting-edge technology responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're interested in a ready-made template, a custom solution, or just want to explore what's possible — we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-gray-500 hover:border-white text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
