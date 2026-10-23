"use client";
import { useState } from "react";
import {
  Store,
  TrendingUp,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    restaurant: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
            <Store size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Grow your restaurant with DorahDash
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join thousands of restaurants delivering happiness to customers. Get
            more orders, reach new customers, and boost your revenue.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: "More Orders",
              desc: "Reach thousands of hungry customers in your city every single day.",
              color: "text-green-500",
              bg: "bg-green-100",
            },
            {
              icon: Users,
              title: "Wider Reach",
              desc: "Get discovered by new customers who love your cuisine.",
              color: "text-blue-500",
              bg: "bg-blue-100",
            },
            {
              icon: ShieldCheck,
              title: "Reliable Payments",
              desc: "Get paid weekly with detailed financial reporting.",
              color: "text-purple-500",
              bg: "bg-purple-100",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
            >
              <div
                className={`w-14 h-14 ${b.bg} ${b.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
              >
                <b.icon size={26} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-4 mt-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Application Received!
              </h2>
              <p className="text-gray-500 mb-6">
                Thank you for your interest. Our partnership team will reach out
                within 24 hours.
              </p>
              <Link
                href="/owner"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold"
              >
                Explore Owner Dashboard <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Apply to Partner
                </h2>
                <p className="text-gray-500 mt-2">
                  Fill out the form and we&apos;ll get back to you shortly.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    Restaurant Name
                  </label>
                  <input
                    required
                    value={form.restaurant}
                    onChange={(e) =>
                      setForm({ ...form, restaurant: e.target.value })
                    }
                    placeholder="My Awesome Restaurant"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    City
                  </label>
                  <input
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Nairobi"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold mt-2"
                >
                  Submit Application
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
