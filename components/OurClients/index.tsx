'use client';
import { FC } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';

import G2 from '@/public/images/clients/G2.webp';
import Bill_Gates_Foundation from '@/public/images/clients/Bill_Gates_Foundation.webp';
import Capacity_Building_Commission from '@/public/images/clients/Capacity_Building_Commission.webp';
import Animal_Husbandry from '@/public/images/clients/Animal_Husbandry.webp';
import Delhi_Police from '@/public/images/clients/Delhi_Police.webp';
import Ministry_of_Education from '@/public/images/clients/Ministry_of_Education.webp';
import TweetsCarousel from '../TweetsCarousel';

type OurClientsSectionProps = {
  heading?: string;
};

const OurClientsSection: FC<OurClientsSectionProps> = ({
  heading = 'People Who Trust Us',
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Define animation variants
  const variantsBottom: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '10vh' },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className='flex w-full flex-col gap-y-24' ref={ref}>
      <h3 className='heading'>{heading}</h3>
      <motion.div
        variants={variantsBottom}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='grid grid-cols-2 place-items-center gap-10 px-10 md:grid-cols-3 md:px-24'
      >
        <Image src={G2} alt='G2' width={150} height={150} sizes='33vw' />
        <Image
          src={Bill_Gates_Foundation}
          alt='G2'
          width={150}
          height={150}
          sizes='33vw'
        />
        <Image
          src={Capacity_Building_Commission}
          alt='Capacity_Building_Commission'
          width={150}
          height={150}
          sizes='33vw'
        />
        <Image
          src={Animal_Husbandry}
          alt='Animal_Husbandry'
          width={150}
          height={150}
          sizes='33vw'
        />
        <Image
          src={Delhi_Police}
          alt='Delhi_Police'
          width={150}
          height={150}
          sizes='33vw'
        />
        <Image
          src={Ministry_of_Education}
          alt='Ministry_of_Education'
          width={150}
          height={150}
          sizes='33vw'
        />
      </motion.div>
      {/* <motion.div
        variants={variantsBottom}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='flex w-full flex-col items-center justify-center px-10 md:px-24'
      >
        <TweetsCarousel />
      </motion.div> */}
    </div>
  );
};

export default OurClientsSection;
