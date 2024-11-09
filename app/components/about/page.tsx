import Image from "next/image";
import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";

export default function About() {
  const skills = [
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path
            d="M12 14.25c1.24 0 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75 9.75 10.76 9.75 12s1.01 2.25 2.25 2.25Z"
            fill="#61DAFB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3c-2.444 0-4.644 1.042-6.204 2.708C4.25 7.354 3 9.618 3 12c0 2.382 1.25 4.646 2.796 6.292C7.356 19.958 9.556 21 12 21c2.444 0 4.644-1.042 6.204-2.708C19.75 16.646 21 14.382 21 12c0-2.382-1.25-4.646-2.796-6.292C16.644 4.042 14.444 3 12 3Zm0 2.25c1.795 0 3.419.784 4.619 2.045 1.203 1.266 1.993 3 1.993 4.705 0 1.705-.79 3.439-1.993 4.705-1.2 1.261-2.824 2.045-4.619 2.045-1.795 0-3.419-.784-4.619-2.045C6.178 15.439 5.388 13.705 5.388 12c0-1.705.79-3.439 1.993-4.705C8.581 6.034 10.205 5.25 12 5.25Z"
            fill="#61DAFB"
          />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path
            d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
            fill="#000000"
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path
            d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM12 10.313v2.25h-3v7.124H6.75v-7.125H3.75v-2.25H12zm1.5 0h5.625v2.25h-3.375v7.124H13.5v-9.374z"
            fill="#007ACC"
          />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
            fill="#06B6D4"
          />
        </svg>
      ),
    },
    {
      name: "HTML",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path
            d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
            fill="#E34F26"
          />
        </svg>
      ),
    },
    {
      name: "CSS",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path
            d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
            fill="#1572B6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen p-8 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-[#B8001F]">
      <h1 className="text-4xl font-bold text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
        About Me
      </h1>
      <div className="text-center mt-4 sm:text-lg md:text-xl lg:text-2xl">
        <p className="text-white">
          {" "}
          A web developer focused on creating responsive, interactive, and
          visually engaging applications. With expertise in HTML, CSS,
          JavaScript, TypeScript, Tailwind and Next.js, I specialize in building
          user-centered solutions that deliver seamless experiences across all
          devices. Currently advancing my skills in full-stack development, I
          aim to craft efficient, scalable code and modern, vibrant designs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {skills.map((skill) => (
          <Card key={skill.name} className="bg-white shadow-lg rounded-lg">
            <CardContent className="p-6 flex flex-col items-center">
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold">{skill.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
