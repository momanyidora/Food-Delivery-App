import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  restaurantId: string;
  restaurantName: string;
  image: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "confirmed" | "preparing" | "on_way" | "delivered";
  createdAt: string;
  address: string;
  estimatedTime: number;
  driver?: { name: string; phone: string; lat: number; lng: number };
}

interface Store {
  deliveryAddress: string;
  setDeliveryAddress: (address: string) => void;
  cart: CartItem[];
  orders: Order[];
  user: { name: string; email: string } | null;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  placeOrder: (address: string) => Order;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
  login: (email: string, name: string) => void;
  logout: () => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      deliveryAddress: "Current Location",
      setDeliveryAddress: (address) => set({ deliveryAddress: address }),
      cart: [],
      orders: [],
      user: null,
      addToCart: (item) => {
        const cart = get().cart;
        const existing = cart.find((i) => i.id === item.id);
        // Only allow items from same restaurant
        if (cart.length > 0 && cart[0].restaurantId !== item.restaurantId) {
          if (!confirm("Replace cart with items from new restaurant?")) return;
          set({ cart: [{ ...item, quantity: 1 }] });
          return;
        }
        if (existing) {
          set({
            cart: cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
            ),
          });
        } else {
          set({ cart: [...cart, { ...item, quantity: 1 }] });
        }
      },
      removeFromCart: (id) =>
        set({ cart: get().cart.filter((i) => i.id !== id) }),
      updateQuantity: (id, qty) => {
        if (qty <= 0) {
          set({ cart: get().cart.filter((i) => i.id !== id) });
        } else {
          set({
            cart: get().cart.map((i) =>
              i.id === id ? { ...i, quantity: qty } : i,
            ),
          });
        }
      },
      clearCart: () => set({ cart: [] }),
      placeOrder: (address) => {
        const cart = get().cart;
        const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
        const order: Order = {
          id: "ORD-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
          items: [...cart],
          total: total + 2.99,
          status: "confirmed",
          createdAt: new Date().toISOString(),
          address,
          estimatedTime: Math.floor(Math.random() * 15) + 25,
          driver: {
            name: ["Alex", "Sam", "Jordan", "Taylor"][
              Math.floor(Math.random() * 4)
            ],
            phone:
              "+1 (555) " +
              Math.floor(Math.random() * 900 + 100) +
              "-" +
              Math.floor(Math.random() * 9000 + 1000),
            lat: 40.7128 + (Math.random() - 0.5) * 0.05,
            lng: -74.006 + (Math.random() - 0.5) * 0.05,
          },
        };
        set({ orders: [order, ...get().orders], cart: [] });
        // Auto progress order
        setTimeout(() => get().updateOrderStatus(order.id, "preparing"), 8000);
        setTimeout(() => get().updateOrderStatus(order.id, "on_way"), 20000);
        setTimeout(() => get().updateOrderStatus(order.id, "delivered"), 45000);
        return order;
      },
      updateOrderStatus: (orderId, status) =>
        set({
          orders: get().orders.map((o) =>
            o.id === orderId ? { ...o, status } : o,
          ),
        }),
      login: (email, name) => set({ user: { email, name } }),
      logout: () => set({ user: null, cart: [], orders: [] }),
      favorites: [],
      toggleFavorite: (id) =>
        set({
          favorites: get().favorites.includes(id)
            ? get().favorites.filter((favorite) => favorite !== id)
            : [...get().favorites, id],
        }),
    }),
    { name: "food-delivery-store" },
  ),
);
