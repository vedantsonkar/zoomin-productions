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
            href='https://twitter.com/narendramodi/status/1593258241798320131?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1593258241798320131%7Ctwgr%5E1abea6a9a91151f6433ede53582a4a8a4df21f4b%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.zoomin.productions%2F'
            className='px-4'
          >
            <Image
              src='/images/Tweets/tweet_1.png'
              alt='tweet_1'
              width={500}
              height={500}
            />
          </Link>
          <Link
            href='https://twitter.com/BJP4India/status/1541375088347336704?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1541375088347336704%7Ctwgr%5E1abea6a9a91151f6433ede53582a4a8a4df21f4b%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.zoomin.productions%2F'
            className='px-4'
          >
            <Image
              src='/images/Tweets/tweet_2.png'
              alt='tweet_2'
              width={500}
              height={500}
            />
          </Link>
          <Link
            href='https://twitter.com/dpradhanbjp/status/1484853266244841472?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1484853266244841472%7Ctwgr%5E1abea6a9a91151f6433ede53582a4a8a4df21f4b%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.zoomin.productions%2F'
            className='px-4'
          >
            <Image
              src='/images/Tweets/tweet_3.png'
              alt='tweet_3'
              width={500}
              height={500}
            />
          </Link>
          <Link
            href='https://twitter.com/KTSangamam/status/1593126813643206656?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1593126813643206656%7Ctwgr%5E1abea6a9a91151f6433ede53582a4a8a4df21f4b%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.zoomin.productions%2F'
            className='px-4'
          >
            <Image
              src='/images/Tweets/tweet_4.png'
              alt='tweet_4'
              width={500}
              height={500}
            />
          </Link>
        </Carousel>
      </div>
    </>
  );
};

export default TweetsCarousel;
