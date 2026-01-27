import CopyEmail from "./CopyEmail";
import HireMe from "./HireMe";
import { motion } from "motion/react";

export default function Buttons() {
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
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="buttons flex items-center justify-center gap-3"
    >
      <motion.div variants={item}>
        <HireMe />
      </motion.div>

      <motion.div variants={item}>
        <CopyEmail />
      </motion.div>
    </motion.div>
  );
}
