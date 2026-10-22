import { Suspense } from "react";
import RestaurantContent from "./RestaurantContent";

export default function RestaurantPage() {
  return (
    <Suspense
      fallback={
        <div className="p-20 text-center text-gray-500 animate-pulse">
          Loading menu...
        </div>
      }
    >
      <RestaurantContent />
    </Suspense>
  );
}
