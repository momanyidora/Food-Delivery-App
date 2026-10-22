"use client";
import Link from "next/link";
import {
  ShoppingBag,
  User,
  MapPin,
  LogOut,
  Package,
  ChefHat,
  Globe, // Added import
} from "lucide-react";
import { useStore } from "@/lib/store";
import { useState } from "react";
import AddressModal from "./AddressModal";

export default function Header() {
  const { cart, user, logout, deliveryAddress } = useStore();
  const [showUser, setShowUser] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const itemCount = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            D
          </div>
          <span className="text-xl font-bold text-gray-900">DorahDash</span>
        </Link>

        <button
          onClick={() => setShowAddressModal(true)}
          className="hidden md:flex items-center gap-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition truncate max-w-[250px]"
        >
          <MapPin size={16} className="text-orange-500" />
          <span>Deliver to</span>
          <span className="font-semibold text-gray-900 truncate">
            {deliveryAddress}
          </span>
        </button>

        <nav className="flex items-center gap-2">
          {user && (
            <Link
              href="/orders"
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Package size={18} /> Orders
            </Link>
          )}

          <Link
            href="/about"
            className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Globe size={18} /> About Us
          </Link>

          <Link
            href="/owner"
            className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <ChefHat size={18} /> For Owners
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <ShoppingBag size={18} />
            <span className="hidden sm:inline">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowUser(!showUser)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {user.name[0].toUpperCase()}
                </div>
                <span className="hidden sm:inline">{user.name}</span>
              </button>
              {showUser && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <Link
                    href="/orders"
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setShowUser(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <LogOut size={14} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg"
            >
              <User size={16} /> Sign In
            </Link>
          )}
        </nav>
      </div>
      {showAddressModal && (
        <AddressModal onClose={() => setShowAddressModal(false)} />
      )}
    </header>
  );
}
