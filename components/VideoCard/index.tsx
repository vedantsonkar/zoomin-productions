'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import Modal from '../ModalIframe';

type VideoCardProps = {
  name: string;
  description?: string[];
  imageSrc: string;
  videoUrl: string;
};

const VideoCard: FC<VideoCardProps> = ({
  name,
  description,
  imageSrc,
  videoUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className='group relative mx-auto flex aspect-square h-full max-h-52 w-full max-w-52 cursor-pointer items-center justify-center rounded-md bg-white shadow-lg xl:max-h-60 xl:max-w-60 min-[1800px]:max-h-72 min-[1800px]:max-w-72'
        onClick={handleModalOpen}
      >
        <Image
          src={imageSrc}
          alt={name}
          title={name}
          className='rounded-md object-cover'
          fill
          sizes='33vw'
          priority
          aria-label='Logo'
        />
        <div className='absolute bottom-0 left-1/2 w-full -translate-x-1/2'>
          <p className='rounded-b-md bg-black bg-opacity-60 py-2 text-center text-white max-xl:text-sm max-sm:text-xs max-sm:font-medium'>
            {name}
          </p>
        </div>
        <div className='invisible absolute z-10 h-full w-full rounded-md bg-black bg-opacity-30 group-hover:visible' />

        <div className='relative h-20 w-20 group-hover:visible md:invisible'>
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
      </button>
      <Modal
        id='Youtube Video Player'
        show={isModalOpen}
        onClose={() => handleModalClose()}
      >
        <div className='flex h-full w-full items-center rounded-lg bg-white p-4 max-lg:flex-col lg:justify-start lg:p-8'>
          <div className='aspect-video w-full shadow-2xl lg:max-w-[70%]'>
            <iframe src={videoUrl} className='h-full w-full' />
          </div>
          <div className='h-[0.2px] w-[90%] bg-slate-200 max-lg:my-6 lg:mx-6 lg:h-[90%] lg:w-[0.2px]' />
          <div className='flex h-full flex-col gap-y-6 py-[3.2%]'>
            <h3 className='heading flex flex-col items-center justify-start text-left'>
              {name}
            </h3>
            {description &&
              description.length > 0 &&
              description.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VideoCard;
