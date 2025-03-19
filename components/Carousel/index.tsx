'use client';
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type SliderPropTypes = {
  children: any;
  settings?: Settings;
};

const PrevArrow: FC<any> = ({ currentSlide, slideCount, ...rest }) => {
  return (
    <button
      className='relative h-6 w-6 rounded-full border-2 border-black p-4'
      {...rest}
    >
      <Image
        src='/images/vectors/Arrow.svg'
        className='object-contain'
        fill
        alt='Arrow'
      />
    </button>
  );
};

const NextArrow: FC<any> = ({ currentSlide, slideCount, ...rest }) => {
  return (
    <button
      className='relative h-6 w-6 rounded-full border-2 border-black p-4'
      {...rest}
    >
      <Image
        src='/images/vectors/Arrow.svg'
        className='rotate-180 object-contain'
        fill
        alt='Arrow'
      />
    </button>
  );
};

const Carousel: FC<SliderPropTypes> = ({ children, settings }) => {
  const SLIDER_SETTINGS_DEFAULT: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: settings?.arrows ? <NextArrow /> : undefined,
    prevArrow: settings?.arrows ? <PrevArrow /> : undefined,
    slidesToShow: 3,
    slidesToScroll: 1,
    ...settings,
  };
  return <Slider {...SLIDER_SETTINGS_DEFAULT}>{children}</Slider>;
};

export default Carousel;
