'use client';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';

const AnimatedTextSection2: React.FC = () => {
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
      className='flex flex-col gap-y-6 px-8 md:gap-y-10 md:px-24 lg:px-36'
    >
      <motion.h2
        variants={variantsTop}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='bg-linear-to-br from-indigo-500 from-20% via-sky-500 via-65% to-emerald-500 bg-clip-text text-center text-2xl font-bold text-transparent md:text-[1.6rem] md:leading-tight lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[3rem]'
      >
        Welcome To ZoomIn Productions
        <span className='text-black'> - Production House In India</span>
      </motion.h2>

      <motion.p
        variants={variantsRight}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center text-xl font-medium text-[#000] sm:text-left'
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
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 1.0 }}
        className='text-center text-xl font-medium text-[#000] sm:text-left'
      >
        We combine the right aesthetics with impactful and compelling narratives
        to bring out a creative story. Engaging content is our forte; we house
        storytellers, corporate film, and video makers who are the kingpins of
        producing and narrating extraordinary stories. We strive to bring out
        tales that are gripping, ingenious, and empathetic.
      </motion.p>
      <motion.p
        variants={variantsBottom}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 1.9 }}
        className='flex flex-col items-start justify-center gap-y-10 text-center text-xl font-medium text-[#000] sm:text-left'
      >
        <span>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSc9qSGhxIse7YhaTr7HiakCXbcYHKyL2Uns30R9NGzVWIzZvA/viewform?usp=sf_link
'
            className='inline-block text-[#A0383F] underline'
          >
            Contact us
          </a>{' '}
          if you are looking for video and image production services in India.
        </span>
        <button
          // href="/about-us"
          className='self-center rounded-full border border-[#000] from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-8 py-4 hover:border-white hover:bg-linear-to-br hover:text-white'
        >
          Learn More
        </button>
      </motion.p>
    </div>
  );
};

export default AnimatedTextSection2;
