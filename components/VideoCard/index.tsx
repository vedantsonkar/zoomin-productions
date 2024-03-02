import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

type VideoCardProps = {
  name: string;
  imageSrc: string;
};

const VideoCard: FC<VideoCardProps> = ({ name, imageSrc }) => {
  return (
    <div className="group aspect-square relative w-48 h-48 rounded-md bg-white flex justify-center items-center">
      <Image
        src={imageSrc}
        alt="ZoomIn Productions"
        title="ZoomIn Productions"
        className="object-contain"
        fill
        sizes="33vw"
        priority
        aria-label="Logo"
      />
      <div className="absolute w-full bottom-0 left-1/2 -translate-x-1/2">
        <p className="bg-black bg-opacity-60 text-center rounded-b-md py-2 text-black">
          {name}
        </p>
      </div>
      <div className="bg-black absolute w-full h-full bg-opacity-30 z-10 invisible group-hover:visible" />

      <div className="relative group-hover:visible invisible h-20 w-20">
        <Image
          src="/images/vectors/Play_Icon.svg"
          alt="ZoomIn Productions"
          title="ZoomIn Productions"
          className="object-contain"
          fill
          sizes="33vw"
          priority
          aria-label="Play"
        />
      </div>
    </div>
  );
};

export default VideoCard;
