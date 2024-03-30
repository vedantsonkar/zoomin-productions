import { FC } from 'react';
import Carousel from '../Carousel';

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
          <div className='mx-auto px-4'>
            <blockquote className='twitter-tweet'>
              <p lang='hi' dir='ltr'>
                अब मिट्टी फिर से उगले सोना, हमने नया भारत बनाया है
                <br />
                <br />
                मुश्किलों की चट्टानों पर, हमने तिरंगा लहराया है
                <br />
                <br />
                मोदी जी के 8 साल में, असंभव भी संभव हो पाया है...{' '}
                <a href='https://t.co/HflN9aEGip'>pic.twitter.com/HflN9aEGip</a>
              </p>
              &mdash; BJP (@BJP4India){' '}
              <a href='https://twitter.com/BJP4India/status/1541375088347336704?ref_src=twsrc%5Etfw'>
                June 27, 2022
              </a>
            </blockquote>
          </div>
          <div className='px-4'>
            <blockquote className='twitter-tweet'>
              <p lang='hi' dir='ltr'>
                परीक्षा के तनाव और भय को करना हो दूर या चाहिए सफलता का गुरु
                मंत्र, प्रधानमंत्री{' '}
                <a href='https://twitter.com/narendramodi?ref_src=twsrc%5Etfw'>
                  @narendramodi
                </a>{' '}
                जी की ‘परीक्षा पे चर्चा’ में मिलेगा सबका समाधान।{' '}
                <a href='https://twitter.com/hashtag/PPC2022?src=hash&amp;ref_src=twsrc%5Etfw'>
                  #PPC2022
                </a>{' '}
                में भाग लेने के लिए तुरंत रजिस्ट्रेशन करें:{' '}
                <a href='https://t.co/B8s2yUyR3Y'>https://t.co/B8s2yUyR3Y</a>
                <br />
                <br />
                भाग लेने की अवधि 27 जनवरी तक बढ़ा दी गयी है।{' '}
                <a href='https://t.co/zbVbUdCVH3'>pic.twitter.com/zbVbUdCVH3</a>
              </p>
              &mdash; Dharmendra Pradhan (मोदी का परिवार) (@dpradhanbjp){' '}
              <a href='https://twitter.com/dpradhanbjp/status/1484853266244841472?ref_src=twsrc%5Etfw'>
                January 22, 2022
              </a>
            </blockquote>
          </div>
          <div className='px-4'>
            <blockquote className='twitter-tweet px-4'>
              <p lang='en' dir='ltr'>
                Kashi Tamil Sangamam is a unique programme. It gives a special
                opportunity to celebrate and reaffirm our deep rooted bonds.{' '}
                <a href='https://t.co/IqrRWRGtIn'>pic.twitter.com/IqrRWRGtIn</a>
              </p>
              &mdash; Narendra Modi (@narendramodi){' '}
              <a href='https://twitter.com/narendramodi/status/1593258241798320131?ref_src=twsrc%5Etfw'>
                November 17, 2022
              </a>
            </blockquote>
          </div>
          <div className='px-4'>
            <blockquote className='twitter-tweet px-4'>
              <p lang='en' dir='ltr'>
                Deep dive into our heritage discovering the links between our
                cultures that have existed for centuries with{' '}
                <a href='https://twitter.com/hashtag/KashiTamilSangamam?src=hash&amp;ref_src=twsrc%5Etfw'>
                  #KashiTamilSangamam
                </a>
                <br />
                <br />
                🗓️ 17 Nov - 16 Dec 2022.{' '}
                <a href='https://t.co/RvtIUrMtNp'>pic.twitter.com/RvtIUrMtNp</a>
              </p>
              &mdash; Kashi Tamil Sangamam (@KTSangamam){' '}
              <a href='https://twitter.com/KTSangamam/status/1593126813643206656?ref_src=twsrc%5Etfw'>
                November 17, 2022
              </a>
            </blockquote>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default TweetsCarousel;
