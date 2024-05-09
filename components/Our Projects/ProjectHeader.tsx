'use client';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';

const ProjectHeader: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Define animation variants
  const variantsRight: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: '5vw' },
  };
  const variantsLeft: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: '-5vw' },
  };
  const variantsBottom: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '5vh' },
  };
  const variantsTop: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '-5vh' },
  };
  // Animate when the element is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className='flex flex-col gap-y-6 px-8 pt-10 md:gap-y-10 md:px-24 lg:pt-24'
    >
      <motion.h2
        variants={variantsTop}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='bg-gradient-to-br from-indigo-500 from-20% via-sky-500 via-65% to-emerald-500 bg-clip-text text-center text-2xl font-bold text-transparent md:text-[1.6rem] md:leading-tight lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[3rem]'
      >
        ZoomIn Productions
        <span className='text-black'>
          {' '}
          is Mumbai and Delhi&apos;s top ad film production house.
        </span>
      </motion.h2>

      <motion.p
        variants={variantsRight}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-xl font-medium text-[#000]'
      >
        With over 20 years of experience, we excel in creating impactful content
        for India’s most prestigious brands. Our expertise spans various content
        verticals, delivering innovative and unique solutions tailored to each
        brand’s needs.
      </motion.p>
      <motion.p
        variants={variantsLeft}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 1.0 }}
        className='text-xl font-medium text-[#000]'
      >
        Trusted by the G20, the Bill & Melinda Gates Foundation, and the World
        Bank, among others, we set the standard in modern filmmaking and bring
        your ideas to life with exceptional results.
      </motion.p>
      <motion.p
        variants={variantsBottom}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 1.9 }}
        className='flex flex-col items-start justify-center gap-y-10 text-left text-xl font-medium text-[#000]'
      ></motion.p>
    </div>
  );
};

export default ProjectHeader;
