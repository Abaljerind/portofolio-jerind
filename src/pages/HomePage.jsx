import GrayCircle from "../components/GrayCircle";
import GreenCircle from "../components/GreenCircle";
import Buttons from "../components/Buttons";
import ViewAll from "../components/ViewAll";
import ProjectCards from "../components/ProjectCards";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { motion } from "motion/react";

function HomePage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="lg:px-2"
      >
        {/* header */}
        <div className="title-biodata flex items-center justify-between px-6 py-5">
          <div className="flex items-center justify-between">
            <GrayCircle />
            <p className="text-lg font-semibold text-[#666666] md:text-xl dark:text-[#C0C0C0]">
              Frontend Developer
            </p>
          </div>
          <GreenCircle />
        </div>

        <div className="biodata mt-2 md:mt-6 lg:-mt-2.5 lg:flex lg:flex-row-reverse lg:items-center lg:justify-center">
          <div className="selfie flex items-center justify-center lg:pr-6">
            <div className="outer-circle flex h-[165px] w-[165px] items-center justify-center rounded-full bg-[#F7F7F7] dark:border dark:border-[#3D3D3D] dark:bg-[#2C2C2C]">
              <img
                src="../images/avataaars.webp"
                alt="avatar image"
                className="h-36 w-36 rounded-full bg-[#D8D8DA]"
              />
            </div>
          </div>

          <div className="lg:flex lg:flex-col lg:items-start lg:px-6">
            <div className="profile my-6 flex flex-col items-center justify-center lg:items-start lg:justify-between">
              <h1 className="mb-4 text-3xl font-bold text-[#373737] md:text-4xl dark:text-white">
                I'm AbalJerind
              </h1>
              <p className="px-3 text-center text-[16px] leading-7 font-medium wrap-break-word text-[#6D6D6D] md:px-24 md:text-lg lg:px-0 lg:text-start dark:text-[#A2A2A2]">
                Frontend developer from Jakarta, ID. Currently building
                interfaces at Home.
              </p>
            </div>

            <div className="lg:-mt-3 lg:-ml-2 lg:pl-1.5">
              <Buttons />
            </div>
          </div>
        </div>
      </motion.div>

      {/* projects */}
      <div className="mt-12 px-2">
        <div className="rounded-xl bg-[#F7F7F7] px-2 py-2 dark:bg-[#2C2C2C]">
          <div className="title-project flex justify-between">
            <div className="flex items-center justify-center pl-2">
              <GrayCircle />
              <p className="text-lg font-semibold text-[#666666] md:text-xl dark:text-[#C0C0C0]">
                Projects
              </p>
            </div>
            <ViewAll />
          </div>

          <ProjectCards />
        </div>
      </div>

      {/* contact */}
      <ContactSection />

      {/* footer */}
      <Footer />
    </>
  );
}

export default HomePage;
