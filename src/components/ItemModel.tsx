"use client";
import { useStore } from "@/lib/store";
import { X, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { MenuItem } from "@/lib/data";

export default function ItemModal({
  item,
  restaurantId,
  restaurantName,
  onClose,
}: {
  item: MenuItem;
  restaurantId: string;
  restaurantName: string;
  onClose: () => void;
}) {
  const { addToCart } = useStore();
  const [qty, setQty] = useState(1);
  const [instructions, setInstructions] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-slide-up">
        <div className="relative h-48">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full hover:bg-white"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
          <p className="text-gray-500 text-sm mt-1 mb-4">{item.description}</p>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Special Instructions
            </label>
            <input
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g. Extra spicy, no onions..."
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="p-2 hover:bg-white rounded-md"
              >
                <Minus size={16} />
              </button>
              <span className="font-bold w-6 text-center">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="p-2 hover:bg-white rounded-md"
              >
                <Plus size={16} />
              </button>
            </div>
            <span className="text-xl font-bold text-orange-600">
              ${(item.price * qty).toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => {
              for (let i = 0; i < qty; i++) {
                addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  restaurantId,
                  restaurantName,
                  image: item.image,
                });
              }
              onClose();
            }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
