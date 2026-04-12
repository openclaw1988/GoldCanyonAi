"use client";

import { useState } from "react";
import { Mail, MapPin, Calendar, ArrowRight, ChevronDown } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

export default function ClientContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const projectTypes = [
    "Custom AI Development",
    "Template Purchase",
    "Resale Toolkit",
    "ERP",
    "ClearChart",
    "Chatbot",
    "Automation",
    "Other",
  ];

  const faqItems = [
    {
      question: "What happens after I reach out?",
      answer:
        "We'll review your inquiry and get back to you within 24 hours. If you're interested in custom development, we'll schedule a free 30-minute discovery call to understand your needs, scope the project, and discuss pricing and timeline.",
    },
    {
      question: "How much does a custom project cost?",
      answer:
        "Custom projects range from $2,500 for an AI Discovery Sprint to $40,000+ for full applications. The cost depends on scope, complexity, and timeline. We're transparent about pricing from the start — there are no surprise fees.",
    },
    {
      question: "Do you offer templates?",
      answer:
        "Yes! Every product we build is available as both a custom deployment and a ready-to-deploy template. Templates are significantly less expensive than custom development and include documentation and support.",
    },
    {
      question: "Where are you located?",
      answer:
        "We're based in Gold Canyon, Arizona. We work with clients globally, so location is no barrier. Most of our communication is handled via email, video calls, and our project management tools.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here (e.g., API call to send email)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

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
              Let's Build Something
              <br />
              <span className="text-gold">Together</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Whether you have a specific problem to solve, want to explore AI
              solutions, or are ready to discuss a custom build — we're here to
              help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-8">
                Send us a message
              </h2>
              {submitted ? (
                <div className="bg-teal/10 border border-teal rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Message sent!
                  </h3>
                  <p className="text-gray-600">
                    Thanks for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Company (Optional) */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Company <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="Tell us about your project, challenge, or question..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-navy hover:bg-navy-dark text-white font-semibold py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Email */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Reach out directly to discuss your project.
                    </p>
                    <a
                      href="mailto:contact@goldcanyonai.com"
                      className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-dark transition-colors"
                    >
                      contact@goldcanyonai.com
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Discovery Call */}
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl border border-gold/20 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">
                      Free 30-Minute Discovery Call
                    </h3>
                    <p className="text-gray-600">
                      Perfect for getting to know each other and exploring your
                      AI needs.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gold/20 text-center text-gray-600">
                  <Calendar className="w-8 h-8 text-gold/50 mx-auto mb-3" />
                  <p className="text-sm font-medium mb-2">
                    Book a discovery call
                  </p>
                  <p className="text-xs text-gray-500">
                    Calendly integration coming soon
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      Gold Canyon, Arizona
                      <br />
                      We work with clients globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Answers to common questions about working with us
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() =>
                    setSelectedFaq(selectedFaq === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                >
                  <h3 className="font-semibold text-charcoal text-lg">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ml-4 ${
                      selectedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {selectedFaq === index && (
                  <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Send us a message above, call, or book a discovery call. We'll get
            back to you within 24 hours.
          </p>
        </div>
      </section>
    </>
  );
}
