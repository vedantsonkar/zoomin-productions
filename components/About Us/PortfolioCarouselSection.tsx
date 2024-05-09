'use client';
import { Variants, useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FC, useEffect } from 'react';
import Carousel from '../Carousel';
import { OUR_TEAM } from '@/constants';
import PortfolioCard from '@/components/PortfolioCard';
import Link from 'next/link';

const PortfolioSection: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const variantsBottomLeft: Variants = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, x: '5vw', y: '5vh' },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className='w-full'>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={variantsBottomLeft}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h3 className='heading mx-auto w-max hover:underline'>
          <Link href='/our-team'>Our Team </Link>
        </h3>

        <p className='mb-12 px-14 text-center text-lg sm:px-20 md:px-56'>
          Meet the creative minds behind ZoomIn. Our team brings fresh
          perspectives, technical mastery, and a passion for innovative
          storytelling.
        </p>
        <div className='block w-full px-16 md:px-24'>
          <Carousel
            settings={{
              slidesToShow: 3,
              dots: false,
              arrows: true,
              responsive: [
                { breakpoint: 1000, settings: { slidesToShow: 3 } },
                { breakpoint: 786, settings: { slidesToShow: 2 } },
                { breakpoint: 500, settings: { slidesToShow: 1 } },
              ],
            }}
          >
            {OUR_TEAM.map((item, index) => (
              <div className='w-full px-2' key={index}>
                <PortfolioCard
                  name={item.name}
                  imageSrc={item.imageSrc}
                  position={item.position}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};
export default PortfolioSection;
