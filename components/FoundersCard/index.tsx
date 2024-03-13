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
      <div className='flex items-center'>
        <div className='relative h-60 w-60 flex-shrink-0 self-center '>
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
            <p className='text-gray-700'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersCard;
