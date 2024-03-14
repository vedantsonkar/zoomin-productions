import FeaturedFilms from '@/components/FeaturedSection';
import OurClientsSection from '@/components/OurClients';
import AnimatedTextSection1 from '@/components/TextAnimation/Section1';
import AnimatedTextSection2 from '@/components/TextAnimation/Section2';
import VideoPlayer from '@/components/VideoPlayer';
import { BASE_DOMAIN } from '@/constants';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className='mb-16 flex flex-col items-start justify-start gap-y-16 bg-white md:mb-36 md:gap-y-36'>
      <h1 className='sr-only'>Zoomin Productions</h1>
      <Suspense fallback={<div className='h-[25rem] w-full bg-gray-500' />}>
        <VideoPlayer
          videoPath='/videos/Landing_Video.mp4'
          classNames={{ root: 'object-fill' }}
          restVideoTags={{ autoPlay: true, preload: 'auto', muted: true }}
        />
      </Suspense>
      <AnimatedTextSection1 />
      <OurClientsSection />
      <AnimatedTextSection2 />
      <FeaturedFilms />
    </main>
  );
}
