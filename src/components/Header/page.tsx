"use client";
import React from "react";
import { MovingBorderDemo } from "../button"
import { BorderBeamDemo } from "../light-border"
import NavMenu from "../NavMenu"
import { LampContainer, LampDemo } from "../ui/lamp"
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";

const Header = () => {
    return (
      
      
      <main>
        
        <LampDemo/>
        <motion.section 
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" flex items-center justify-center bg-darkBlue ">
          <div className="relative flex h-[350px] w-[780px] flex-col  items-center justify-center overflow-hidden rounded-xl border bg-background md:shadow-xl -mt-20">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            <video src="/graduate1.mp4" className="h-full w-full rounded-lg object-cover" controls 
            autoPlay 
            muted 
            loop>
            </video>
            </span>
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </motion.section>

       
        <section>
            
        </section>
      </main>
      
        

    )
  }
  
  export default Header
  