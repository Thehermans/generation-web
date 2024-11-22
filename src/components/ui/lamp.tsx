"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import NavMenu from "../NavMenu";
import { MovingBorderDemo } from "../button";
import { Button } from "./moving-border";
import { LuInstagram } from "react-icons/lu";
import { MdFacebook } from "react-icons/md";
import { TiSocialYoutube } from "react-icons/ti";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";





export function LampDemo() {
  return (
    <section>
      
     
    <LampContainer className="">
     
      <div className=" px-16 rounded-full border-2 border-slate-100 absolute ">
        <h1>Welcome to </h1>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 40 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br text-white text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl capitalize z-40"
      >

        Generational writers <br /> organisation
      </motion.h1>
      <motion.p 
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="text-center text-white text-lg  leading-5 absolute top-[210px]">A haven where authenticity, ingenuity, perseverance,<br/>commitment, and adaptability lead the way.</motion.p>
      <motion.section 
      initial={{ opacity: 0.5, y: 150 }}
      whileInView={{ opacity: 1, y: 10 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="absolute top-[250px] flex gap-5">
      
      
      <Button
        borderRadius="2rem"
        className=" dark:bg-slate-900 text-slate-200 dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Browse Our Portfolio
      </Button>
      <Button
        borderRadius="2rem"
        className=" dark:bg-slate-900 text-slate-200 dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Join Our Community
      </Button>
      </motion.section>

      <motion.div 
        initial={{ opacity: 0, x: -600 }}
        whileInView={{ opacity: 1, x: -400 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        className="text-2xl absolute flex flex-col gap-4 text-white top-20 justify-center items-center"
      >
        <Link href="/" className=" hover:text-slate-500"><LuInstagram /></Link>
        <Link href="/" className=" hover:text-slate-500"><MdFacebook /></Link>
        <Link href="/" className=" hover:text-slate-500"><TiSocialYoutube /></Link>
        <Link href="/" className=" hover:text-slate-500"><BsTwitterX /></Link>
        <div className="h-14 w-[1px] bg-white"></div>
          
          
          


      </motion.div>

      
      
    </LampContainer>
    </section>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0 ",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 pt-">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
