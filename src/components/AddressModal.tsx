"use client";

import { useState } from "react";
import { MapPin, Navigation, Search, X } from "lucide-react";
import { useStore } from "@/lib/store";

export default function AddressModal({ onClose }: { onClose: () => void }) {
  const { setDeliveryAddress } = useStore();
  const [address, setAddress] = useState("");

  const handleSave = (nextAddress: string) => {
    if (!nextAddress.trim()) return;
    setDeliveryAddress(nextAddress);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-slide-up">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">
            Where shall we deliver to?
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full text-gray-500"
            aria-label="Close address dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5">
          <div className="relative mb-4">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Search for a street, area or postcode..."
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              autoFocus
            />
          </div>

          <button
            onClick={() => handleSave("Current Location (GPS)")}
            className="w-full flex items-center gap-3 p-3 mb-4 text-orange-600 bg-orange-50 hover:bg-orange-100 border border-orange-100 rounded-xl transition text-left"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Navigation size={18} className="fill-orange-500" />
            </div>
            <div>
              <p className="font-bold text-sm">Use current location</p>
              <p className="text-xs text-orange-600/70">
                GPS is usually the fastest
              </p>
            </div>
          </button>

          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Saved Addresses
          </p>
          <div className="space-y-2">
            <button
              onClick={() => handleSave("123 Main St, Apt 4B, New York")}
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 border border-gray-100 rounded-xl transition text-left"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Home</p>
                <p className="text-xs text-gray-500">
                  123 Main St, Apt 4B, New York
                </p>
              </div>
            </button>
            <button
              onClick={() =>
                handleSave("456 Corporate Blvd, Floor 12, NY")
              }
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 border border-gray-100 rounded-xl transition text-left"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Work</p>
                <p className="text-xs text-gray-500">
                  456 Corporate Blvd, Floor 12, NY
                </p>
              </div>
            </button>
          </div>

          {address && (
            <button
              onClick={() => handleSave(address)}
              className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold"
            >
              Confirm Address
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
