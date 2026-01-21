import Buttons from "./Buttons";
import { motion } from "motion/react";

export default function ContactSection() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-12 px-2"
    >
      <div className="texts mb-4 flex flex-col items-center justify-center text-center">
        <h3 className="mb-4 text-3xl font-bold text-[#373737] md:text-4xl dark:text-white">
          Let's work together.
        </h3>
        <small className="break-word px-8 text-[16px] leading-7 font-medium text-[#777777] md:text-lg dark:text-[#B7B7B7]">
          Crafting modern and user-friendly web interfaces
        </small>
      </div>
      <Buttons />
    </motion.section>
  );
}
