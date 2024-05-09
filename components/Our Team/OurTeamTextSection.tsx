'use client';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';

const OurTeamTextSection: React.FC = () => {
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
    <div ref={ref} className='flex flex-col gap-y-6 px-8 md:gap-y-10 md:px-24'>
      <motion.h2
        variants={variantsTop}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='heading bg-gradient-to-br from-indigo-500 from-20% via-sky-500 via-65% to-emerald-500 bg-clip-text text-transparent md:leading-tight'
      >
        Our Team
        <span className='text-black'> at Zoomin</span>
      </motion.h2>

      <motion.p
        variants={variantsRight}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center text-lg font-medium text-[#000]'
      >
        At ZoomIn Productions, our team comprises skilled editors, creative
        producers, and enthusiastic photographers and videographers, each
        bringing a unique blend of expertise and passion to the forefront. With
        a collective commitment to excellence and innovation, our team
        collaborates seamlessly to deliver dynamic solutions tailored to elevate
        your brands online presence and drive impactful results, ensuring that
        every project exceeds expectations and leaves a lasting impression in
        the digital landscape.
      </motion.p>
      {/* <motion.p
        variants={variantsLeft}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 1.0 }}
        className='text-lg font-medium text-[#000]'
      >
        What sets Zoomin Productions apart is their unwavering commitment to
        quality and creativity. With a finger on the pulse of emerging trends
        and technologies, they continually push the boundaries of what&apos;s
        possible in video production. Whether it&apos;s crafting visually
        stunning narratives or producing dynamic promotional material, the team
        at Zoomin Productions approaches each project with passion and
        ingenuity, resulting in content that resonates deeply with audiences.
      </motion.p>
      <motion.p
        variants={variantsRight}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 1.3 }}
        className='text-lg font-medium text-black max-md:hidden'
      >
        As a production house, Zoomin Productions has earned a reputation for
        reliability and versatility. Their diverse portfolio spans across
        various genres and formats, showcasing their ability to adapt to the
        unique needs of each project. From intimate documentaries to high-energy
        commercials, Zoomin Productions consistently delivers exceptional work
        that leaves a lasting impression. With their unparalleled expertise and
        creative vision, they continue to raise the bar in the ever-evolving
        landscape of video production.
      </motion.p> */}
    </div>
  );
};

export default OurTeamTextSection;
