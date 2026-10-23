import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
          <FileText size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-gray-500 text-sm">
            Last updated: October 23, 2026
          </p>
        </div>
      </div>

      <div className="prose max-w-none text-gray-600 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using DorahDash, you agree to be bound by these
            Terms of Service. If you do not agree, please do not use our
            platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            2. Ordering and Delivery
          </h2>
          <p>
            DorahDash acts as a platform connecting customers with independent
            restaurants and delivery drivers. We do not prepare the food
            ourselves. Estimated delivery times are provided as guidelines and
            may vary due to weather, traffic, or restaurant delays.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            3. Payments and Refunds
          </h2>
          <p>
            All prices include applicable taxes. Delivery fees are added at
            checkout. If your order arrives significantly damaged or incorrect,
            you may be eligible for a refund or credit within 1 hour of
            delivery, subject to verification.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            4. User Conduct
          </h2>
          <p>
            You agree not to use our platform for any unlawful purpose, to
            harass our drivers or restaurant partners, or to attempt to hack or
            disrupt our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            5. Limitation of Liability
          </h2>
          <p>
            DorahDash is not liable for any indirect, incidental, or
            consequential damages arising from the use of our service. Our
            maximum liability is limited to the value of your order.
          </p>
        </section>
      </div>
    </div>
  );
}
