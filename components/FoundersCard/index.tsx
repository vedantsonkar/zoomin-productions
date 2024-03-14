import { FC } from 'react';
import Image from 'next/image';

type FounderCardProps = {
  image: string;
  name: string;
  position: string;
  description?: string;
};

const FoundersCard: FC<FounderCardProps> = ({
  image,
  name,
  position,
  description,
}) => {
  return (
    <div className='rounded-full border bg-white p-6 shadow-lg'>
      <div className='flex items-center md:flex-row'>
        <div className='relative h-28 w-28 flex-shrink-0 md:h-60 md:w-60 '>
          <Image
            src={image}
            alt='Profile Image'
            className='rounded-full object-cover'
            sizes='33vw'
            fill
          />
        </div>
        <div className='ml-4 flex flex-col'>
          <div>
            <h2 className='mb-1 text-xl font-bold text-gray-800 md:text-2xl'>
              {name}
            </h2>
          </div>
          <div>
            <p className='text-md mb-1 font-sans font-semibold text-gray-600'>
              {position}
            </p>
          </div>
          <div>
            <p className='text-gray-700 max-md:line-clamp-4 max-md:text-sm'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersCard;
