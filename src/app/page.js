import BusinessCounter from "@/Components/BusinessCounter";
import BusinessRock from "@/Components/BusinessRock";
import Collection from "@/Components/Collection";
import DesignQuality from "@/Components/DesignQuality";
import HomeHeroSection from "@/Components/HomeHeroSection";
import HomeServiceSlider from "@/Components/HomeServiceSlider";
import MagicHappens from "@/Components/MagicHappens";
import Pricing from "@/Components/Pricing";
import TechSlider from "@/Components/TechSlider";
import Testimonials from "@/Components/Testimonials";
import "./globals.css";
export default function Home() {
  return (
<main>
<HomeHeroSection/>
<HomeServiceSlider/>
<MagicHappens/>
<TechSlider/>
<Collection/>
<BusinessRock/>
<Pricing/>
<BusinessCounter/>
<DesignQuality/>
<Testimonials/>
</main>
  );
}
