'use client'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

const AnimatedTextSection1: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })

  // Define animation variants
  const variantsRight: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  }
  const variantsLeft: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  const variantsBottom: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  }
  // Animate when the element is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <div
      ref={ref}
      className='flex w-full flex-col items-start justify-center gap-x-10 gap-y-10 px-8 md:flex-row md:px-24'
    >
      <motion.div
        variants={variantsLeft}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5 }}
        className='relative h-[34rem] w-full md:w-24 md:basis-1/2'
      >
        <Image
          src='/images/global/Production_House_Vector.jpg'
          alt='Production House'
          fill
          sizes='40vw'
          className='rounded-md object-cover'
        />
      </motion.div>
      <div className='flex flex-col gap-y-6 md:basis-1/2 md:gap-y-10'>
        <motion.h2
          variants={variantsRight}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-2xl font-bold text-black md:text-[1.6rem] md:leading-tight lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.5rem]'
        >
          A fully integrated production company and a leader in all forms of
          content creation, entertainment and related businesses
        </motion.h2>

        <motion.h3
          variants={variantsBottom}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='text-lg font-semibold text-black md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[1.8rem]'
        >
          <span className='bg-gradient-to-r from-orange-700 via-yellow-600 via-50% to-green-600 bg-clip-text text-transparent'>
            ZoomIn Productions{' '}
          </span>
          are the pioneers of the filmmaking industry. We house storytellers and
          creators who are the kingpins of producing and narrating a story.
        </motion.h3>
      </div>
    </div>
  )
}

export default AnimatedTextSection1