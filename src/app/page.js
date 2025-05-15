"use client";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Table from "@/components/Table";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <Hero />


      <Table />

      <FeatureCard
        name="Alert System"
        description="Stay informed with real-time alerts for market changes, ensuring you never miss critical updates."
        className="py-2"
      />
      <FeatureCard
        name="Compare Coins"
        description="Easily compare multiple cryptocurrencies side-by-side to analyze performance, trends, and market data."
      />
      <FeatureCard
        name="AI Predictions"
        description="Leverage advanced AI algorithms to forecast market trends and make data-driven investment decisions."
      />

      <Footer />
    </div>
  );
}
