'use client';
import { useInView } from 'react-intersection-observer';
import { FOUNDERS } from '@/constants';
import { FC, useEffect } from 'react';
import FoundersCard from '../FoundersCard';
import { motion, useAnimation, Variants } from 'framer-motion';

const FoundersSection: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  const variantsRight: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: '5vw' },
  };
  const variantsLeft: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: '-5vw' },
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
    <div ref={ref} className='max-md:px-2'>
      <div className='mx-auto my-20 flex w-full flex-col items-center justify-center gap-6'>
        <motion.div
          variants={variantsLeft}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FoundersCard
            name={FOUNDERS[0].name}
            position={FOUNDERS[0].position}
            image={FOUNDERS[0].image}
            description={FOUNDERS[0].description}
          />
        </motion.div>
        <motion.div
          variants={variantsRight}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FoundersCard
            name={FOUNDERS[1].name}
            position={FOUNDERS[1].position}
            image={FOUNDERS[1].image}
            description={FOUNDERS[1].description}
            reverse
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FoundersSection;
