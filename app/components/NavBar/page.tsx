"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center bg-[#E2E2B6] p-5 relative">
      {/* Logo */}
      <div className="absolute left-[50%]  translate-x-[-50%]">
        <Link href="/" className="flex items-center justify-center w-35 h-35">
          <Image alt="LOGO" src={"/new-logo.png"} width="150" height="150" />
        </Link>
      </div>

      {/* Navigation links */}
      <nav className="hidden md:flex text-xl font-semibold">
        <ul className="flex gap-5 text-[#091057]">
          <li>
            <Link
              className="hover:text-black hover:border-b-2 rounded border-black"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black hover:border-b-2 rounded border-black"
              href="/components/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black hover:border-b-2 rounded border-black"
              href="/components/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black hover:border-b-2 rounded border-black"
              href="/components/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Social links */}
      <nav className="hidden md:flex gap-5 text-gray-700">
        <Link
          href="https://www.linkedin.com/in/muhammad-zaki-444244302/"
          target="_blank"
        >
          <Image
            alt="Linkedin"
            src="/icons/linkedin.png"
            width="32"
            height="32"
          />
        </Link>
        <Link href="https://github.com/muhammadzaki791" target="_blank">
          <Image alt="GitHub" src="/icons/github.png" width="32" height="32" />
        </Link>
        <Link
          href="https://www.instagram.com/muhammad_zaki791/"
          target="_blank"
        >
          <Image
            alt="Instagram"
            src="/icons/instagram.png"
            width="35"
            height="35"
          />
        </Link>
        <Link href="https://www.npmjs.com/~muhammad_zaki" target="_blank">
          <Image alt="NPM" src="/icons/npm.png" width="32" height="32" />
        </Link>
      </nav>

      {/* Mobile menu icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#091057] focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-[#E2E2B6] flex flex-col items-center space-y-4 py-5 md:hidden">
          <Link
            href="/"
            onClick={toggleMenu}
            className="text-xl text-[#091057] hover:text-black"
          >
            Home
          </Link>
          <Link
            href="/components/about"
            onClick={toggleMenu}
            className="text-xl text-[#091057] hover:text-black"
          >
            About
          </Link>
          <Link
            href="/components/projects"
            onClick={toggleMenu}
            className="text-xl text-[#091057] hover:text-black"
          >
            Projects
          </Link>
          <Link
            href="/components/contact"
            onClick={toggleMenu}
            className="text-xl text-[#091057] hover:text-black"
          >
            Contact
          </Link>
          <div className="flex gap-5">
            <Link
              href="https://www.linkedin.com/in/muhammad-zaki-444244302/"
              target="_blank"
            >
              <Image
                alt="Linkedin"
                src="/icons/linkedin.png"
                width="32"
                height="32"
              />
            </Link>
            <Link href="https://github.com/muhammadzaki791" target="_blank">
              <Image
                alt="GitHub"
                src="/icons/github.png"
                width="32"
                height="32"
              />
            </Link>
            <Link
              href="https://www.instagram.com/muhammad_zaki791/"
              target="_blank"
            >
              <Image
                alt="Instagram"
                src="/icons/instagram.png"
                width="35"
                height="35"
              />
            </Link>
            <Link href="https://www.npmjs.com/~muhammad_zaki" target="_blank">
              <Image alt="NPM" src="/icons/npm.png" width="32" height="32" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
