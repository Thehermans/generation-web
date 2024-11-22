import React from "react";
import { Button } from "../ui/moving-border";

const WhyUS = () => {
  return (
    <>
      <section className="overflow-hidden  pb-12  lg:pb-[90px]  dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-1 -mx-4">
            <div className="w-full px-10 md:px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-10 md:px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 text-white">
                <span className="block mb-4 text-lg font-semibold text-white">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-white dark:text-white sm:text-[40px]/[48px]">
                Inspiring and empowering Individuals through the art of writing.
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Generational Writers Organisation is committed to nurturing creative writers and providing the resources they need to thrive. Our services are designed to uplift generations through storytelling, helping individuals unlock their potential and connect with their voice.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                It is a long-established fact that a reader will be inspired by the impact of powerful, meaningful stories. The point of using our platform is that it supports both creativity and personal growth, allowing individuals to express themselves and make a lasting impact.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                A strong foundation starts with a clear vision. Secure your place in the world of storytelling by joining us—where authenticity, ingenuity, perseverance, commitment, and adaptability lead the way.
                </p>
                <Button
                    borderRadius="2rem"
                    className=" dark:bg-slate-900 text-slate-200 dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUS;
