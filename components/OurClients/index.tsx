'use client';
import { FC } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';

import G2 from '@/public/images/clients/G2.webp';
import Bill_Gates_Foundation from '@/public/images/clients/Bill_Gates_Foundation.webp';
import Capacity_Building_Commission from '@/public/images/clients/Capacity_Building_Commission.webp';
import Animal_Husbandry from '@/public/images/clients/Animal_Husbandry.webp';
import Delhi_Police from '@/public/images/clients/Delhi_Police.webp';
import Ministry_of_Education from '@/public/images/clients/Ministry_of_Education.webp';

type OurClientsSectionProps = {
  heading?: string;
};

const OurClientsSection: FC<OurClientsSectionProps> = ({
  heading = 'People Who Trust Us',
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Define animation variants
  const variantsBottom: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '10vh' },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return (
    <div className='flex w-full flex-col gap-y-24' ref={ref}>
      <h3 className='text-center text-[1.8rem] font-bold lg:text-[2.4rem] xl:text-[3rem]'>
        {heading}
      </h3>
      <motion.div
        variants={variantsBottom}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='grid grid-cols-2 place-items-center gap-10 px-10 md:grid-cols-3 md:px-24'
      >
        <Image src={G2} alt='G2' width={150} height={150} sizes='33vw' />
        <Image
          src={Bill_Gates_Foundation}
          alt='G2'
          width={150}
          height={150}
          sizes='33vw'
        />
        <Image
          src={Capacity_Building_Commission}
          alt='Capacity_Building_Commission'
          width={150}
          height={150}
          sizes='33vw'
        />
        <Image
          src={Animal_Husbandry}
          alt='Animal_Husbandry'
          width={150}
          height={150}
          sizes='33vw'
        />
        <Image
          src={Delhi_Police}
          alt='Delhi_Police'
          width={150}
          height={150}
          sizes='33vw'
        />
        <Image
          src={Ministry_of_Education}
          alt='Ministry_of_Education'
          width={150}
          height={150}
          sizes='33vw'
        />
      </motion.div>
      <motion.div
        variants={variantsBottom}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='flex flex-col items-center justify-center px-10 md:px-24'
      >
        <h2 className='my-10 text-center text-4xl font-semibold'>
          Official tweets by our clients
        </h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
          <blockquote className='twitter-tweet'>
            <p lang='hi' dir='ltr'>
              परीक्षा के तनाव और भय को करना हो दूर या चाहिए सफलता का गुरु मंत्र,
              प्रधानमंत्री{' '}
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
          <blockquote className='twitter-tweet'>
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
          <blockquote className='twitter-tweet'>
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
      </motion.div>
    </div>
  );
};

export default OurClientsSection;
