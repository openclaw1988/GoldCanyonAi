import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-gold" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Terms of <span className="text-gold">Service</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
            <p className="text-amber-900">
              <strong>Note:</strong> This is a placeholder terms of service. It
              will be replaced with a comprehensive legal document that outlines
              the complete terms and conditions for using Gold Canyon AI services.
              This placeholder is provided for reference only.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-4">
                <strong>Last Updated:</strong> April 2026
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the Gold Canyon AI website, services,
                products, and applications (collectively, the "Services"), you
                acknowledge that you have read, understood, and agree to be bound
                by these Terms of Service. If you do not agree to any part of
                these terms, you may not use our Services. We reserve the right to
                modify these terms at any time. Your continued use of the Services
                following modifications constitutes your acceptance of the updated
                terms.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                2. Description of Services
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Gold Canyon AI provides software solutions, templates, consulting
                services, and custom development services. Our Services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Ready-to-deploy software templates</li>
                <li>Hosted SaaS solutions and applications</li>
                <li>Custom software development and consulting</li>
                <li>AI-powered tools and integrations</li>
                <li>Technical support and maintenance</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Services are provided on an as-is basis, and we make no warranties
                regarding uninterrupted availability or error-free operation.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                3. User Accounts and Responsibilities
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To access certain Services, you may need to create an account. You
                are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Providing accurate and complete account information</li>
                <li>
                  Maintaining the confidentiality of your credentials and account
                </li>
                <li>All activities that occur under your account</li>
                <li>
                  Notifying us immediately of any unauthorized account access
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You agree not to use our Services for any unlawful, fraudulent, or
                malicious purposes.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                4. Payment Terms
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For Services that require payment:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  You agree to pay the fees specified at the time of purchase
                </li>
                <li>
                  Payment terms, billing cycles, and pricing are as outlined in
                  your service agreement
                </li>
                <li>
                  All fees are exclusive of applicable taxes and government
                  charges
                </li>
                <li>
                  You are responsible for all charges incurred under your account
                </li>
                <li>
                  Invoices are typically sent via email; you can request a copy at
                  any time
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Failure to pay may result in suspension or termination of your
                account.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                5. Intellectual Property Rights
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All content, software, designs, and materials on our website and
                within our Services are the exclusive property of Gold Canyon AI or
                our licensors, protected by copyright and other intellectual
                property laws. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Software code and algorithms</li>
                <li>Trademarks, logos, and branding</li>
                <li>Original templates and pre-built solutions</li>
                <li>Documentation and training materials</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You may not reproduce, distribute, modify, or transmit any content
                without our explicit written permission. If you have purchased a
                template or custom solution, you have a limited license to use it
                for your own business purposes, subject to the terms of your
                service agreement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You grant us the right to use your feedback and suggestions to
                improve our Services.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To the maximum extent permitted by law, Gold Canyon AI shall not be
                liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  Indirect, incidental, consequential, or punitive damages
                </li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>
                  Interruption of service, even if advised of the possibility of
                  such damages
                </li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In no event shall our total liability exceed the amount paid by you
                for the Services in the 12 months preceding the claim.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Some jurisdictions do not allow the limitation of liability, so
                these limitations may not apply to you.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                7. Warranty Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                EXCEPT AS EXPRESSLY STATED HEREIN, OUR SERVICES ARE PROVIDED "AS
                IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR
                SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM
                VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                8. Acceptable Use
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You agree not to use our Services to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  Engage in any illegal, fraudulent, or harmful activities
                </li>
                <li>Harass, defame, or abuse other users or individuals</li>
                <li>
                  Upload malware, viruses, or other malicious code
                </li>
                <li>
                  Attempt to gain unauthorized access to systems or data
                </li>
                <li>
                  Violate intellectual property rights of others
                </li>
                <li>
                  Reverse engineer, decompile, or attempt to extract source code
                </li>
                <li>
                  Interfere with the operation or security of our Services
                </li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                9. Termination
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may terminate or suspend your account and access to our
                Services immediately, without notice, for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Violation of these Terms of Service</li>
                <li>Illegal or fraudulent activity</li>
                <li>Non-payment of fees</li>
                <li>
                  Conduct that harms our Services or other users
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your right to use the Services ceases
                immediately. We may retain data as required by law or for
                legitimate business purposes.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                10. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of Arizona, without regard to its
                conflict of law provisions. Any legal action or proceeding shall be
                exclusively brought in the state and federal courts located in
                Arizona.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                11. Contact for Legal Matters
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have questions about these Terms of Service, please contact
                us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 font-medium mb-2">
                  Gold Canyon AI
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Gold Canyon, Arizona
                </p>
                <p className="text-gray-600 text-sm">
                  Email:{" "}
                  <a
                    href="mailto:legal@goldcanyonai.com"
                    className="text-navy hover:text-navy-dark font-medium"
                  >
                    legal@goldcanyonai.com
                  </a>
                </p>
              </div>
            </div>

            {/* Changes Section */}
            <div className="mb-10 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Modifications to Terms
              </h3>
              <p className="text-gray-700">
                We reserve the right to modify these Terms of Service at any time.
                Substantial changes will be announced via email or prominent notice
                on our website. Your continued use of the Services after such
                modifications constitutes your acceptance of the updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal">
              Legal Documentation
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              href="/legal/privacy"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-navy hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Privacy Policy
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Learn how we collect, use, and protect your personal information.
              </p>
              <div className="inline-flex items-center gap-2 text-navy font-medium hover:text-navy-dark">
                Read Privacy Policy
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/contact"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-navy hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Questions About These Terms?
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Get in touch with our team if you have any concerns or inquiries.
              </p>
              <div className="inline-flex items-center gap-2 text-navy font-medium hover:text-navy-dark">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
