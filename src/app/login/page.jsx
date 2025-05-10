"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("LOGIN with email:", email);
    // TODO: Replace with backend integration
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </form>
        <p className="text-sm text-gray-400 mt-4 text-center">
          Don't have an account? <a href="/signup" className="text-purple-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}