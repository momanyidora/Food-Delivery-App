"use client";
import { useStore } from "@/lib/store";
import { useParams } from "next/navigation";
import {
  CheckCircle2,
  Bike,
  MapPin,
  Phone,
  Package,
  ChefHat,
} from "lucide-react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import map to avoid SSR issues
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

const steps = [
  { key: "confirmed", label: "Order Confirmed", icon: CheckCircle2 },
  { key: "preparing", label: "Preparing Food", icon: ChefHat },
  { key: "on_way", label: "On the Way", icon: Bike },
  { key: "delivered", label: "Delivered", icon: Package },
];

export default function TrackPage() {
  const params = useParams();
  const { orders } = useStore();
  const order = orders.find((o) => o.id === params.id);

  // Simulated moving driver location
  const [driverPos, setDriverPos] = useState<[number, number]>([
    40.7128, -74.006,
  ]);

  const orderStatus = order?.status;
  useEffect(() => {
    // Move driver slowly towards the destination if on the way
    if (orderStatus !== "on_way") return;
    const interval = setInterval(() => {
      setDriverPos((prev) => [
        prev[0] + (40.72 - prev[0]) * 0.05,
        prev[1] + (-74.01 - prev[1]) * 0.05,
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, [orderStatus]);

  if (!order)
    return (
      <div className="p-20 text-center text-gray-500">Order not found</div>
    );

  const currentStep = steps.findIndex((s) => s.key === order.status);
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm opacity-90">Order #{order.id}</span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase">
            {order.status.replace("_", " ")}
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-1">Estimated delivery</h1>
        <p className="text-3xl font-bold">
          {order.status === "delivered"
            ? "Arrived!"
            : `${order.estimatedTime} min`}
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
        <div className="relative">
          <div className="absolute top-5 left-5 right-5 h-1 bg-gray-200 rounded-full">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="relative flex justify-between">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const active = i <= currentStep;
              return (
                <div
                  key={step.key}
                  className="flex flex-col items-center flex-1"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition ${active ? "bg-orange-500 text-white shadow-md" : "bg-gray-200 text-gray-400"}`}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    className={`text-xs mt-2 text-center ${active ? "text-gray-900 font-semibold" : "text-gray-400"}`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Real Map Integration */}
      <div className="mb-6">
        <Map
          lat={40.72}
          lng={-74.01}
          driverLat={order.status === "on_way" ? driverPos[0] : undefined}
          driverLng={order.status === "on_way" ? driverPos[1] : undefined}
        />
        <div className="mt-3 bg-white p-3 rounded-xl border border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
            <MapPin size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500">Delivering to</p>
            <p className="text-sm font-medium truncate">{order.address}</p>
          </div>
        </div>
      </div>

      {order.driver && order.status === "on_way" && (
        <div className="bg-white rounded-2xl p-4 border border-gray-100 mb-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl">
            {order.driver.name[0]}
          </div>
          <div className="flex-1">
            <p className="font-bold">{order.driver.name}</p>
            <p className="text-sm text-gray-500">Your delivery driver</p>
          </div>
          <a
            href={`tel:${order.driver.phone}`}
            className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600"
          >
            <Phone size={18} />
          </a>
        </div>
      )}

      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <h2 className="font-bold text-lg mb-3">Order Items</h2>
        <div className="space-y-2 mb-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>
                {item.quantity}× {item.name}
              </span>
              <span className="text-gray-600">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t pt-3 flex justify-between font-bold">
          <span>Total</span>
          <span className="text-orange-600">${order.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
