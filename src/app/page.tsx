// import { ButtonDemo } from "@/components/Cta";
import { AnimatedTestimonialsDemo } from "@/components/Aboutus/page";
import Blog from "@/components/Blog-showcase/page";
import { AppleCardsCarouselDemo } from "@/components/carousel/page";
import CreateAccount from "@/components/CreateAccount";
import Footer from "@/components/footer/page";
import Header from "@/components/Header/page";
import { NavigationMenuBar } from "@/components/Navbar";
import NavMenu from "@/components/NavMenu";
import { LampDemo } from "@/components/ui/lamp";
import { AnimatedPinDemo } from "@/components/Upcoming-Events/page";
import { MarqueeDemo } from "@/components/WhatSay";
import WhyUS from "@/components/why-Choose-Us/page";
import Image from "next/image";

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
