import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Our mission is to build a thriving community where words serve as a powerful tool to inspire creativity, foster education, and elevate individuals and generations to achieve their fullest potential.",
      name: "Mission Statement",
      designation: "A Declaration of Our Purpose",
      src: "/grad1.jpg",
    },
    {
      quote:
        "To become the foremost organization dedicated to nurturing creative writers, empowering them to reach their full potential, and inspiring generations through the transformative power of writing and storytelling.",
      name: "Vision Statement",
      designation: "What we aspire to Achieve",
      src: "/grad1.jpg",
    },
    {
      quote:
        "This solution reflects our core values: authenticity, ingenuity, perseverance, commitment, and adaptability. These principles drive us to simplify complex tasks and improve productivity for our team.",
      name: "Core Values",
      designation: "What We Stand For",
      src: "/grad1.jpg",
    },
    {
      quote:
        "We embrace innovation, encourage collaboration, and celebrate diversity in all that we do.",
      name: "Cultural Statement",
      designation: "our culture, in light of our value",
      src: "/grad1.jpg",
    },
    {
      quote:
        "We provide aspiring writers with mentorship, resources, and a platform to share their voices.",
      name: "Value Proposition",
      designation: "What we Bring",
      src: "/grad1.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
