// import { ButtonDemo } from "@/components/Cta";
import { AnimatedTestimonialsDemo } from "@/components/Aboutus/page";
import Blog from "@/components/Blog-showcase/page";
import { AppleCardsCarouselDemo } from "@/components/carousel/page";
import CreateAccount from "@/components/CreateAccount";
import Footer from "@/components/footer/page";
import Header from "@/components/Header/page";
import { AnimatedPinDemo } from "@/components/Upcoming-Events/page";
import { MarqueeDemo } from "@/components/WhatSay";
import WhyUS from "@/components/why-Choose-Us/page";

export default function Home() {
  return (
    <div className="bg-darkBlue overflow-hidden">
      
      <Header/>
      
      <AnimatedTestimonialsDemo/>
      <WhyUS/>
      <AppleCardsCarouselDemo/>
      <CreateAccount/>
      <MarqueeDemo/>
      <AnimatedPinDemo/>
      <Blog/>
      <Footer/>

      
    </div>
  );
}
