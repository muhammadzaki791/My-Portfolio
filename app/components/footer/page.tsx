// components/Footer.tsx
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E2E2B6] text-black py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">

          <Link href="https://www.linkedin.com/in/muhammad-zaki-444244302/" target="_blank">
          <Image
            className="hover:text-gray-400"
            alt="Linkedin"
            src="/icons/linkedin.png"
            width="32"
            height="32"
          />
        </Link>

        <Link href="https://github.com/muhammadzaki791" target="_blank">
          <Image
            className="hover:text-gray-400"
            alt="GitHub"
            src="/icons/github.png"
            width="32"
            height="32"
          />
        </Link>

        <Link href="https://www.instagram.com/muhammad_zaki791/" target="_blank">
          <Image
            className="hover:text-gray-400"
            alt="Instagram"
            src="/icons/instagram.png"
            width="35"
            height="35"
          />
        </Link>

        <Link href="https://www.npmjs.com/~muhammad_zaki" target="_blank">
          <Image
           className="hover:text-gray-400"
           alt="NPM" 
           src="/icons/npm.png" 
           width="32" 
           height="32" />
        </Link>
          
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Muhammad Zaki. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
