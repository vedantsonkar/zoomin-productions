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
    <div className='flex flex-col items-center justify-center gap-y-4 text-center'>
      <div className='group relative aspect-square h-full w-full rounded-full md:max-h-56 md:max-w-56'>
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes='40vw'
          className='rounded-full object-cover'
        />
      </div>
      <h3 className='text-xl font-semibold'>{name}</h3>
      {position && (
        <p className='text-sm opacity-50 2xl:max-w-[50%] min-[1800px]:max-w-[30%]'>
          {position}
        </p>
      )}
    </div>
  );
};

export default PortfolioCard;
