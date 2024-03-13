'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import Modal from '../ModalIframe';

type VideoCardProps = {
  name: string;
  imageSrc: string;
  videoUrl: string;
};

const VideoCard: FC<VideoCardProps> = ({ name, imageSrc, videoUrl }) => {
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
        className='group relative mx-auto flex aspect-square h-56 w-56 cursor-pointer items-center justify-center rounded-md bg-white shadow-lg'
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
          <p className='rounded-b-md bg-black bg-opacity-60 py-2 text-center text-white'>
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
        <iframe src={videoUrl} width='100%' height='100%' />
      </Modal>
    </>
  );
};

export default VideoCard;
