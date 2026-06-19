'use client'
import BannerSlider from "@/components/home/BannerSlider";
import PopulerCategoryChart from "@/components/home/PopulerCategoryChart";
import LetestProducts from "@/components/LetestProducts";
import PopulerCategories from "@/components/PopulerCategories";

export default function Home() {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-4">
      <BannerSlider/>
      <LetestProducts />
      <PopulerCategories />
    <PopulerCategoryChart />
    </div>
  );
}
