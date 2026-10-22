"use client";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MapPin, CreditCard, Check, Tag } from "lucide-react";

export default function CheckoutPage() {
  const { cart, user, placeOrder, deliveryAddress } = useStore();
  const router = useRouter();
  const [address, setAddress] = useState(
    deliveryAddress === "Current Location"
      ? "123 Main St, New York, NY 10001"
      : deliveryAddress,
  );
  const [payment, setPayment] = useState("card");
  const [processing, setProcessing] = useState(false);

  // Promo Code State
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);

  if (!user) {
    router.push("/login?redirect=/checkout");
    return null;
  }
  if (cart.length === 0) {
    router.push("/");
    return null;
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const deliveryFee = subtotal > 25 ? 0 : 2.99; // Free delivery over $25!
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax - discount;

  const applyPromo = () => {
    if (promo.toUpperCase() === "DORAH25") {
      setDiscount(5.0); // $5 off
    } else {
      alert("Invalid promo code");
    }
  };

  const handlePlaceOrder = () => {
    setProcessing(true);
    setTimeout(() => {
      const order = placeOrder(address);
      router.push(`/track/${order.id}`);
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
              <MapPin size={20} className="text-orange-500" /> Delivery Address
            </h2>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
              <CreditCard size={20} className="text-orange-500" /> Payment
              Method
            </h2>
            <div className="space-y-2">
              {["card", "cash"].map((p) => (
                <label
                  key={p}
                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer ${payment === p ? "border-orange-500 bg-orange-50" : "border-gray-200"}`}
                >
                  <input
                    type="radio"
                    checked={payment === p}
                    onChange={() => setPayment(p)}
                  />
                  <span className="font-medium capitalize">
                    {p === "card" ? "Credit / Debit Card" : "Cash on Delivery"}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100 h-fit">
          <h2 className="font-bold text-lg mb-4">Order Total</h2>

          {/* Promo Input */}
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Tag
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                placeholder="Promo code"
                className="w-full pl-9 pr-2 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 uppercase"
              />
            </div>
            <button
              onClick={applyPromo}
              className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
            >
              Apply
            </button>
          </div>

          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>
                {deliveryFee === 0 ? (
                  <span className="text-green-600 font-bold">FREE</span>
                ) : (
                  `$${deliveryFee.toFixed(2)}`
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-600 font-medium">
                <span>Discount (DORAH25)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t pt-2 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-orange-600">${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handlePlaceOrder}
            disabled={processing}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
          >
            {processing ? (
              "Processing..."
            ) : (
              <>
                <Check size={18} /> Place Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
