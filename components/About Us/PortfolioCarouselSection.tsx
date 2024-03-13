'use client';
import { Variants, useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FC, useEffect } from 'react';
import Carousel from '../Carousel';
import PortfolioCard from '../PortFolioCard';

const nameAndImages = [
  { name: 'Parth Shetye', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'Mithila', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
];

const PortfolioSection: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const variantsTopLeft: Variants = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, x: -100, y: -100 },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      controls.start('visible');
    } else {
      controls.start('hidden');
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className='my-10 w-full px-24'>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={variantsTopLeft}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h3 className='mb-8 text-center text-2xl font-semibold md:text-3xl'>
          Our Team
        </h3>
        <div className='block w-full'>
          <Carousel settings={{ slidesToShow: 4, dots: false, arrows: true }}>
            {nameAndImages.map((item, index) => (
              <div className='w-full px-2' key={index}>
                <PortfolioCard name={item.name} imageSrc={item.imageSrc} />
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};
export default PortfolioSection;
