import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

type PortfolioCardProps = {
  imageSrc: string | StaticImageData;
  name: string;
  position?: string;
};

const PortfolioCard: FC<PortfolioCardProps> = ({
  imageSrc,
  name,
  position,
}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4'>
      <div className='group relative aspect-square h-full w-full rounded-full md:max-h-56 md:max-w-56'>
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes='40vw'
          className='rounded-full object-cover'
        />
        {position && (
          <div className='invisible h-full w-full rounded-full bg-black bg-opacity-25 text-center backdrop-blur group-hover:visible'>
            <p className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-white'>
              {position}
            </p>
          </div>
        )}
      </div>
      <h3 className='font-bold'>{name}</h3>
    </div>
  );
};

export default PortfolioCard;
