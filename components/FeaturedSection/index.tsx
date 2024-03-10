'use client';
import { FC, useEffect } from 'react';
import Carousel from '../Carousel';
import VideoCard from '../VideoCard';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const nameAndImages = [
  { name: 'G2 Shoot', imageSrc: '/images/global/zoomin_logo.png' },
  { name: 'G2 Shoot', imageSrc: '/images/global/zoomin_logo.png' },
  { name: 'G2 Shoot', imageSrc: '/images/global/zoomin_logo.png' },
  { name: 'G2 Shoot', imageSrc: '/images/global/zoomin_logo.png' },
  { name: 'G2 Shoot', imageSrc: '/images/global/zoomin_logo.png' },
  { name: 'G2 Shoot', imageSrc: '/images/global/zoomin_logo.png' },
  { name: 'G2 Shoot', imageSrc: '/images/global/zoomin_logo.png' },
  { name: 'G2 Shoot', imageSrc: '/images/global/zoomin_logo.png' },
];

const servicesImages = [
  '/images/service/rec_service.png',
  '/images/service/rec_service.png',
  '/images/service/rec_service.png',
  '/images/service/rec_service.png',
  '/images/service/rec_service.png',
];

const FeaturedFilms: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Define animation variants
  const variantsBottom: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
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
    <div ref={ref} className='my-10 w-full px-24'>
      <motion.div
        variants={variantsBottom}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h3 className='mb-8 text-center text-2xl font-semibold md:text-3xl'>
          Our Featured Films
        </h3>
        <div className='block w-full'>
          <Carousel settings={{ slidesToShow: 4, dots: false, arrows: true }}>
            {nameAndImages.map((item, index) => (
              <div className='w-full px-2' key={index}>
                <VideoCard name={item.name} imageSrc={item.imageSrc} />
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedFilms;
