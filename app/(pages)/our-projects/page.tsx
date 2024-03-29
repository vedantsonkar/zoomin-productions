import AboutUsSection from '@/components/About Us/AboutUsSection';
import VideoCard from '@/components/VideoCard';
import { YOUTUBE_VIDEOS } from '@/constants';
import { NextPage } from 'next';
import OurClientsSection from '@/components/OurClients';

const OurTeamPage: NextPage = () => {
  return (
    <div className='mb-20 space-y-20 2xl:px-52'>
      <AboutUsSection />
      <OurClientsSection heading='Organizations that trust us' />
      <h1 className='heading my-10'>Our Projects</h1>
      <div className='grid grid-cols-2 gap-6 md:grid-cols-4 md:px-20'>
        {YOUTUBE_VIDEOS.map((item, index) => (
          <div key={index}>
            <VideoCard
              imageSrc={item.thumbnail}
              name={item.name}
              videoUrl={item.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurTeamPage;
