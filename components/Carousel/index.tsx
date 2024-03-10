'use client';
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';

type SliderPropTypes = {
  children: any;
  settings?: Settings;
};
type ArrowPropTypes = {
  direction?: 'right' | 'left';
};

const PrevArrow: FC = (props) => {
  const arrowClassName =
    'relative h-6 w-6 border-2 border-black rounded-full p-4';
  return (
    <div className={arrowClassName} {...props}>
      <Image
        src='/images/vectors/Arrow.svg'
        className='object-contain'
        fill
        alt='Arrow'
      />
    </div>
  );
};

const NextArrow: FC = (props) => {
  const arrowClassName =
    'relative h-6 w-6 border-2 border-black rounded-full p-4';
  return (
    <div className={arrowClassName} {...props}>
      <Image
        src='/images/vectors/Arrow.svg'
        className='rotate-180 object-contain'
        fill
        alt='Arrow'
      />
    </div>
  );
};

const Carousel: FC<SliderPropTypes> = ({ children, settings }) => {
  const SLIDER_SETTINGS_DEFAULT: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: settings?.arrows ? <NextArrow /> : <></>,
    prevArrow: settings?.arrows ? <PrevArrow /> : <></>,
    slidesToShow: 3,
    slidesToScroll: 1,
    ...settings,
  };
  return <Slider {...SLIDER_SETTINGS_DEFAULT}>{children}</Slider>;
};

export default Carousel;
