import Link from "next/link";
import Image from "next/image";
import React from "react";
import ContactForm from "@/app/components/contact/page";
import Projects from "@/app/components/projects/page";
import About from "@/app/components/about/page";

const Home = () => {
  return (
    <div>
      <div className="hero text-white bg-[#B8001F] border-b-4 border-[#E2E2B6] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <div className="flex justify-center mb-6 lg:mb-0">
            <img
              src="/pic.png"
              alt="My Image"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full lg:w-[50%]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Muhammad Zaki
            </h1>
            <p className="py-6 text-base sm:text-lg md:text-xl">
              Hi, I'm Zaki, I'm passionate about web development and have been
              practicing frontend development with skills in HTML, CSS,
              TypeScript, JavaScript, Tailwind CSS, and Next.js. I'm also
              actively learning Next.js ReactJs through the Governor Sindh
              Initiative for GenAI, Web3, and Metaverse. You can check out my
              projects on my GitHub. My goal is to become a full-stack web
              developer and software engineer.
            </p>
            <button className="btn btn-primary text-lg">
              <Link href="/components/contact">Contact Me</Link>
            </button>
            <button className="btn btn-secondary ml-2 text-lg">
              <Link
                className="flex"
                href="https://static-resume-ashen.vercel.app/"
                target="_blank"
              >
                Resume
                <Image
                  alt="Linkedin"
                  src="/icons/share.png"
                  width="32"
                  height="32"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b-4 border-[#E2E2B6]">
        <About />
      </div>
      <div className="border-b-4 border-[#E2E2B6]">
        <Projects />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-5 p-10 text-white bg-[#B8001F]">
        <ContactForm />
        <div className="mt-10 w-full lg:w-[50%] text-xl">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-5">
            Let's Connect
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            We're here to connect! Whether you have a project in mind, need more
            information, or just want to chat about potential collaborations,
            feel free to reach out. Fill out the form below, and I’ll get back
            to you as soon as possible. Let’s bring your ideas to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
