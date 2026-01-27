import Buttons from "./Buttons";
import { motion } from "motion/react";

export default function ContactSection() {
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
    <section className="mt-12 px-2">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="texts mb-4 flex flex-col items-center justify-center text-center"
      >
        <motion.h3
          variants={item}
          className="mb-4 text-3xl font-bold text-[#373737] md:text-4xl dark:text-white"
        >
          Let's work together.
        </motion.h3>
        <motion.small
          variants={item}
          className="break-word px-8 text-[16px] leading-7 font-medium text-[#777777] md:text-lg dark:text-[#B7B7B7]"
        >
          Crafting modern and user-friendly web interfaces
        </motion.small>
      </motion.div>
      <Buttons />
    </section>
  );
}
