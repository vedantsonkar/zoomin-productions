import FoundersSection from '@/components/FoundersSection';
import OurTeamTextSection from '@/components/Our Team/OurTeamTextSection';
import PortfolioCard from '@/components/PortfolioCard';
import { OUR_TEAM } from '@/constants';
import { NextPage } from 'next';

const OurTeamPage: NextPage = () => {
  return (
    <div className='mb-16 justify-start space-y-16 pt-8 md:mb-36 md:space-y-36 lg:px-24 xl:px-36 2xl:px-32'>
      <h1 className='heading -mb-8'>Our Leaders</h1>
      <FoundersSection />
      <OurTeamTextSection />
      <h1 className='heading'>Our Team</h1>
      <div className='grid grid-cols-2 gap-x-6 gap-y-12 px-8 md:grid-cols-3 md:px-20'>
        {OUR_TEAM.map((item, index) => (
          <div key={index}>
            <PortfolioCard
              imageSrc={item.imageSrc}
              name={item.name}
              position={item.position}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurTeamPage;
