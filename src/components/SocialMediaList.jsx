import { motion } from "motion/react";

export default function SocialMediaList({ social, color, index }) {
  const fadeRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      transition={{
        ease: "easeIn",
        duration: 0.8,
        delay: index * 0.2,
        staggerChildren: 0.1,
      }}
      className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition duration-500 hover:bg-[#e4e4e4] dark:duration-initial dark:hover:bg-[#414141]"
    >
      <motion.a
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.2 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-white shadow-sm"
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className="text-lg text-gray-700 transition duration-300 group-hover:text-(--hover-color)"
          style={{ "--hover-color": color }}
        >
          {social.img}
        </span>
      </motion.a>
    </motion.div>
  );
}
