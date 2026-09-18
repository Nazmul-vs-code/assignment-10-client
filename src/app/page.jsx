'use client'
import BannerSlider from "@/components/home/BannerSlider";
import Hero from "@/components/home/hero/Hero";
import HeroScene from "@/components/home/hero/HeroScene";
import SplineHero from "@/components/home/hero/spline/SplineHero";
import MarketplaceStatistics from "@/components/home/MarketplaceStatistics";
import PopulerCategoryChart from "@/components/home/PopulerCategoryChart";
import SuccessStories from "@/components/home/SuccessStories";
import LetestProducts from "@/components/LetestProducts";
import PopulerCategories from "@/components/PopulerCategories";

export default function Home() {
  return (
    <div className="w-[97%] mx-auto flex flex-col gap-4 mb-9">
      {/* <BannerSlider/> */}
      {/* <HeroScene /> */}
      {/* <Hero/> */}
      <SplineHero />
      <LetestProducts />
      <PopulerCategories />
    <PopulerCategoryChart />
    <SuccessStories />
    <MarketplaceStatistics />
    </div>
  );
}
