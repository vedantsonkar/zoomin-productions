import Logo from "@/public/images/global/zoomin_logo.png";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="border-b border-white w-full sticky top-0 h-28 flex items-center justify-between px-24 bg-stone-900">
      <Link href="/" className="relative w-36 h-36">
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
      <ul className="flex space-x-6 items-center justify-center max-md:hidden text-xl md:text-3xl font-bold">
        <li>
          <Link
            href="/"
            className="text-transparent transition-colors bg-gradient-to-r bg-white hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% bg-clip-text"
            aria-label="Home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className="text-transparent transition-colors bg-gradient-to-r bg-white hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% bg-clip-text"
            aria-label="About Us"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/our-team"
            className="text-transparent transition-colors bg-gradient-to-r bg-white hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% bg-clip-text"
            aria-label="Our Projects"
          >
            Our Team
          </Link>
        </li>
        <li>
          <Link
            href="/our-projects"
            className="text-transparent transition-colors bg-gradient-to-r bg-white hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% bg-clip-text"
            aria-label="Our Projects"
          >
            Our Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className="text-transparent transition-colors bg-gradient-to-r bg-white hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% bg-clip-text"
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
