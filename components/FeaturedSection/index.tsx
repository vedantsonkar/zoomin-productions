'use client';
import { FC, useEffect } from 'react';
import Carousel from '../Carousel';
import VideoCard from '../VideoCard';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { YOUTUBE_VIDEOS } from '@/constants';

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
    <div ref={ref} className='w-full px-12 md:px-24'>
      <motion.div
        variants={variantsBottom}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h3 className='section-heading'>Our Featured Films</h3>
        <p className='mb-10 text-center text-lg'>
          This is a curated collection of some of our best work!
        </p>
        <div className='block w-full'>
          <Carousel
            settings={{
              slidesToShow: 4,
              dots: false,
              arrows: true,
              responsive: [
                { breakpoint: 1000, settings: { slidesToShow: 3 } },
                { breakpoint: 786, settings: { slidesToShow: 2 } },
                { breakpoint: 500, settings: { slidesToShow: 1 } },
              ],
            }}
          >
            {YOUTUBE_VIDEOS.map((item, index) => (
              <div className='w-full md:px-2' key={index}>
                <VideoCard
                  name={item.name}
                  imageSrc={item.thumbnail}
                  videoUrl={item.url}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedFilms;
