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
import { SiFramer, SiReactrouter, SiTailwindcss, SiVite } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaFire } from "react-icons/fa";
import { FaFigma, FaGithub, FaLinux } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "motion/react";

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
      skill: "TypeScript",
      icon: <BiLogoTypescript />,
      color: "#3178C6",
    },
    {
      skill: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#38B2AC",
    },
    {
      skill: "Framer Motion",
      icon: <SiFramer />,
      color: "#FFF312",
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

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemSkill = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div>
        {/* header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="title-about flex items-center justify-between px-4 py-5 lg:px-6"
        >
          <motion.div
            variants={item}
            className="flex items-center justify-between"
          >
            <GrayCircle />
            <p className="text-lg font-semibold text-[#666666] md:text-xl dark:text-[#C0C0C0]">
              About
            </p>
          </motion.div>
        </motion.div>

        {/* profile */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="profile mt-2 flex flex-col px-4 lg:px-6"
        >
          <div className="mb-10 flex flex-col items-center gap-1.5">
            {/* image */}
            <motion.div
              variants={item}
              className="selfie mb-1.5 flex items-center justify-center md:mb-2"
            >
              <div className="outer-circle flex h-[185px] w-[185px] items-center justify-center rounded-full bg-[#F7F7F7] md:h-[230px] md:w-[230px] dark:border dark:border-[#3D3D3D] dark:bg-[#2C2C2C]">
                <img
                  src="../images/myself.webp"
                  alt="myself"
                  className="h-40 w-40 rounded-full bg-[#D8D8DA] object-contain md:h-52 md:w-52"
                />
              </div>
            </motion.div>
            {/* ./ image */}
            <motion.h1
              variants={item}
              className="text-3xl font-bold text-[#373737] dark:text-white"
            >
              AbalJerind
            </motion.h1>
            <motion.p variants={item} className="bio">
              Frontend Developer
            </motion.p>
            <motion.p variants={item} className="bio">
              Jakarta, ID
            </motion.p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2 variants={item} className="title-heading">
              Introduction
            </motion.h2>
            <motion.p variants={item} className="information">
              I'm AbalJerind, a frontend web developer currently residing in
              Jakarta, Indonesia. I have a deep passion for crafting responsive,
              user-friendly and accessible web interfaces. My main goal is to
              bridge the gap between design and functionality, ensuring that
              users have a smooth and enjoyable experience across all devices.
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2 variants={item} className="title-heading">
              Biography
            </motion.h2>
            <motion.p variants={item} className="information">
              I have a bachelor’s degree in Informatics Engineering from
              Gunadarma University in Depok, Indonesia. I love keeping up with
              the latest technologies, learning through online courses and
              projects, and have experience working with APIs, turning Figma
              designs into pixel-perfect code, and ensuring smooth cross-browser
              performance. Outside of coding, I recharge by playing video games,
              watching movies, and exercising on weekends—all of which help me
              stay creative, focused, and energized for new challenges.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="skills lg:px-2"
        >
          <motion.h2
            variants={item}
            className="mb-4 px-4 text-3xl font-bold text-[#373737] dark:text-white"
          >
            My Skills
          </motion.h2>
          <motion.p variants={item} className="information px-4 lg:mb-7">
            I continuously refine my skills through hands-on practice and
            real-world challenges. Take a look — I hope you’ll find them
            impressive!
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 rounded-xl bg-[#F7F7F7] p-4 dark:bg-[#2C2C2C]"
        >
          {skillList.map((item, index) => {
            return (
              <motion.div key={index + 1} variants={itemSkill}>
                <MySkills
                  skill={item.skill}
                  icon={item.icon}
                  color={item.color}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default About;
