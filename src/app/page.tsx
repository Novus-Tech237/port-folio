
import FeatureCarousel from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/header";
import Marquee from "@/components/marquee";
import Header from "@/components/navbar";
import Timeline from "@/components/timeline";
import Partners from "@/components/partners";
import PricingSection from "@/components/pricing";
import Contact from "@/components/conatct";

export default function Home() {
  return (
    <div >
      <Header/>
      <Hero/>
      <FeatureCarousel/>
      <Timeline/>
      <Partners/>
      <PricingSection/>
      <Marquee/>
      <Contact/>
      <Footer/>
    </div>
  );
}
