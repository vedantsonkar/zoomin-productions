'use client';
import Logo from '@/public/images/global/zoomin_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Menu from '../Menu';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleMenuClick = () => {
    const hamburgerButton = document.querySelector('.hamburger');
    if (hamburgerButton) {
      hamburgerButton.classList.toggle('open');
    }
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className='sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-white bg-[#fff] px-12 shadow-lg md:h-20 lg:px-24'>
        <Link href='/' className='relative h-20 w-20 lg:h-24 lg:w-24'>
          <Image
            src={Logo}
            alt='ZoomIn Productions'
            title='ZoomIn Productions'
            className='object-contain'
            fill
            sizes='33vw'
            priority
            aria-label='Logo'
          />
        </Link>
        <nav className='flex items-center justify-center gap-x-6 text-xl font-bold max-lg:hidden xl:text-3xl'>
          <Link
            href='/'
            className='bg-black from-[#ff9595] via-[#81da6f] to-[#49dfd2] bg-clip-text text-transparent transition-colors hover:bg-gradient-to-tr'
            aria-label='Home'
          >
            Home
          </Link>
          <Link
            href='/about-us'
            className='bg-black from-[#ff9595] via-[#81da6f] to-[#49dfd2] bg-clip-text text-transparent transition-colors hover:bg-gradient-to-tr'
            aria-label='About Us'
          >
            About Us
          </Link>
          <Link
            href='/our-team'
            className='bg-black from-[#ff9595] via-[#81da6f] to-[#49dfd2] bg-clip-text text-transparent transition-colors hover:bg-gradient-to-tr'
            aria-label='Our Projects'
          >
            Our Team
          </Link>
          <Link
            href='/our-projects'
            className='bg-black from-[#ff9595] via-[#81da6f] to-[#49dfd2] bg-clip-text text-transparent transition-colors hover:bg-gradient-to-tr'
            aria-label='Our Projects'
          >
            Our Projects
          </Link>
          <Link
            href='/contact-us'
            className='bg-black from-[#ff9595] via-[#81da6f] to-[#49dfd2] bg-clip-text text-transparent transition-colors hover:bg-gradient-to-tr'
            aria-label='Contact Us'
          >
            Contact Us
          </Link>
        </nav>
        <button
          className='hamburger block focus:outline-none lg:hidden'
          onClick={() => handleMenuClick()}
        >
          <span className='hamburger-top' />
          <span className='hamburger-middle' />
          <span className='hamburger-bottom' />
        </button>
      </div>
      {menuOpen && <Menu />}
    </>
  );
};

export default Header;
