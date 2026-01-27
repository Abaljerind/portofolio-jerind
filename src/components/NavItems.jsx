import { GoHome } from "react-icons/go";
import { PiCertificate, PiUser } from "react-icons/pi";
import { RiCodeBoxFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function NavItems() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/", icon: <GoHome /> },
    { name: "About", path: "/about", icon: <PiUser /> },
    { name: "Project", path: "/project", icon: <RiCodeBoxFill /> },
    { name: "Certificate", path: "/certificate", icon: <PiCertificate /> },
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
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex justify-between md:justify-start md:gap-6 lg:gap-8"
    >
      {menuItems.map((nav, index) => {
        return (
          <motion.li
            variants={item}
            className="group relative cursor-pointer"
            key={index + 1}
          >
            <Link to={nav.path}>
              <small className="absolute -top-6 left-[50%] w-fit -translate-x-[50%] rounded-full bg-[#373737] px-2 py-0.5 text-center text-xs text-white opacity-0 transition-all delay-200 duration-300 group-hover:opacity-100">
                {nav.name}
              </small>
              <span
                className={`text-3xl ${location.pathname === nav.path ? "text-[#373737] opacity-100 dark:text-white" : "text-[#373737] opacity-50 dark:text-white"} transition-all duration-300 group-hover:opacity-100`}
              >
                {nav.icon}
              </span>
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
