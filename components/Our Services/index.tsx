'use client';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';
import { FC, useEffect } from 'react';
import Image from 'next/image';

const OurServicesSection: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Define animation variants
  const variantsTop: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '-10vh' },
  };
  const variantsBottom: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '10vh' },
  };
  const variantsLeft: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: '10vh' },
  };
  const variantsRight: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: '-10vh' },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div
      className='flex w-full flex-col items-center justify-center gap-y-10 px-6 md:px-24'
      ref={ref}
    >
      <motion.div
        className='flex w-full flex-col items-center justify-center text-center'
        variants={variantsTop}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className='heading'>Our Services</h2>
        <h3 className='mb-10 text-center text-lg 2xl:text-xl'>
          All tailored to your brand&apos;s unique vision.
        </h3>
      </motion.div>
      <div className='flex flex-col items-center gap-y-8'>
        <motion.div
          className='flex w-full items-center justify-center gap-x-4 text-center 2xl:gap-x-32'
          variants={variantsRight}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className='relative aspect-square h-32 w-32 flex-shrink-0 rounded-full bg-[#263238] p-4 lg:h-48 lg:w-48 xl:h-52 xl:w-52 2xl:h-60 2xl:w-60'>
            <Image
              src='/images/services/production_services.png'
              alt='Production Services'
              title='Adaptive Production Services'
              fill
              sizes='40vw'
              className='object-contain p-2 lg:p-4'
            />
          </div>
          <motion.div
            variants={variantsLeft}
            initial='hidden'
            animate={controls}
            transition={{ duration: 0.6, delay: 1 }}
            className='text-left text-black lg:max-w-[60%] xl:max-w-[60%] 2xl:max-w-[50%] '
          >
            <h4 className='mb-6 font-futura text-xl font-bold lg:text-4xl 2xl:text-5xl'>
              Adaptive Production Services
            </h4>
            <p className='font-poppins lg:text-lg'>
              Our Adaptive Production Services offer flexible and scalable
              solutions to meet your unique content creation needs.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className='flex w-full items-center  justify-center gap-x-4 text-center 2xl:gap-x-32'
          variants={variantsLeft}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            variants={variantsRight}
            initial='hidden'
            animate={controls}
            transition={{ duration: 0.6, delay: 1 }}
            className='text-right text-black lg:max-w-[60%] xl:max-w-[60%] 2xl:max-w-[50%]'
          >
            <h4 className='mb-6 font-futura text-xl font-bold lg:text-4xl 2xl:text-5xl'>
              Mapping Your Growth Strategy
            </h4>
            <p className='font-poppins lg:text-lg'>
              Our expert consultants work closely with you to analyze market
              trends, identify opportunities, and develop a roadmap for
              sustainable growth.
            </p>
          </motion.div>
          <div className='relative aspect-square h-32 w-32 flex-shrink-0 rounded-full bg-[#263238] p-4 lg:h-48 lg:w-48 xl:h-52 xl:w-52 2xl:h-60 2xl:w-60'>
            <Image
              src='/images/services/growth_strategy.png'
              alt='Production Services'
              title='Adaptive Production Services'
              fill
              sizes='50vw'
              className='object-contain p-2 lg:p-4'
            />
          </div>
        </motion.div>
        <motion.div
          className='flex w-full items-center justify-center gap-x-4 text-center 2xl:gap-x-32'
          variants={variantsRight}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className='relative aspect-square h-32 w-32 flex-shrink-0 rounded-full bg-[#263238] p-4 lg:h-48 lg:w-48 xl:h-52 xl:w-52 2xl:h-60 2xl:w-60'>
            <Image
              src='/images/services/digital_marketing.png'
              alt='Production Services'
              title='Adaptive Production Services'
              fill
              sizes='50vw'
              className='object-contain p-2 lg:p-4'
            />
          </div>
          <motion.div
            variants={variantsLeft}
            initial='hidden'
            animate={controls}
            transition={{ duration: 0.6, delay: 1 }}
            className='text-left text-black lg:max-w-[60%] xl:max-w-[60%] 2xl:max-w-[50%]'
          >
            <h4 className='mb-6 font-futura text-xl font-bold lg:text-4xl 2xl:text-5xl'>
              Digital Marketing Excellence
            </h4>
            <p className='font-poppins lg:text-lg'>
              We specialize in engaging campaigns across social media, SEO, and
              content strategies to create impactful online experiences that
              deliver results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServicesSection;
