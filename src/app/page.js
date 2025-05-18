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
      <div className="grid grid-cols-1 md:grid-cols-1 gap-20 py-20 px-20">

            <FeatureCard
        name="Alert System"
        description="Stay informed with real-time alerts for market changes, ensuring you never miss critical updates."
        feature={"alert"}
        className=""
      />

      <FeatureCard
        name="Compare Coins"
        description="Easily compare multiple cryptocurrencies side-by-side to analyze performance, trends, and market data."
        className=""
        feature={"compare"}
      />

      <FeatureCard
        name="Make Friends"
        description="Connect with fellow crypto enthusiasts — share insights, follow trends, and see what the community is up to. It's your social hub for the crypto world!"
        className="" 
        feature={"profile"}
      />
      </div>



      <Footer />
    </div>
  );
}
