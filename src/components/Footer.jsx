import { SiFrontendmentor } from "react-icons/si";
import GrayCircle from "./GrayCircle";
import SocialMediaList from "./SocialMediaList";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "motion/react";

export default function Footer() {
  const socialMediaList = [
    {
      name: "FrontendMentor",
      img: <SiFrontendmentor />,
      href: "https://www.frontendmentor.io/profile/Abaljerind",
      color: "#3F54A3",
    },
    {
      name: "LinkedIn",
      img: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/abal-jerind-baa90519a/",
      color: "#0A66C2",
    },
    {
      name: "Github",
      img: <FaGithub />,
      href: "https://github.com/Abaljerind",
      color: "#181717",
    },
  ];

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <footer className="mt-12 px-2">
      <div className="social-media mb-2 flex justify-between rounded-xl bg-[#F7F7F7] px-2 py-4 dark:bg-[#2C2C2C]">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="left-side flex items-center pl-2"
        >
          <GrayCircle />
          <p className="text-lg font-semibold text-[#666666] md:text-xl dark:text-[#C0C0C0]">
            Follow Me
          </p>
        </motion.div>
        <div className="right-side flex items-center justify-center gap-1">
          {socialMediaList.map((social, index) => {
            return (
              <SocialMediaList
                social={social}
                color={social.color}
                index={index}
                key={index + 1}
              />
            );
          })}
        </div>
      </div>

      <div className="copyright rounded-xl bg-[#F7F7F7] px-4 py-6 dark:bg-[#2C2C2C]">
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-[#787878] md:text-[16px] dark:text-[#C0C0C0]"
        >
          &copy; 2025{" "}
          <a
            href="https://www.linkedin.com/in/abal-jerind-baa90519a/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#444444] underline duration-300 hover:text-sky-400 dark:text-white"
          >
            AbalJerind
          </a>{" "}
          - Build with{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#444444] underline duration-300 hover:text-sky-400 dark:text-white"
          >
            React
          </a>{" "}
          &{" "}
          <a
            href="https://vite.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#444444] underline duration-300 hover:text-sky-400 dark:text-white"
          >
            Vite
          </a>
        </motion.p>
      </div>
    </footer>
  );
}
