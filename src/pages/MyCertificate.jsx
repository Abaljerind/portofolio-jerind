import { useState } from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import GrayCircle from "../components/GrayCircle";
import { IoClose } from "react-icons/io5";
import { PiMedalLight } from "react-icons/pi";
import { certifications } from "../../data/certificates";
import { AnimatePresence, motion } from "motion/react";

const MyCertificate = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = certifications;

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

  return (
    <>
      <section className="px-2">
        {/* header */}
        <motion.header
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
              Certificate
            </p>
          </motion.div>
        </motion.header>

        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          className="my-projects flex flex-col px-4 lg:px-6"
        >
          <motion.h2
            variants={item}
            className="mb-4 text-3xl font-bold text-[#373737] md:mt-4 md:mb-6 md:text-4xl dark:text-white"
          >
            My Certifications
          </motion.h2>
          <motion.p
            variants={item}
            className="mb-4 text-[16px] leading-7 tracking-tight text-pretty text-[#666666] md:text-lg dark:text-[#C0C0C0]"
          >
            A showcase of my continuous learning journey. Each certificate
            represents dedication to mastering modern web development and design
            skills, ensuring I deliver innovative, reliable, and future-ready
            digital solutions.
          </motion.p>
        </motion.section>
        {/* ./ header */}

        {/* content */}
        <main>
          {/* tab */}
          <motion.nav
            variants={container}
            initial="hidden"
            animate="visible"
            className="mx-auto flex border-b border-gray-400"
            aria-label="Certification categories"
          >
            <motion.button
              variants={item}
              className={`flex-1 p-3 text-center ${activeTab === "web" ? "font-semibold text-[#373737] transition-all duration-300 dark:text-white" : "text-[#666]"} cursor-pointer md:text-lg`}
              onClick={() => setActiveTab("web")}
            >
              Web Development
            </motion.button>
            <motion.button
              variants={item}
              className={`flex-1 p-3 text-center ${activeTab === "uiux" ? "font-semibold text-[#373737] transition-all duration-300 dark:text-white" : "text-[#666]"} cursor-pointer md:text-lg`}
              onClick={() => setActiveTab("uiux")}
            >
              UI/UX Design
            </motion.button>
          </motion.nav>
          {/* ./ tab */}

          {/* tab content */}
          <motion.section
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 flex-1 space-y-5 rounded-xl bg-[#F7F7F7] px-3 py-5 md:p-6 dark:bg-[#2C2C2C]"
          >
            {certificates[activeTab].map((cert, idx) => {
              return (
                <motion.article
                  variants={item}
                  className="flex items-end justify-between gap-1.5"
                  key={idx + 1}
                >
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-sm font-medium text-[#373737] md:text-base dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="certification-issued-provider">
                      {cert.issued}
                    </p>
                    <p className="certification-issued-provider">
                      {cert.provider}
                    </p>
                  </div>
                  <button
                    className="cursor-pointer rounded-md bg-white p-2 text-xs font-medium text-[#666] shadow-sm duration-300 hover:shadow-lg md:text-sm dark:bg-[#494848] dark:text-white"
                    onClick={() => setSelectedCert(cert)}
                  >
                    View Credential
                  </button>
                </motion.article>
              );
            })}
          </motion.section>
          {/* ./ tab content */}

          {/* modal / view certificate */}
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeIn" }}
                className="fixed inset-0 z-40 flex items-center justify-center bg-black/70"
                role="dialog"
                aria-modal="true"
                aria-labelledby="cert-title"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    y: 20,
                  }}
                  transition={{
                    duration: 0.18,
                    ease: "easeIn",
                  }}
                  className="w-[90%] max-w-3xl space-y-4 rounded-lg bg-white p-6 md:w-4/5 xl:w-3/4 xl:max-w-2xl"
                >
                  {/* title & close button */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center justify-between gap-4">
                      <PiMedalLight className="text-2xl text-violet-600" />
                      <h2
                        id="cert-title"
                        className="font-semibold text-[#373737]"
                      >
                        {selectedCert.title}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="cursor-pointer rounded-full text-2xl text-gray-700 transition-all duration-200 hover:bg-[#494848] hover:text-white"
                      aria-label="close-modal"
                    >
                      <IoClose />
                    </button>
                  </div>
                  {/* ./ title & close button */}

                  {/* certificate image */}
                  <figure>
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full rounded-lg border-8 border-gray-800"
                    />

                    <figcaption className="mt-4 space-y-0.5 text-center text-[#666666]">
                      <p>
                        Issued by{" "}
                        <span className="font-semibold">
                          {selectedCert.provider}
                        </span>
                      </p>
                      <p className="text-xs">{selectedCert.issued.slice(-4)}</p>
                    </figcaption>
                  </figure>
                  {/* ./ certificate image */}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* ./ modal / view certificate */}

          {/* ./ content */}
        </main>
      </section>
      {/* footer */}
      <footer>
        <ContactSection />
        <Footer />
      </footer>
      {/* ./ footer */}
    </>
  );
};

export default MyCertificate;
