'use client'
import Hero from "@/components/home/hero/Hero";
import MarketplaceStatistics from "@/components/home/MarketplaceStatistics";
import PopulerCategoryChart from "@/components/home/PopulerCategoryChart";
import SuccessStories from "@/components/home/SuccessStories";
import LetestProducts from "@/components/LetestProducts";
import PopulerCategories from "@/components/PopulerCategories";

export default function Home() {
  return (
    <div className="w-[100%] mx-auto flex flex-col gap-4 mb-9">
      <Hero/>
      <LetestProducts />
      <PopulerCategories />
    <PopulerCategoryChart />
    <SuccessStories />
    <MarketplaceStatistics />
    </div>
  );
}
