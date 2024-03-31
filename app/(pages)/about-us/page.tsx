import AboutUsSection from '@/components/About Us/AboutUsSection';
import PortfolioSection from '@/components/About Us/PortfolioCarouselSection';
import FeaturedFilms from '@/components/FeaturedSection';
import { NextPage } from 'next';

const AboutUsPage: NextPage = () => {
  return (
    <>
      <h1 className='sr-only'>About Us Zoomin Productions</h1>
      <div className='bg-container flex h-[33rem] flex-col items-center justify-center gap-y-10 md:h-[27rem]'>
        <h1 className='px-8 text-center text-4xl font-bold text-white md:text-[3rem]'>
          About Us
        </h1>
        <h2 className='font-cedarville_cursive px-8 text-center text-4xl font-bold text-white md:text-[3rem]'>
          Want a zoomin solution to your content production problems ?
        </h2>
      </div>

      <div className='mb-16 space-y-16 md:mb-36 md:space-y-36 2xl:px-32'>
        <AboutUsSection />
        <FeaturedFilms title='Our Projects' />
        <PortfolioSection />
      </div>
    </>
  );
};
export default AboutUsPage;
