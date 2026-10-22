"use client";
import { useStore } from "@/lib/store";
import Link from "next/link";
import { Package, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export default function OrdersPage() {
  const { orders } = useStore();

  if (orders.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <Package size={64} className="mx-auto text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h1>
        <p className="text-gray-500 mb-6">
          Your order history will appear here
        </p>
        <Link
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          Start Ordering
        </Link>
      </div>
    );
  }

  const statusColors: Record<string, string> = {
    confirmed: "bg-blue-100 text-blue-700",
    preparing: "bg-yellow-100 text-yellow-700",
    on_way: "bg-orange-100 text-orange-700",
    delivered: "bg-green-100 text-green-700",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Orders</h1>
      <div className="space-y-3">
        {orders.map((order) => (
          <Link
            key={order.id}
            href={`/track/${order.id}`}
            className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-bold text-gray-900">#{order.id}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock size={12} />{" "}
                  {formatDistanceToNow(new Date(order.createdAt))} ago
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${statusColors[order.status]}`}
              >
                {order.status.replace("_", " ")}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {order.items.length} items · {order.items[0]?.restaurantName}
              </span>
              <span className="font-bold text-orange-600">
                ${order.total.toFixed(2)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
