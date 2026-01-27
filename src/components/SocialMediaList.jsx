import { motion } from "motion/react";

export default function SocialMediaList({ social, color }) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
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
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      animate={{ once: true }}
      className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition duration-500 hover:bg-[#e4e4e4] dark:duration-initial dark:hover:bg-[#414141]"
    >
      <motion.a
        variants={item}
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
