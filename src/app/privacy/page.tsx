import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
          <ShieldCheck size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">
            Last updated: October 23, 2026
          </p>
        </div>
      </div>

      <div className="prose max-w-none text-gray-600 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            1. Information We Collect
          </h2>
          <p>
            At DorahDash, we collect information to provide you with a seamless
            food delivery experience. This includes:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Personal Data:</strong> Name, email address, phone number,
              and delivery addresses.
            </li>
            <li>
              <strong>Payment Information:</strong> Securely processed by our
              payment partners (we do not store full card details).
            </li>
            <li>
              <strong>Usage Data:</strong> Order history, browsing patterns, and
              device information.
            </li>
            <li>
              <strong>Location Data:</strong> Real-time location when you use
              our &quot;Deliver to Current Location&quot; feature.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            2. How We Use Your Information
          </h2>
          <p>We use the data we collect to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Process and deliver your orders accurately.</li>
            <li>Connect you with restaurants and delivery drivers.</li>
            <li>Send you real-time order tracking updates.</li>
            <li>Improve our services and recommend your favorite meals.</li>
            <li>Prevent fraud and ensure platform security.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            3. Sharing Your Information
          </h2>
          <p>
            We only share your information with the restaurant preparing your
            food and the driver delivering it. We never sell your personal data
            to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            4. Your Rights
          </h2>
          <p>
            You have the right to access, update, or delete your personal
            information at any time. You can manage your data in your account
            settings or contact us at{" "}
            <span className="text-orange-500 font-medium">
              dorahmomanyi5@gmail.com
            </span>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
