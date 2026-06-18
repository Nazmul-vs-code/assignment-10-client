'use client'
import BannerSlider from "@/components/home/BannerSlider";
import LetestProducts from "@/components/LetestProducts";
import PopulerCategories from "@/components/PopulerCategories";

export default function Home() {
  return (
    <div>
      <BannerSlider/>
      {/* <LetestProducts /> */}
      <PopulerCategories />
    </div>
  );
}
