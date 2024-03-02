"use client";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const AnimatedTextSection1: React.FC = () => {
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
      className="flex flex-col gap-y-6 md:gap-y-10 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-96 py-10 lg:py-24"
    >
      <motion.h2
        variants={variantsTop}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-2xl md:text-[1.6rem] text-center lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[3rem] text-transparent font-bold md:leading-tight bg-gradient-to-br from-indigo-500 from-20% via-sky-500 via-65% to-emerald-500 bg-clip-text"
      >
        Welcome To ZoomIn Productions
        <span className="text-black"> - Production House In India</span>
      </motion.h2>

      <motion.p
        variants={variantsRight}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-xl text-[#000] font-semibold"
      >
        ZoomIn is a full-service film production company, a phenomenal
        multi-functioning, short film production house and an ad film production
        house that professionally excel in ad filmmaking, corporate films, short
        films, product shoot, 360-degree videos, VFX, editing, and audio mixing;
        an integrated production house based in Mumbai and a leader in all forms
        of content creation and entertainment.
      </motion.p>
      <motion.p
        variants={variantsLeft}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="text-xl text-[#000] font-semibold"
      >
        We combine the right aesthetics with impactful and compelling narratives
        to bring out a creative story. Engaging content is our forte; we house
        storytellers, corporate film, and video makers who are the kingpins of
        producing and narrating extraordinary stories. We strive to bring out
        tales that are gripping, ingenious, and empathetic.
      </motion.p>
      <motion.p
        variants={variantsRight}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="text-xl text-[#000] font-semibold"
      >
        We make the A-Z of content with our bunch of creative geniuses
        determined to bring out the best in all parts of the production process.
        Whether it is a short film production, commercial TVC ad, music video,
        documentary, corporate video, online promo, viral video or YouTube video
        production, we do it all.
      </motion.p>
      <motion.p
        variants={variantsLeft}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="text-xl text-[#000] font-semibold"
      >
        Being the pioneers of the filmmaking industry, we bring together a full
        house of engaging, memorable and effective chronicles that speak for
        brands. This makes us the go-to production house for many popular brands
        across India. We believe our work speaks for itself. Browse our projects
        for videos and short films created by ZoomIn Productions.
      </motion.p>
      <motion.p
        variants={variantsBottom}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 1.9 }}
        className="text-xl text-[#000] font-semibold flex flex-col items-start justify-center text-left gap-y-10"
      >
        <span>
          <a
            href="/contact-us"
            className="underline text-[#A0383F] inline-block"
          >
            Contact us
          </a>{" "}
          if you are looking for video and image production services in India.
        </span>
        <button
          // href="/about-us"
          className="self-center rounded-full border border-[#000] py-4 px-8 hover:border-white hover:text-white hover:bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
        >
          Learn More
        </button>
      </motion.p>
    </div>
  );
};

export default AnimatedTextSection1;
