import AboutUsSection from '@/components/About Us/AboutUsSection';
import PortfolioSection from '@/components/About Us/PortfolioCarouselSection';
import FeaturedFilms from '@/components/FeaturedSection';
import { NextPage } from 'next';

const AboutUsPage: NextPage = () => {
  return (
    <>
      <div className='bg-container flex h-[33rem] items-center justify-center md:h-[27rem]'>
        <h1 className='px-8 text-center text-4xl font-bold text-white md:px-24 md:text-[3rem]'>
          Want a zoomin solution to your content production problems ?
        </h1>
      </div>

      <div className='mb-16 space-y-16 md:mb-36 md:space-y-36'>
        <AboutUsSection />
        <FeaturedFilms />
        <PortfolioSection />
      </div>
    </>
  );
};
export default AboutUsPage;
