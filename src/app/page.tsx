"use client";
import { restaurants } from "@/lib/data";
import Link from "next/link";
import {
  Star,
  Clock,
  Bike,
  Search,
  Flame,
  TrendingUp,
  Heart,
  SlidersHorizontal,
  Globe,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { useStore } from "@/lib/store";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Recommended");
  const { favorites, toggleFavorite } = useStore();

  const categories = [
    "All",
    "Pizza",
    "Sushi",
    "Burgers",
    "Mexican",
    "Healthy",
    "Indian",
    "Kenyan",
    "Nigerian",
    "Tanzanian",
    "Chinese",
    "Middle Eastern",
  ];

  let filtered = restaurants.filter(
    (r) =>
      (activeCategory === "All" ||
        r.cuisine.toLowerCase().includes(activeCategory.toLowerCase())) &&
      (r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(search.toLowerCase())),
  );

  if (sortBy === "Rating") filtered.sort((a, b) => b.rating - a.rating);
  if (sortBy === "Price: Low to High")
    filtered.sort((a, b) => a.priceTier - b.priceTier);
  if (sortBy === "Price: High to Low")
    filtered.sort((a, b) => b.priceTier - a.priceTier);
  if (sortBy === "Delivery Time")
    filtered.sort(
      (a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime),
    );

  return (
    <div>
      <section className="relative bg-linear-to-r from-orange-500 to-red-500 text-white py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hungry? We got you.
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Order from the best restaurants near you, delivered fast.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search restaurants..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 min-w-max">
            <SlidersHorizontal size={16} className="text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-medium text-gray-700 focus:outline-none bg-transparent cursor-pointer"
            >
              <option>Recommended</option>
              <option>Rating</option>
              <option>Delivery Time</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="bg-linear-to-r from-purple-600 to-pink-500 rounded-2xl p-6 mb-8 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame size={20} />
              <span className="font-semibold">Limited Time Offer</span>
            </div>
            <h2 className="text-2xl font-bold">
              Free Delivery on orders over $25
            </h2>
            <p className="opacity-90">Use code DORAH25 at checkout</p>
          </div>
          <TrendingUp size={64} className="hidden md:block opacity-50" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {filtered.length} Restaurants{" "}
          {activeCategory !== "All" && `· ${activeCategory}`}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <div
              key={r.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-100 relative"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(r.id);
                }}
                className="absolute top-3 right-14 z-10 bg-white/90 p-1.5 rounded-full hover:scale-110 transition"
              >
                <Heart
                  size={16}
                  className={
                    favorites.includes(r.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-400"
                  }
                />
              </button>
              <Link href={`/restaurant/${r.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"; // Generic food fallback
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* BADGES ADDED HERE */}
                  {r.featured && (
                    <div className="absolute top-3 left-3 bg-linear-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-gray-900 shadow-sm">
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />{" "}
                    {r.rating}
                  </div>
                  {parseInt(r.deliveryTime) <= 25 && (
                    <div className="absolute bottom-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                      Fast Delivery
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900">{r.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{r.cuisine}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {r.deliveryTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bike size={14} /> ${r.deliveryFee}
                    </span>
                    <span className="ml-auto text-gray-500 text-xs">
                      {"$".repeat(r.priceTier)}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Countries We Deliver To Section */}
        <div className="mt-20 border-t border-gray-200 pt-16 pb-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-4">
              <Globe size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Countries Where We Deliver
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              DorahDash is growing fast! We currently operate across Europe,
              Africa, and Central Asia. Find your city and get your favorite
              food delivered right to your door.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              "Spain",
              "Italy",
              "Ukraine",
              "Romania",
              "Georgia",
              "Portugal",
              "Poland",
              "Morocco",
              "Kazakhstan",
              "Croatia",
              "Kenya",
              "Côte D'Ivoire",
              "Serbia",
              "Moldova",
              "Uganda",
              "Bulgaria",
              "Montenegro",
              "Nigeria",
              "Armenia",
              "Tunisia",
              "Tanzania",
              "South Africa",
              "Ghana",
              "Egypt",
              "Ethiopia",
              "Rwanda",
              "Senegal",
              "Zambia",
              "Cameroon",
              "Algeria",
            ].map((country) => (
              <div
                key={country}
                className="flex items-center gap-2.5 bg-white border border-gray-100 p-3 rounded-xl hover:border-orange-300 hover:shadow-sm transition group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-orange-500 group-hover:bg-orange-50 transition">
                  <MapPin size={16} />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {country}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              Don&apos;t see your country?{" "}
              <a
                href="#"
                className="text-orange-500 font-medium hover:underline"
              >
                Request a city
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
