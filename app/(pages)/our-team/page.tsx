import AboutUsSection from '@/components/About Us/AboutUsSection';
import FoundersSection from '@/components/FoundersSection';
import PortfolioCard from '@/components/PortFolioCard';
import { NextPage } from 'next';

const nameAndImages = [
  { name: 'Parth Shetye', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
  { name: 'G2 Shoot', imageSrc: '/images/pandit log/Parth Ka Photu.png' },
];

const OurTeamPage: NextPage = () => {
  return (
    <div className='mb-20 px-24'>
      <FoundersSection />

      <AboutUsSection />
      <h1 className='my-10 w-full text-center text-3xl font-bold'>Our Team</h1>
      <div className='grid grid-cols-2 gap-6 px-20 md:grid-cols-4'>
        {nameAndImages.map((item, index) => (
          <div key={index}>
            <PortfolioCard imageSrc={item.imageSrc} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurTeamPage;
