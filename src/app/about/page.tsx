import Link from "next/link";
import {
  Globe,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg md:text-xl opacity-90">
            DorahDash was born from a simple idea: food tastes better when it
            reaches you fast, fresh, and hassle-free.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-4 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are on a mission to connect people with the best food in their
              cities from local street food stalls to fine dining restaurants.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Started in Nairobi and now expanding across Africa, Europe, and
              Asia, DorahDash is building the most reliable, transparent, and
              delightful food delivery platform in the world.
            </p>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=800&fit=crop"
              alt="Chef preparing food"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          What Makes Us Different?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              desc: "Our smart dispatch system ensures your food arrives hot and on time, every time.",
              color: "text-yellow-500",
              bg: "bg-yellow-100",
            },
            {
              icon: ShieldCheck,
              title: "Trusted Quality",
              desc: "We partner only with highly rated restaurants and vet every delivery driver.",
              color: "text-blue-500",
              bg: "bg-blue-100",
            },
            {
              icon: Globe,
              title: "Global Reach",
              desc: "From Nairobi to Lagos, Dar to Dubai, we deliver across borders and cultures.",
              color: "text-green-500",
              bg: "bg-green-100",
            },
            {
              icon: Heart,
              title: "Customer Obsessed",
              desc: "Real humans answering your calls 24/7. Your satisfaction is our only metric.",
              color: "text-red-500",
              bg: "bg-red-100",
            },
            {
              icon: Users,
              title: "Empowering Partners",
              desc: "We help local restaurant owners grow by giving them tools and data to succeed.",
              color: "text-purple-500",
              bg: "bg-purple-100",
            },
            {
              icon: ArrowRight,
              title: "Always Innovating",
              desc: "Live tracking, AI recommendations, and next-gen tech to make ordering seamless.",
              color: "text-orange-500",
              bg: "bg-orange-100",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition"
            >
              <div
                className={`w-12 h-12 ${v.bg} ${v.color} rounded-xl flex items-center justify-center mb-4`}
              >
                <v.icon size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to taste the future?
        </h2>
        <p className="text-gray-500 mb-8">
          Join millions of happy customers who trust DorahDash every day.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          Browse Restaurants <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
}
