import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Workflow,
  Check,
  FileText,
  Mail,
  BarChart3,
  Clock,
  Zap,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automation Workflows",
};

const useCases = [
  {
    icon: FileText,
    title: "Document Processing",
    description:
      "Automatically extract data from PDFs, forms, and documents. Process invoices, contracts, and applications in seconds.",
  },
  {
    icon: BarChart3,
    title: "Report Generation",
    description:
      "Generate reports from multiple data sources. Schedule reports to run automatically and distribute to stakeholders.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Trigger emails based on business events. Personalize messages, handle attachments, and track opens and clicks.",
  },
  {
    icon: Database,
    title: "Data Pipeline Automation",
    description:
      "Sync data between systems automatically. Transform, validate, and move data without manual intervention.",
  },
  {
    icon: Clock,
    title: "Workflow Orchestration",
    description:
      "Coordinate complex multi-step processes across teams and systems. Automate approvals, notifications, and handoffs.",
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    description:
      "Automate repetitive business processes end-to-end. Reduce errors, save time, and improve consistency.",
  },
];

const benefits = [
  "Eliminate manual, repetitive tasks and free up staff for higher-value work",
  "Reduce errors and improve data consistency across systems",
  "Increase processing speed — hours of work done in minutes",
  "Improve compliance by following standardized processes every time",
  "Provide better visibility into business processes with detailed logs",
  "Scale operations without hiring additional staff",
];

const features = [
  {
    title: "Visual Workflow Builder",
    description: "Build workflows with our intuitive drag-and-drop interface. No coding required.",
  },
  {
    title: "Pre-Built Connectors",
    description: "Connect to 100+ popular business applications. Zapier, Make, and custom APIs.",
  },
  {
    title: "Conditional Logic",
    description: "Create intelligent workflows that respond to different conditions and scenarios.",
  },
  {
    title: "Error Handling",
    description: "Automatically handle errors, retry failed steps, and send notifications when issues occur.",
  },
  {
    title: "Scheduling",
    description: "Run workflows on a schedule, trigger them manually, or respond to events in real-time.",
  },
  {
    title: "Logging & Monitoring",
    description: "Complete visibility into workflow execution with detailed logs and performance metrics.",
  },
];

const industries = [
  {
    title: "Finance & Accounting",
    examples: [
      "Invoice processing and payment automation",
      "Expense report processing",
      "Financial report generation",
    ],
  },
  {
    title: "HR & Recruiting",
    examples: [
      "Job application screening",
      "Onboarding process automation",
      "Payroll data processing",
    ],
  },
  {
    title: "Sales & Marketing",
    examples: [
      "Lead scoring and routing",
      "Email campaign automation",
      "CRM data sync and enrichment",
    ],
  },
  {
    title: "Operations",
    examples: [
      "Order processing automation",
      "Supply chain notifications",
      "Inventory management",
    ],
  },
];

const roiStats = [
  {
    stat: "40-60 hrs/week",
    description: "Time saved per employee through automation",
  },
  {
    stat: "80%",
    description: "Reduction in manual data entry errors",
  },
  {
    stat: "3-6 months",
    description: "Typical ROI timeline for automation projects",
  },
];

export default function AutomationPage() {
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
              <Workflow className="w-4 h-4" />
              Custom & Templates Available
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Automation<br />
              <span className="text-teal">Workflows</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
              AI-driven business process automation for document processing, reporting, workflow orchestration, and operational efficiency. Build once, use forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?service=automation-custom"
                className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-base"
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

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Stop Doing Work Twice
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                How much time does your team spend on manual, repetitive tasks? Copying data between systems? Generating the same reports every month? We automate that work.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
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
                  <div className="text-gray-400">{"//"} Workflow: Process invoices</div>
                  <div>
                    <span className="text-teal-light">workflow</span>.
                    <span className="text-gold">onEvent</span>(<span className="text-green-400">&quot;invoice.received&quot;</span>)
                  </div>
                  <div className="pl-4 text-gray-300">
                    .<span className="text-gold">extractData</span>()
                  </div>
                  <div className="pl-4 text-gray-300">
                    .<span className="text-gold">validateAmounts</span>()
                  </div>
                  <div className="pl-4 text-gray-300">
                    .<span className="text-gold">postToAccounting</span>();
                  </div>
                  <div className="text-green-400 mt-2">
                    {"// ✓ 50 invoices processed in 2 minutes"}
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500">
                Automate your business processes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Automate Everything
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From document processing to complex workflow orchestration.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal/10">
                    <useCase.icon className="h-6 w-6 text-teal" />
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

      {/* Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Powerful Automation Capabilities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Build sophisticated workflows without complex coding.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-teal/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Solutions for Your Industry
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Workflows tailored to your business needs and processes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {industry.title}
                </h3>
                <ul className="space-y-3">
                  {industry.examples.map((example) => (
                    <li key={example} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Measurable Impact
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Automation delivers real results. Here's what companies typically see.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {roiStats.map((stat) => (
              <div
                key={stat.stat}
                className="bg-navy-light rounded-xl border border-navy-light p-8 text-center hover:border-teal/30 transition-colors"
              >
                <div className="text-3xl font-bold text-teal mb-2">{stat.stat}</div>
                <p className="text-gray-400 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section id="templates" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Custom Builds & Templates
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Start with a template or build a custom workflow from scratch.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Workflow Templates
              </h3>
              <p className="text-gray-600 mb-6">
                Pre-built workflow templates for common business processes. Customize and deploy quickly.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-gray-700">Quick start templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-gray-700">Minimal configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full documentation</span>
                </li>
              </ul>
              <Link
                href="/contact?service=automation-template"
                className="inline-flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-charcoal font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Browse Templates
              </Link>
            </div>

            <div className="rounded-xl border-2 border-teal bg-teal/5 p-8 hover:shadow-lg transition-all ring-2 ring-teal/20">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Custom Workflow
              </h3>
              <p className="text-gray-600 mb-6">
                Need something specific to your business? We build custom workflows tailored to your processes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom design & build</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-gray-700">System integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ongoing optimization</span>
                </li>
              </ul>
              <Link
                href="/contact?service=automation-custom"
                className="inline-flex items-center justify-center gap-2 w-full bg-teal hover:bg-teal-dark text-white font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to automate your business?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your manual processes. We'll show you how to automate them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=automation-custom"
              className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              Start a Workflow Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-500 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
