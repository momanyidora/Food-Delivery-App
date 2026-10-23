"use client";
import { useState } from "react";
import { X, Send, MapPin } from "lucide-react";

export default function RequestCityModal({ onClose }: { onClose: () => void }) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-slide-up">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Request a City
              </h2>
              <p className="text-xs text-gray-500">
                Help us expand to your area!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded-full text-gray-500"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Request Sent!
            </h3>
            <p className="text-gray-500 text-sm">
              Thank you! We&apos;ll notify you as soon as DorahDash arrives in{" "}
              <strong>{city || "your city"}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Country
              </label>
              <input
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. Rwanda"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                City
              </label>
              <input
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Kigali"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Email (to notify you)
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 mt-2"
            >
              <Send size={18} /> Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
