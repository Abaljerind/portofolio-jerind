import ContactSection from "../components/ContactSection";
import GrayCircle from "../components/GrayCircle";
import ProjectCards from "../components/ProjectCards";
import Footer from "../components/Footer";
import { motion } from "motion/react";

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

function Project() {
  return (
    <>
      <section className="lg:px-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="title-about flex items-center justify-between px-6 py-5"
        >
          <motion.div
            variants={item}
            className="flex items-center justify-between"
          >
            <GrayCircle />
            <p className="text-lg font-semibold text-[#666666] md:text-xl dark:text-[#C0C0C0]">
              Projects
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="my-projects flex flex-col px-6"
        >
          <motion.h2
            variants={item}
            className="mb-4 text-3xl font-bold text-[#373737] md:mt-4 md:mb-6 md:text-4xl dark:text-white"
          >
            My Works
          </motion.h2>
          <motion.p
            variants={item}
            className="mb-10 text-[16px] leading-7 tracking-tight text-[#666666] md:text-lg dark:text-[#C0C0C0]"
          >
            Explore my portfolio, where clean code meets seamless design. I
            craft responsive and user-friendly web experiences that engage and
            inspire.
          </motion.p>
        </motion.div>
      </section>

      <section className="p-2">
        <div className="rounded-xl bg-[#F7F7F7] p-2 dark:bg-[#2C2C2C]">
          <ProjectCards />
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>
  );
}

export default Project;
