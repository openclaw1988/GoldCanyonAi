import { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
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
                <Shield className="w-8 h-8 text-gold" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Privacy <span className="text-gold">Policy</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Your privacy matters to us. Here's how we protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
            <p className="text-amber-900">
              <strong>Note:</strong> This is a placeholder privacy policy. It will
              be replaced with a Termly-generated privacy policy that reflects our
              actual data practices and complies with applicable privacy laws
              (GDPR, CCPA, etc.). This placeholder is provided for reference only.
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
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We collect information you provide directly to us, such as when
                you create an account, use our services, contact us, or interact
                with our website. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Name and contact information (email, phone)</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Company and business information</li>
                <li>Communication preferences</li>
                <li>
                  Information you provide when using our products and services
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We also automatically collect certain information about your
                interactions with our website and services, including IP address,
                browser type, pages visited, and time stamps.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Communicate with you about service updates and changes</li>
                <li>
                  Respond to your inquiries and provide customer support
                </li>
                <li>
                  Send promotional communications (with your consent where
                  required)
                </li>
                <li>
                  Monitor and analyze usage patterns and service performance
                </li>
                <li>
                  Detect and prevent fraudulent transactions and other illegal
                  activities
                </li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                3. How We Share Your Information
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Service Providers:</strong> With vendors and service
                  providers who assist us in operating our website and conducting
                  our business
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court
                  order, or government request
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any
                  merger, bankruptcy, or sale of assets
                </li>
                <li>
                  <strong>With Your Consent:</strong> With your explicit permission
                  for specific purposes
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                All service providers are contractually obligated to use your
                information only as necessary to provide services to us and are
                required to maintain the confidentiality of your information.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                4. Security of Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. This includes
                encryption, secure servers, and access controls. However, no
                method of transmission over the Internet is 100% secure. While we
                strive to protect your information, we cannot guarantee absolute
                security.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your
                experience on our website and services. These may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Essential Cookies:</strong> Required for basic website
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> To understand how you use our
                  services
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> To deliver relevant marketing
                  content
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can control cookie preferences through your browser settings,
                though this may affect the functionality of our services.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Depending on your location, you may have rights regarding your
                personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Right to access your personal information</li>
                <li>Right to correct or update your information</li>
                <li>Right to request deletion of your information</li>
                <li>Right to object to certain processing activities</li>
                <li>Right to data portability</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise any of these rights, please contact us using the
                information provided in the Contact section below.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                7. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to
                provide our services, fulfill the purposes for which it was
                collected, and comply with legal obligations. The retention period
                may vary depending on the type of information and the purposes for
                which we use it.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                8. Contact Us
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have questions about this Privacy Policy or our privacy
                practices, please contact us at:
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
                    href="mailto:privacy@goldcanyonai.com"
                    className="text-navy hover:text-navy-dark font-medium"
                  >
                    privacy@goldcanyonai.com
                  </a>
                </p>
              </div>
            </div>

            {/* Changes Section */}
            <div className="mb-10 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Changes to This Policy
              </h3>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Changes will
                be effective upon posting to our website. Your continued use of our
                services following any changes constitutes your acceptance of the
                updated policy.
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
              href="/legal/terms"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-navy hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Terms of Service
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Our terms and conditions for using Gold Canyon AI services.
              </p>
              <div className="inline-flex items-center gap-2 text-navy font-medium hover:text-navy-dark">
                Read Full Terms
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/contact"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-navy hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Questions About Privacy?
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Get in touch with our team about privacy concerns or requests.
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
