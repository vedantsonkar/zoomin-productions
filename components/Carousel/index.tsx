"use client";
import { FC } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";

type SliderPropTypes = {
  children: any;
  settings?: Settings;
};
type ArrowPropTypes = {
  direction?: "right" | "left";
};

const Arrow: FC<ArrowPropTypes> = ({ direction = "left" }) => {
  const arrowClassName =
    direction === "left"
      ? "relative h-6 w-6 border-2 border-black rounded-full p-4"
      : "relative h-6 w-6 border-2 rotate-180 border-black rounded-full p-4";
  return (
    <div className={arrowClassName}>
      <Image
        src="/images/vectors/Arrow.svg"
        className="object-contain"
        fill
        alt="Arrow"
      />
    </div>
  );
};

const Carousel: FC<SliderPropTypes> = ({ children, settings }) => {
  const SLIDER_SETTINGS_DEFAULT: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    ...settings,
  };
  return <Slider {...SLIDER_SETTINGS_DEFAULT}>{children}</Slider>;
};

export default Carousel;
