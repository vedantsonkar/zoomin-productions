import AboutUsSection from '@/components/About Us/AboutUsSection';
import PortfolioSection from '@/components/About Us/PortfolioCarouselSection';
import { NextPage } from 'next';

const AboutUsPage: NextPage = () => {
  return (
    <div>
      <AboutUsSection />
      <PortfolioSection />
    </div>
  );
};
export default AboutUsPage;
