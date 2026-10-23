"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "How do I track my order?",
    a: "Once you place an order, you will be redirected to a live tracking page. You can also click 'My Orders' in the header to see the status of any active order, including real-time driver location.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, as well as Cash on Delivery. We are also rolling out mobile money (M-Pesa, MTN MoMo) in select African countries.",
  },
  {
    q: "Can I cancel my order?",
    a: "You can cancel your order within 2 minutes of placing it for free. After the restaurant has started preparing your food, cancellations may be subject to a fee.",
  },
  {
    q: "How long does delivery take?",
    a: "Delivery times vary by restaurant but typically range from 20-45 minutes. You'll see an estimated time on each restaurant card before you order.",
  },
  {
    q: "Do you deliver to my country?",
    a: "We are rapidly expanding! We currently operate in over 30 countries across Europe, Africa, and Central Asia. Check the 'Countries Where We Deliver' section on our homepage.",
  },
  {
    q: "How do I become a delivery driver?",
    a: "We're always looking for friendly drivers! Click on 'Partner with Us' in the footer or visit our owner dashboard to apply.",
  },
  {
    q: "My food arrived cold. What should I do?",
    a: "We're sorry to hear that! Please contact our support team via the 'Contact Us' button in the footer within 1 hour of delivery, and we'll make it right.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-4">
          <HelpCircle size={32} />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500">
          Everything you need to know about DorahDash. Can&apos;t find an answer?
          Contact us!
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden transition hover:border-orange-200"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:bg-gray-50 transition"
            >
              {faq.q}
              <ChevronDown
                size={20}
                className={`text-gray-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-linear-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
        <p className="opacity-90 mb-5">
          Our support team is available 24/7 to help you out.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-orange-600 px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
