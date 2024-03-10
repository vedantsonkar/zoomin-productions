import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

type PortfolioCardProps = {
  imageSrc: string | StaticImageData;
  name: string;
};

const PortfolioCard: FC<PortfolioCardProps> = ({ imageSrc, name }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4'>
      <div className='relative aspect-square h-full w-full rounded-full md:max-h-48 md:max-w-48'>
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes='40vw'
          className='rounded-full object-cover'
        />
      </div>
      <h3 className='font-bold'>{name}</h3>
    </div>
  );
};
export default PortfolioCard;
