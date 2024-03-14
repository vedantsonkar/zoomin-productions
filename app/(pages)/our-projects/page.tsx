import AboutUsSection from '@/components/About Us/AboutUsSection';
import VideoCard from '@/components/VideoCard';
import { YOUTUBE_VIDEOS } from '@/constants';
import { NextPage } from 'next';
import OurClientsSection from '@/components/OurClients';

const OurTeamPage: NextPage = () => {
  return (
    <div className='mb-20 space-y-20 px-24'>
      <AboutUsSection />
      <OurClientsSection heading='Organizations we have worked with' />
      <h1 className='my-10 w-full text-center text-3xl font-bold'>
        Our Projects
      </h1>
      <div className='grid grid-cols-2 gap-6 px-20 md:grid-cols-4'>
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
