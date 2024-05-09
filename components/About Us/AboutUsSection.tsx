'use client';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';

const AboutUsSection: React.FC = () => {
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
        className='text-center text-2xl font-bold uppercase text-[#a0383f] md:text-[1.6rem] md:leading-tight lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[3rem]'
      >
        <span className='text-black'>About</span> ZoomIn Productions
        {/* <span className='text-black'>
          {' '}
          - Best Ad Film Production House In Mumbai & Delhi
        </span> */}
      </motion.h2>

      <motion.p
        variants={variantsRight}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-xl font-medium text-[#000]'
      >
        ZoomIn is a creative powerhouse. We are forward-thinking and we
        specialize in creating bespoke content that empowers brands, amplifies
        digital presence, and enriches brand value.
      </motion.p>
      <motion.p
        variants={variantsLeft}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 1.0 }}
        className='text-xl font-medium text-[#000]'
      >
        Our expertise spans the entire gamut of communications and marketing,
        delivering a suite of services from conceptualization to the final
        flourish that makes your content sing. At our core, we are committed to
        transforming casual observers into loyal advocates of your project.
      </motion.p>
      <motion.p
        variants={variantsBottom}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 1.9 }}
        className='flex flex-col items-start justify-center gap-y-10 text-left text-xl font-medium text-[#000]'
      >
        Let us navigate the communications and marketing landscape for you,
        ensuring your journey is both impactful and memorable.
      </motion.p>
    </div>
  );
};

export default AboutUsSection;
