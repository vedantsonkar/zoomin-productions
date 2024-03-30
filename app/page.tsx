import FeaturedFilms from '@/components/FeaturedSection';
import OurClientsSection from '@/components/OurClients';
import AnimatedTextSection1 from '@/components/TextAnimation/Section1';
import AnimatedTextSection2 from '@/components/TextAnimation/Section2';
import VideoPlayer from '@/components/VideoPlayer';

export default function Home() {
  return (
    <main className='mb-16 w-full md:mb-36'>
      <h1 className='sr-only'>Zoomin Productions</h1>
      <VideoPlayer
        videoPath='/videos/Landing_Video.mp4'
        classNames={{ root: 'object-fill' }}
        restVideoTags={{ autoPlay: true, preload: 'auto', muted: true }}
      />
      <div className='mt-12 flex w-full flex-col items-start justify-start gap-y-16 md:mt-36 md:gap-y-36 2xl:px-52'>
        <AnimatedTextSection1 />
        <OurClientsSection />
        <AnimatedTextSection2 />
        <FeaturedFilms />
      </div>
    </main>
  );
}
