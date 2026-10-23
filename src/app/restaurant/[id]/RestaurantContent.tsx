"use client";
import { restaurants, MenuItem } from "@/lib/data";
import { useStore } from "@/lib/store";
import ItemModal from "@/components/ItemModel";
import Image from "next/image";
import { Star, Clock, Bike, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function RestaurantContent() {
  const params = useParams();
  const restaurant = restaurants.find((r) => r.id === params.id);
  const { cart } = useStore();
  const [category, setCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null); // State for modal

  if (!restaurant)
    return (
      <div className="p-10 text-center text-gray-500">Restaurant not found</div>
    );

  const categories = [
    "All",
    ...new Set(restaurant.menu.map((m) => m.category)),
  ];
  const menu = restaurant.menu.filter(
    (m) => category === "All" || m.category === category,
  );
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div>
      <div className="relative h-64 md:h-80">
        <Image
          src={restaurant.cover}
          alt={restaurant.name}
          fill
          unoptimized
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
        <Link
          href="/"
          className="absolute top-4 left-4 bg-white/90 p-2 rounded-full hover:bg-white text-gray-900"
        >
          <ArrowLeft size={20} />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {restaurant.name}
          </h1>
          <p className="opacity-90 mb-3">{restaurant.cuisine}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />{" "}
              {restaurant.rating} ({restaurant.reviews})
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {restaurant.deliveryTime}
            </span>
            <span className="flex items-center gap-1">
              <Bike size={14} /> ${restaurant.deliveryFee} delivery
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-3 overflow-x-auto pb-4 mb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                category === c
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {menu.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)} // Trigger modal on click
              className="bg-white rounded-xl p-4 flex gap-4 border border-gray-100 hover:shadow-md transition cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
                unoptimized
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-orange-600">
                    ${item.price.toFixed(2)}
                  </span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1">
                    <Plus size={14} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {cartCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 animate-slide-up z-30">
          <Link
            href="/cart"
            className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-xl shadow-2xl flex items-center justify-between"
          >
            <div>
              <div className="text-sm opacity-90">{cartCount} items</div>
              <div className="text-xl font-bold">${cartTotal.toFixed(2)}</div>
            </div>
            <div className="font-bold">View Cart →</div>
          </Link>
        </div>
      )}

      {/* RENDER THE MODAL */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          restaurantId={restaurant.id}
          restaurantName={restaurant.name}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
