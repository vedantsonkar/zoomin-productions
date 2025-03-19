'use client';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

const AnimatedTextSection1: React.FC = () => {
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
      className='flex w-full flex-col items-center justify-center gap-x-10 gap-y-10 px-4 sm:px-6 md:px-8 lg:flex-row 2xl:px-32 min-[1800px]:px-36'
    >
      <motion.div
        variants={variantsLeft}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src='/images/global/Homepage_Image.png'
          alt='Production House'
          width={1000}
          height={1000}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='rounded-md object-contain'
        />
      </motion.div>
      <div className='flex flex-col gap-y-6 md:basis-1/2 md:gap-y-10'>
        <motion.h2
          variants={variantsRight}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-2xl font-bold text-black max-lg:text-center md:text-[1.5rem] md:leading-tight lg:text-[1.6rem] 2xl:text-[2rem] min-[1800px]:text-[2.5rem]'
        >
          With{' '}
          <span className='bg-linear-to-r from-orange-700 via-yellow-600 via-50% to-green-600 bg-clip-text text-transparent'>
            ZoomIn Productions
          </span>
          , every frame, every word, and every campaign drives results.
        </motion.h2>

        <motion.h3
          variants={variantsBottom}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='text-lg font-semibold text-black max-lg:text-center md:text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.5rem] min-[1800px]:text-[1.8rem]'
        >
          At ZoomIn, creativity meets strategy to craft content that captivates
          and converts. From compelling storytelling to impactful marketing, we
          turn ideas into unforgettable brand experiences.
        </motion.h3>
      </div>
    </div>
  );
};

export default AnimatedTextSection1;
