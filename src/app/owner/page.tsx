"use client";
import { useStore } from "@/lib/store";
import { useState } from "react";
import { Package, ChefHat, Bike, CheckCircle2, TrendingUp } from "lucide-react";

export default function OwnerDashboard() {
  const { orders, updateOrderStatus } = useStore();

  // Simulate an owner logged in for "Bella Italia"
  const myRestaurant = "Bella Italia";
  const myOrders = orders.filter((o) =>
    o.items.some((i) => i.restaurantName === myRestaurant),
  );

  const stats = {
    totalRevenue: myOrders.reduce((s, o) => s + o.total, 0),
    activeOrders: myOrders.filter((o) => o.status !== "delivered").length,
    completed: myOrders.filter((o) => o.status === "delivered").length,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Owner Dashboard</h1>
          <p className="text-gray-500">
            Managing:{" "}
            <span className="font-bold text-gray-900">{myRestaurant}</span>
          </p>
        </div>
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />{" "}
          Store Open
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <TrendingUp size={20} />
            </div>
            <p className="text-sm font-medium text-gray-600">Total Revenue</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            ${stats.totalRevenue.toFixed(2)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
              <Package size={20} />
            </div>
            <p className="text-sm font-medium text-gray-600">Active Orders</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {stats.activeOrders}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 text-green-600 rounded-lg">
              <CheckCircle2 size={20} />
            </div>
            <p className="text-sm font-medium text-gray-600">Completed</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">Live Orders</h2>

      {myOrders.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-xl border border-gray-100">
          <p className="text-gray-500">
            No orders yet. Place a test order from the customer app to see it
            here!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {myOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-gray-900">#{order.id}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold uppercase ${
                      order.status === "confirmed"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "preparing"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "on_way"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-green-100 text-green-700"
                    }`}
                  >
                    {order.status.replace("_", " ")}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {order.items
                    .map((i) => `${i.quantity}x ${i.name}`)
                    .join(", ")}
                </p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  ${order.total.toFixed(2)}
                </p>
              </div>

              <div className="flex gap-2">
                {order.status === "confirmed" && (
                  <button
                    onClick={() => updateOrderStatus(order.id, "preparing")}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
                  >
                    <ChefHat size={16} /> Start Preparing
                  </button>
                )}
                {order.status === "preparing" && (
                  <button
                    onClick={() => updateOrderStatus(order.id, "on_way")}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
                  >
                    <Bike size={16} /> Hand to Driver
                  </button>
                )}
                {order.status === "on_way" && (
                  <span className="text-sm text-gray-500 italic px-4 py-2">
                    Waiting for delivery...
                  </span>
                )}
                {order.status === "delivered" && (
                  <span className="text-sm text-green-600 font-bold px-4 py-2 flex items-center gap-1">
                    <CheckCircle2 size={16} /> Completed
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
