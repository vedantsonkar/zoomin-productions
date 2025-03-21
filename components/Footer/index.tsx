import Image from 'next/image';
import Link from 'next/link';
import { LINKS } from '@/constants';

export default function Footer() {
  const socialLogoClass = 'relative md:h-8 md:w-8 h-6 w-6';
  const currentYear = new Date().getFullYear();
  return (
    <footer className='relative flex w-full flex-col-reverse items-center justify-center gap-x-32 gap-y-10 bg-[#EDEAE9] px-8 pt-14 pb-16 md:flex-row md:items-start lg:gap-x-72 lg:pt-18 lg:pb-24'>
      {/* LOGO and Socia Links */}
      <div className='flex flex-col items-center justify-center gap-x-4'>
        <div className='relative h-36 w-36 md:-mt-6'>
          <Image
            src='/images/global/zoomin_logo.png'
            fill
            className='object-contain'
            alt=''
          />
        </div>
        <div className='flex items-center justify-center gap-x-6 md:gap-x-8'>
          <Link href='/' className={socialLogoClass}>
            <Image
              src='/images/global/social_logo/icon-facebook.svg'
              alt='Facebook'
              fill
              aria-label='Facebook'
              className='object-contain'
            />
          </Link>
          <Link
            href='https://www.youtube.com/@zoominproduction5626'
            target='_blank'
            className={socialLogoClass}
          >
            <Image
              src='/images/global/social_logo/icon-youtube.svg'
              alt='YouTube'
              fill
              aria-label='YouTube'
              className='object-contain'
            />
          </Link>
          <Link
            href='https://www.instagram.com/zoom_inproductions'
            target='_blank'
            className={socialLogoClass}
          >
            <Image
              src='/images/global/social_logo/icon-instagram.svg'
              alt='Instagram'
              fill
              aria-label='Instagram'
              className='object-contain'
            />
          </Link>
          <Link href='/' className={socialLogoClass}>
            <Image
              src='/images/global/social_logo/icon-twitter.svg'
              alt='Twitter'
              fill
              aria-label='Twitter'
              className='object-contain'
            />
          </Link>
        </div>
      </div>

      <div className='flex gap-x-20 text-lg font-semibold text-black md:text-xl xl:gap-x-96 xl:text-xl'>
        <div className='flex flex-col gap-y-3'>
          <Link href='/'>Home</Link>
          <Link href='/about-us'>About Us</Link>
          <Link href='/our-team'>Our Team</Link>
          <Link href='/our-projects'>Our Projects</Link>
        </div>
        <div className='flex flex-col space-y-3'>
          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSc9qSGhxIse7YhaTr7HiakCXbcYHKyL2Uns30R9NGzVWIzZvA/viewform?usp=sf_link
'
          >
            Careers
          </Link>
          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSc9qSGhxIse7YhaTr7HiakCXbcYHKyL2Uns30R9NGzVWIzZvA/viewform?usp=sf_link
'
          >
            Contact Us
          </Link>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </div>
      </div>
      <div className='absolute bottom-0 py-4 text-sm text-black max-md:hidden'>
        Copyright &copy; {currentYear}, All Rights Reserved
      </div>
    </footer>
  );
}
