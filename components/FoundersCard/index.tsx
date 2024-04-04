import { FC } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type FounderCardProps = {
  image: string;
  name: string;
  position: string;
  description?: string;
  reverse?: boolean;
};

const FoundersCard: FC<FounderCardProps> = ({
  image,
  name,
  position,
  description,
  reverse = false,
}) => {
  return (
    <div className='w-full p-6'>
      <div
        className={twMerge(
          'flex flex-col items-center gap-y-6 md:flex-row xl:gap-x-10',
          reverse && 'md:flex-row-reverse',
        )}
      >
        <div className='relative h-[20rem] w-[20rem] flex-shrink-0 shadow-xl transition-all duration-300 hover:shadow-2xl sm:h-[30rem] sm:w-[30rem]'>
          <Image
            src={image}
            alt='Profile Image'
            className='object-cover grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0'
            sizes='90vw'
            fill
          />
        </div>
        <div
          className={twMerge(
            'flex max-w-[30rem] flex-col gap-y-2 max-sm:max-w-[20rem] sm:ml-4 md:gap-y-4 md:px-4 2xl:max-w-[30vw]',
            reverse && 'md:text-right',
          )}
        >
          <div>
            <h2 className='font-futura mb-1 text-xl font-bold tracking-wider text-gray-800 lg:text-4xl 2xl:text-6xl'>
              {name}
            </h2>
          </div>
          <div>
            <p className='text-md mb-1 font-sans font-semibold text-gray-600 underline lg:text-xl 2xl:text-3xl'>
              {position}
            </p>
          </div>
          <div>
            <p className='text-sm text-gray-700 lg:text-base 2xl:text-lg'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersCard;
