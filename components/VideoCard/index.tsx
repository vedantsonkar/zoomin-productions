import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

type VideoCardProps = {
  name: string;
  imageSrc: string;
};

const VideoCard: FC<VideoCardProps> = ({ name, imageSrc }) => {
  return (
    <div className='group relative mx-auto flex aspect-square h-48 w-48 items-center justify-center rounded-md bg-white'>
      <Image
        src={imageSrc}
        alt='ZoomIn Productions'
        title='ZoomIn Productions'
        className='object-contain'
        fill
        sizes='33vw'
        priority
        aria-label='Logo'
      />
      <div className='absolute bottom-0 left-1/2 w-full -translate-x-1/2'>
        <p className='rounded-b-md bg-black bg-opacity-60 py-2 text-center text-black'>
          {name}
        </p>
      </div>
      <div className='invisible absolute z-10 h-full w-full rounded-md bg-black bg-opacity-30 group-hover:visible' />

      <div className='invisible relative h-20 w-20 group-hover:visible'>
        <Image
          src='/images/vectors/Play_Icon.svg'
          alt='ZoomIn Productions'
          title='ZoomIn Productions'
          className='object-contain'
          fill
          sizes='33vw'
          priority
          aria-label='Play'
        />
      </div>
    </div>
  );
};

export default VideoCard;
