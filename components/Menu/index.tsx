import Link from "next/link";

const Menu = () => {
  const linkClass =
    "text-transparent transition-colors focus:bg-gradient-to-r bg-white bg-clip-text from-[#ff9595] via-[#81da6f] to-[#49dfd2]";
  return (
    <nav className="flex fixed top-16 md:10p-20 flex-col bg-[#EDEAE9] items-center gap-y-10 lg:hidden text-xl font-bold w-full py-10 z-10 overflow-y-auto">
      <Link href="/" className={linkClass} aria-label="Home">
        Home
      </Link>
      <Link href="/about-us" className={linkClass} aria-label="About Us">
        About Us
      </Link>
      <Link href="/our-team" className={linkClass} aria-label="Our Projects">
        Our Team
      </Link>
      <Link
        href="/our-projects"
        className={linkClass}
        aria-label="Our Projects"
      >
        Our Projects
      </Link>
      <Link href="/contact-us" className={linkClass} aria-label="Contact Us">
        Contact Us
      </Link>
    </nav>
  );
};

export default Menu;
