"use client";
import Logo from "@/public/images/global/zoomin_logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Menu from "../Menu";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleMenuClick = () => {
    const hamburgerButton = document.querySelector(".hamburger");
    if (hamburgerButton) {
      hamburgerButton.classList.toggle("open");
    }
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="border-b border-white shadow-lg w-full sticky top-0 h-16 md:h-20 flex items-center justify-between px-12 lg:px-24 bg-[#fff] z-50">
        <Link href="/" className="relative lg:w-24 lg:h-24 h-20 w-20">
          <Image
            src={Logo}
            alt="ZoomIn Productions"
            title="ZoomIn Productions"
            className="object-contain"
            fill
            sizes="33vw"
            priority
            aria-label="Logo"
          />
        </Link>
        <nav className="flex gap-x-6 items-center justify-center max-lg:hidden text-xl xl:text-3xl font-bold">
          <Link
            href="/"
            className="text-transparent transition-colors hover:bg-gradient-to-tr bg-black from-[#ff9595] via-[#81da6f] to-[#49dfd2] bg-clip-text"
            aria-label="Home"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-transparent transition-colors hover:bg-gradient-to-tr bg-black from-[#ff9595] via-[#81da6f] to-[#49dfd2] bg-clip-text"
            aria-label="About Us"
          >
            About Us
          </Link>
          <Link
            href="/our-team"
            className="text-transparent transition-colors hover:bg-gradient-to-tr bg-black from-[#ff9595] via-[#81da6f] to-[#49dfd2] bg-clip-text"
            aria-label="Our Projects"
          >
            Our Team
          </Link>
          <Link
            href="/our-projects"
            className="text-transparent transition-colors hover:bg-gradient-to-tr bg-black from-[#ff9595] via-[#81da6f] to-[#49dfd2] bg-clip-text"
            aria-label="Our Projects"
          >
            Our Projects
          </Link>
          <Link
            href="/contact-us"
            className="text-transparent transition-colors hover:bg-gradient-to-tr bg-black from-[#ff9595] via-[#81da6f] to-[#49dfd2] bg-clip-text"
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
        </nav>
        <button
          className="block hamburger lg:hidden focus:outline-none"
          onClick={() => handleMenuClick()}
        >
          <span className="hamburger-top" />
          <span className="hamburger-middle" />
          <span className="hamburger-bottom" />
        </button>
      </div>
      {menuOpen && <Menu />}
    </>
  );
};

export default Header;
