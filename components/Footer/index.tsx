import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const socialLogoClass = "relative md:h-8 md:w-8 h-6 w-6";
  return (
    <footer className="bg-[#EDEAE9] relative pt-14 pb-16 lg:pb-24 lg:pt-18 px-8 flex w-full justify-center gap-x-32 lg:gap-x-72 items-center md:items-start md:flex-row flex-col-reverse gap-y-10">
      {/* LOGO and Socia Links */}
      <div className="flex items-center flex-col justify-center gap-x-4">
        <div className="relative h-36 w-36 md:-mt-6">
          <Image
            src="/images/global/zoomin_logo.png"
            fill
            className="object-contain"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-x-6 md:gap-x-8">
          <Link href="/" className={socialLogoClass}>
            <Image
              src="/images/global/social_logo/icon-facebook.svg"
              alt="Facebook"
              fill
              aria-label="Facebook"
              className="object-contain"
            />
          </Link>
          <Link href="/" className={socialLogoClass}>
            <Image
              src="/images/global/social_logo/icon-youtube.svg"
              alt="YouTube"
              fill
              aria-label="YouTube"
              className="object-contain"
            />
          </Link>
          <Link href="/" className={socialLogoClass}>
            <Image
              src="/images/global/social_logo/icon-instagram.svg"
              alt="Instagram"
              fill
              aria-label="Instagram"
              className="object-contain"
            />
          </Link>
          <Link href="/" className={socialLogoClass}>
            <Image
              src="/images/global/social_logo/icon-twitter.svg"
              alt="Twitter"
              fill
              aria-label="Twitter"
              className="object-contain"
            />
          </Link>
          <Link href="/" className={socialLogoClass}>
            <Image
              src="/images/global/social_logo/icon-pinterest.svg"
              alt="Pinterest"
              fill
              aria-label="Pinterest"
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      <div className="flex xl:gap-x-96 gap-x-20 font-semibold text-lg md:text-xl xl:text-2xl text-black">
        <div className="flex flex-col gap-y-3 ">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/products">Products</Link>
          <Link href="/about-us">About Us</Link>
        </div>
        <div className="flex flex-col space-y-3 ">
          <Link href="/careers">Careers</Link>
          <Link href="/community">Community</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
      <div className="max-md:hidden py-4 text-sm absolute bottom-0 text-black">
        Copyright &copy; 2024, All Rights Reserved
      </div>
    </footer>
  );
}
