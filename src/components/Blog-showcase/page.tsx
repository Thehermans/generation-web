import React from "react";
import { Button } from "../ui/moving-border";

interface BlogCardProps {
    image: string;
    date?: string;
    CardTitle: string;
    CardDescription: string;
    author?: string;
  }

const Blog = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container flex flex-col mx-auto justify-center items-center">
          <div className="-mx-4 flex flex-wrap ">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                Stay updated with the latest happenings, insights, and milestones in the world of writing and literature. Explore news, stories, and achievements from renowned authors and the literary community.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mx-auto justify-center items-center">
            <BlogCard
              date="Dec 22, 2023"
              author="Joseph Otoo"
              CardTitle="Renowned Travel Writer Arthur Frommer Passes Away at 95"
              CardDescription="Arthur Frommer, the influential travel writer and creator of the popular travel guide series, has passed away at the age of 95. "
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Nov 22, 2023"
              author="Joseph Otoo"
              CardTitle="Independent Bookstores in China Face Growing Challenges"
              CardDescription="Independent bookstores in China are facing increasing challenges due to government restrictions, with several being shut down."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Feb 22, 2023"
              author="Joseph Otoo"
              CardTitle="Dr. Elizabeth Nunez Honored for Lifetime Literary Contributions"
              CardDescription="Dr. Elizabeth Nunez, a celebrated author and scholar, has been recognized for her significant contributions...  "
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
          <Button
            borderRadius="2rem"
            className=" dark:bg-slate-900 text-slate-200 dark:text-white border-neutral-200 dark:border-slate-800"
            >
            Explore More Content
            </Button>
        </div>
        
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription, author }: BlogCardProps) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
            <p>
              {date}
            </p>
            <p className="bg-slate-400 w-44 px-3 rounded-lg text-white">
              Author: {author}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
