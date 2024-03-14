import AboutUsSection from '@/components/About Us/AboutUsSection';
import PortfolioSection from '@/components/About Us/PortfolioCarouselSection';
import FeaturedFilms from '@/components/FeaturedSection';
import { NextPage } from 'next';

const AboutUsPage: NextPage = () => {
  return (
    <div className='mb-16 space-y-16 md:mb-36 md:space-y-36'>
      <AboutUsSection />
      <FeaturedFilms />
      <PortfolioSection />
    </div>
  );
};
export default AboutUsPage;
