import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNpm,
} from "react-icons/io5";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import GrayCircle from "../components/GrayCircle";
import MySkills from "../components/MySkills";
import { SiReactrouter, SiTailwindcss, SiVite } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaFire } from "react-icons/fa";
import { FaFigma, FaGithub, FaLinux } from "react-icons/fa6";

function About() {
  const skillList = [
    {
      skill: "HTML",
      icon: <IoLogoHtml5 />,
      color: "#E34F26",
    },
    {
      skill: "CSS",
      icon: <IoLogoCss3 />,
      color: "#1572B6",
    },
    {
      skill: "JavaScript",
      icon: <IoLogoJavascript />,
      color: "#F7DF1E",
    },
    {
      skill: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#38B2AC",
    },
    {
      skill: "React JS",
      icon: <RiReactjsFill />,
      color: "#61DAFB",
    },
    {
      skill: "Vite",
      icon: <SiVite />,
      color: "#646CFF",
    },
    {
      skill: "NPM",
      icon: <IoLogoNpm />,
      color: "#CB3837",
    },
    {
      skill: "Rest API",
      icon: <FaFire />,
      color: "#E34F26",
    },
    {
      skill: "React Router",
      icon: <SiReactrouter />,
      color: "#CA4245",
    },
    {
      skill: "Linux Basic",
      icon: <FaLinux />,
      color: "#FCC624",
    },
    {
      skill: "Git & Github",
      icon: <FaGithub />,
      color: "#181717",
    },
    {
      skill: "Figma",
      icon: <FaFigma />,
      color: "#F24E1E",
    },
  ];

  return (
    <>
      <div className="px-2">
        {/* header */}
        <div className="title-about flex items-center justify-between px-4 py-5 lg:px-6">
          <div className="flex items-center justify-between">
            <GrayCircle />
            <p className="text-lg font-semibold text-[#666666] md:text-xl dark:text-[#C0C0C0]">
              About
            </p>
          </div>
        </div>

        {/* profile */}
        <div className="profile mt-2 flex flex-col px-4 lg:px-6">
          <div className="mb-10 flex flex-col items-center gap-1.5">
            {/* image */}
            <div className="selfie mb-1.5 flex items-center justify-center md:mb-2">
              <div className="outer-circle flex h-[185px] w-[185px] items-center justify-center rounded-full bg-[#F7F7F7] md:h-[230px] md:w-[230px] dark:border dark:border-[#3D3D3D] dark:bg-[#2C2C2C]">
                <img
                  src="../images/myself.webp"
                  alt="myself"
                  className="h-40 w-40 rounded-full bg-[#D8D8DA] object-contain md:h-52 md:w-52"
                />
              </div>
            </div>
            {/* ./ image */}
            <h1 className="text-3xl font-bold text-[#373737] dark:text-white">
              AbalJerind
            </h1>
            <p className="bio">Frontend Developer</p>
            <p className="bio">Jakarta, ID</p>
          </div>

          <h2 className="title-heading">Introduction</h2>
          <p className="information">
            I'm AbalJerind, a frontend web developer currently residing in
            Jakarta, Indonesia. I have a deep passion for crafting responsive,
            user-friendly and accessible web interfaces. My main goal is to
            bridge the gap between design and functionality, ensuring that users
            have a smooth and enjoyable experience across all devices.
          </p>

          <h2 className="title-heading">Biography</h2>
          <p className="information">
            I have a bachelor’s degree in Informatics Engineering from Gunadarma
            University in Depok, Indonesia. I love keeping up with the latest
            technologies, learning through online courses and projects, and have
            experience working with APIs, turning Figma designs into
            pixel-perfect code, and ensuring smooth cross-browser performance.
            Outside of coding, I recharge by playing video games, watching
            movies, and exercising on weekends—all of which help me stay
            creative, focused, and energized for new challenges.
          </p>
        </div>

        <div className="skills lg:px-2">
          <h2 className="mb-4 px-4 text-3xl font-bold text-[#373737] dark:text-white">
            My Skills
          </h2>
          <p className="information px-4 lg:mb-7">
            I continuously refine my skills through hands-on practice and
            real-world challenges. Take a look — I hope you’ll find them
            impressive!
          </p>
        </div>

        <div className="flex flex-wrap gap-2 rounded-xl bg-[#F7F7F7] p-4 dark:bg-[#2C2C2C]">
          {skillList.map((item, index) => {
            return (
              <MySkills
                key={index + 1}
                skill={item.skill}
                icon={item.icon}
                color={item.color}
              />
            );
          })}
        </div>
      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default About;
