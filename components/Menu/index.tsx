'use client';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

type MenuProps = {
  closeMenu: () => void;
};

const Menu: FC<MenuProps> = ({ closeMenu }) => {
  const lClass =
    'text-transparent transition-colors bg-black focus:bg-[#A0383F] bg-clip-text from-[#ff9595] via-[#81da6f] to-[#49dfd2]';
  const router = useRouter();

  const onClick = (url: string) => {
    closeMenu();
    router.push(url);
  };

  return (
    <nav className='bg-pastel-pink/40 fixed top-16 z-10 flex h-full w-full max-w-screen flex-col items-center gap-y-10 overflow-y-auto py-10 text-xl font-bold backdrop-blur-md lg:hidden'>
      <button onClick={() => onClick('/')} className={lClass} aria-label='Home'>
        Home
      </button>
      <button
        onClick={() => onClick('/about-us')}
        className={lClass}
        aria-label='About Us'
      >
        About Us
      </button>
      <button
        onClick={() => onClick('/our-team')}
        className={lClass}
        aria-label='Our Team'
      >
        Our Team
      </button>
      <button
        onClick={() => onClick('/our-projects')}
        className={lClass}
        aria-label='Our Projects'
      >
        Our Projects
      </button>
      <button
        onClick={() => onClick('/')}
        className={lClass}
        aria-label='Contact Us'
      >
        Contact Us
      </button>
    </nav>
  );
};

export default Menu;
