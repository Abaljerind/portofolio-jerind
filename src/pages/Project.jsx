import ContactSection from "../components/ContactSection";
import GrayCircle from "../components/GrayCircle";
import ProjectCards from "../components/ProjectCards";
import Footer from "../components/Footer";

function Project() {
  return (
    <>
      <div className="lg:px-2">
        <div className="title-about flex items-center justify-between px-6 py-5">
          <div className="flex items-center justify-between">
            <GrayCircle />
            <p className="text-lg font-semibold text-[#666666] md:text-xl dark:text-[#C0C0C0]">
              Projects
            </p>
          </div>
        </div>

        <div className="my-projects flex flex-col px-6">
          <h2 className="mb-4 text-3xl font-bold text-[#373737] md:mt-4 md:mb-6 md:text-4xl dark:text-white">
            My Works
          </h2>
          <p className="mb-10 text-[16px] leading-7 tracking-tight text-[#666666] md:text-lg dark:text-[#C0C0C0]">
            Explore my portfolio, where clean code meets seamless design. I
            craft responsive and user-friendly web experiences that engage and
            inspire.
          </p>
        </div>
      </div>

      <div className="p-2">
        <div className="rounded-xl bg-[#F7F7F7] p-2 dark:bg-[#2C2C2C]">
          <ProjectCards />
        </div>
      </div>
      <ContactSection />
      <Footer />
    </>
  );
}

export default Project;
