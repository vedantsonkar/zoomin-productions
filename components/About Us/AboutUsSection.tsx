"use client";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Define animation variants
  const variantsRight: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };
  const variantsLeft: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const variantsBottom: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };
  const variantsTop: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };
  // Animate when the element is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-y-6 px-8 pt-10 md:gap-y-10 md:px-24 lg:px-36 lg:pt-24 xl:px-48 2xl:px-96"
    >
      <motion.h2
        variants={variantsTop}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-gradient-to-br from-indigo-500 from-20% via-sky-500 via-65% to-emerald-500 bg-clip-text text-center text-2xl font-bold text-transparent md:text-[1.6rem] md:leading-tight lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[3rem]"
      >
        About ZoomIn Productions
        <span className="text-black"> - Best Ad Film Production House In Mumbai & Delhi</span>
      </motion.h2>

      <motion.p
        variants={variantsRight}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-xl font-semibold text-[#000]"
      >
        At Griffin Pictures, our aim is to bring an idea to reality with a touch of imagination. 
        As a video production company in Mumbai, we create content on various verticals, 
        whilst housing the most eminent brands in the country. 
        Our belief is to bring value and distinction with conviction.
      </motion.p>
      <motion.p
        variants={variantsLeft}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="text-xl font-semibold text-[#000]"
      >
        In the era of modern moviemaking, we direct ourselves on the path of redefining benchmarks. 
        Just like the dawning of a mythical creature, our journey began as a group of highly enthusiastic youngsters,
         having a collective experience of more than 20 years.
         We always believe in delivering a creative solution that is best suited for a brand. 
         We thrive on being able to deliver the best there is to offer, combining all our expertise and passion into the end product..
      </motion.p>
      <motion.p
        variants={variantsRight}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="text-xl font-semibold text-[#000]"
      >
        We craft handmade stories, captured through our professional lens with a deep understanding of 
        our product and all the perseverance that goes into making stories that click- literally! 
        You can count on us to create a thumb-stopping film or video that could take us to great heights of success, together. 
        Rest assured, we value every brand that gives us the golden opportunity to be their video creators or filmmakers
         across all platforms- be it social media, websites, and other digital platforms. Explore our film production house- 
        A world of gripping stories that are woven creatively for the audience.
         Come take a plunge into the world of light and magic!
      </motion.p>
      <motion.p
        variants={variantsLeft}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="text-xl font-semibold text-[#000]"
      >
        Griffin Pictures also doubles as a TVC production house that is always updated with new technology and innovative ideas.
         With a plethora of cutting-edge services we offer such as ad filmmaking, corporate videos, short films, product shoot, 
         360-degree videos, VFX, editing, 
        and audio mixing, we provide you with a wholesome experience of everything under the BIG umbrella of production.
      </motion.p>
      <motion.p
        variants={variantsBottom}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 1.9 }}
        className="flex flex-col items-start justify-center gap-y-10 text-left text-xl font-semibold text-[#000]"
      >
        Get in touch with us if you are looking for video production services with our Ad production house
      </motion.p>
    </div>
  );
};

export default AboutUsSection;
