'use client';
import { Variants, useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FC, useEffect } from 'react';
import Carousel from '../Carousel';
import PortfolioCard from '../PortFolioCard';
import { OUR_TEAM } from '@/constants';

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
    <div ref={ref} className='w-full px-24'>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={variantsTopLeft}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h3 className='section-heading'>Our Team</h3>
        <p className='mb-12 px-[-3rem] text-center font-semibold md:px-56'>
          Our dynamic team is a collective force of creativity and expertise,
          specializing in the realms of video production and content generation.
          Comprising seasoned professionals with a passion for visual
          storytelling, our team members bring a wealth of experience and
          innovation to every project.
        </p>
        <div className='block w-full'>
          <Carousel settings={{ slidesToShow: 3, dots: false, arrows: true }}>
            {OUR_TEAM.map((item, index) => (
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
