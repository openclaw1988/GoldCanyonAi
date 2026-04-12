import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Target,
  Factory,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
};

export default function CaseStudiesPage() {
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
              Case <span className="text-gold">Studies</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Real projects, real results. See how businesses have solved their most challenging problems with our solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study: Harmax */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
                <Factory className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-gold">
                  Gold Canyon ERP
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Harmax Manufacturing
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">
                    The Challenge
                  </h3>
                  <p>
                    Harmax, a precision manufacturing company producing custom metal parts, was managing their operations across multiple disconnected spreadsheets and legacy software. Production scheduling was manual, inventory tracking was error-prone, and visibility into project status was nearly impossible. They needed an integrated system that could handle their complex job costing, parts management, and production workflows.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">
                    Our Approach
                  </h3>
                  <p>
                    We deployed Gold Canyon ERP tailored specifically for Harmax's manufacturing processes. We mapped their existing workflows, set up job tracking with real-time cost calculations, implemented inventory management with automatic tracking, and created comprehensive production dashboards. The system integrates with their machinery sensors for automated production data capture.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">
                    The Results
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
                      <span>
                        <strong>40% reduction in scheduling time</strong> through
                        automated job sequencing and resource allocation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
                      <span>
                        <strong>25% improvement in on-time delivery</strong> with
                        real-time visibility and proactive issue flagging
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
                      <span>
                        <strong>15% reduction in material waste</strong> through
                        precise inventory tracking and demand forecasting
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
                      <span>
                        <strong>Instant project profitability insights</strong>{" "}
                        with automated job costing and margin analysis
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href="/services/erp"
                className="inline-flex items-center gap-2 mt-8 text-navy font-semibold hover:text-navy-dark transition-colors"
              >
                Learn more about Gold Canyon ERP
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats Sidebar */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="bg-gradient-to-br from-navy to-navy-dark text-white rounded-2xl p-8 lg:p-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-8">
                  Key Metrics
                </h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex items-end gap-2 mb-2">
                      <div className="text-4xl font-bold">40%</div>
                      <span className="text-gray-300 mb-1">faster</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Production scheduling time
                    </p>
                  </div>

                  <div>
                    <div className="flex items-end gap-2 mb-2">
                      <div className="text-4xl font-bold">25%</div>
                      <span className="text-gray-300 mb-1">higher</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      On-time delivery rate
                    </p>
                  </div>

                  <div>
                    <div className="flex items-end gap-2 mb-2">
                      <div className="text-4xl font-bold">15%</div>
                      <span className="text-gray-300 mb-1">reduced</span>
                    </div>
                    <p className="text-gray-300 text-sm">Material waste</p>
                  </div>
                </div>

                <div className="border-t border-navy-light pt-6">
                  <h4 className="font-semibold mb-4">Solution Included</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>Job and project tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>Parts and inventory management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>Production scheduling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>Document management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>Real-time dashboards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            More Case Studies Coming Soon
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            We're working with businesses across e-commerce, healthcare, and automation. These success stories will be featured here soon.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
            <Clock className="w-5 h-5 text-gold" />
            <span className="text-gray-600">Check back for updates</span>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Want to be our next case study?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            If you're ready to solve a complex business challenge with a custom or template-based solution, let's talk about how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center justify-center gap-2 border border-gray-500 hover:border-white text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Explore Our Templates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
