"use client";
import { useStore } from "@/lib/store";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, user, clearCart } = useStore();
  const router = useRouter();
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const deliveryFee = cart.length > 0 ? 2.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Your cart is empty
        </h1>
        <p className="text-gray-500 mb-6">
          Add some delicious food to get started
        </p>
        <Link
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          Browse Restaurants
        </Link>
      </div>
    );
  }

  const handleCheckout = () => {
    if (!user) {
      router.push("/login?redirect=/cart");
      return;
    }
    router.push("/checkout");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
        <button
          onClick={clearCart}
          className="text-sm text-red-500 hover:text-red-700 font-medium flex items-center gap-1"
        >
          <Trash2 size={16} /> Clear Cart
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-3">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-sm text-orange-800">
            Ordering from <strong>{cart[0].restaurantName}</strong>
          </div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 flex gap-4 border border-gray-100"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                unoptimized
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="text-orange-600 font-semibold">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1.5 hover:bg-gray-200 rounded"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-medium w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1.5 hover:bg-gray-200 rounded"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100 h-fit sticky top-20">
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-orange-600">${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
