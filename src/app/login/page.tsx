"use client";
import { useStore } from "@/lib/store";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12 bg-gray-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md animate-pulse">
            <div className="h-8 bg-gray-100 rounded mb-4" />
            <div className="h-12 bg-gray-100 rounded mb-3" />
            <div className="h-12 bg-gray-100 rounded" />
          </div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const { login } = useStore();
  const router = useRouter();
  const params = useSearchParams();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const displayName = mode === "signup" ? name : email.split("@")[0];
    login(email, displayName);
    router.push(params.get("redirect") || "/");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12 bg-gray-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3">
            D
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h1>
          <p className="text-gray-500 text-sm">
            {mode === "login" ? "Sign in to continue" : "Join DorahDash today"}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold"
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>
        <div className="text-center mt-4 text-sm">
          {mode === "login" ? (
            <p>
              New here?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-orange-600 font-medium"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-orange-600 font-medium"
              >
                Sign in
              </button>
            </p>
          )}
        </div>
        <div className="mt-6 pt-4 border-t text-center text-xs text-gray-500">
          Demo app · Any email/password works
        </div>
      </div>
    </div>
  );
}
