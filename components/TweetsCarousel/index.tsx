import { FC } from 'react';
import Carousel from '../Carousel';
import Image from 'next/image';
import Link from 'next/link';

const TweetsCarousel: FC = () => {
  return (
    <>
      <h2 className='heading mb-20 mt-10'>Official tweets by our clients</h2>
      <div className='block w-full'>
        <Carousel
          settings={{
            autoplay: true,
            arrows: true,
            slidesToScroll: 1,
            infinite: true,
            pauseOnFocus: true,
            pauseOnHover: true,
            dots: false,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 1050,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 786,
                settings: {
                  slidesToShow: 1,
                },
              },
            ],
          }}
        >
          <Link
            className='px-2'
            target='_blank'
            href='https://twitter.com/narendramodi/status/1593258241798320131'
          >
            <Image
              src='/images/tweets/tweet_1.jpg'
              alt='tweet_1'
              width={500}
              height={500}
              className='mx-auto rounded-lg shadow-lg'
              sizes='100vw'
            />
          </Link>
          <Link
            className='px-2'
            target='_blank'
            href='https://twitter.com/KTSangamam/status/1593126813643206656'
          >
            <Image
              src='/images/tweets/tweet_2.jpg'
              alt='tweet_2'
              width={500}
              height={500}
              className='mx-auto rounded-lg shadow-lg'
              sizes='100vw'
            />
          </Link>
          <Link
            className='px-2'
            target='_blank'
            href='https://twitter.com/BJP4India/status/1541375088347336704'
          >
            <Image
              src='/images/tweets/tweet_3.jpg'
              alt='tweet_3'
              width={500}
              height={500}
              className='mx-auto rounded-lg shadow-lg'
              sizes='100vw'
            />
          </Link>
          <Link
            className='px-2'
            target='_blank'
            href='https://twitter.com/dpradhanbjp/status/1484853266244841472'
          >
            <Image
              src='/images/tweets/tweet_4.jpg'
              alt='tweet_4'
              width={500}
              height={500}
              className='mx-auto rounded-lg shadow-lg'
              sizes='100vw'
            />
          </Link>
        </Carousel>
      </div>
    </>
  );
};

export default TweetsCarousel;
