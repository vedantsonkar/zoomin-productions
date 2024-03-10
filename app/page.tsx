import FeaturedFilms from '@/components/FeaturedSection'
import OurClientsSection from '@/components/OurClients'
import AnimatedTextSection1 from '@/components/TextAnimation/Section1'
import AnimatedTextSection2 from '@/components/TextAnimation/Section2'
import VideoPlayer from '@/components/VideoPlayer'

export default function Home() {
  return (
    <main className='flex flex-col items-start justify-start bg-[#fff]'>
      <VideoPlayer
        videoPath='/videos/Landing_Video.mp4'
        classNames={{ root: 'object-fill' }}
        restVideoTags={{ autoPlay: true, preload: 'auto', muted: true }}
      />
      <div className='my-10 md:my-36'>
        <AnimatedTextSection1 />
      </div>
      <OurClientsSection />
      <div className='my-10'>
        <AnimatedTextSection2 />
      </div>
      <FeaturedFilms />
    </main>
  )
}
