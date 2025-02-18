import GrayCircle from "../components/GrayCircle";
import GreenCircle from "../components/GreenCircle";
import Buttons from "../components/Buttons";
import ViewAll from "../components/ViewAll";
import ProjectCards from "../components/ProjectCards";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      {/* header */}
      <div className="title-biodata flex items-center justify-between px-6 py-5">
        <div className="flex items-center justify-between">
          <GrayCircle />
          <p className="text-lg font-semibold text-[#666666]">
            Frontend Developer
          </p>
        </div>
        <GreenCircle />
      </div>

      <div className="biodata mt-2">
        <div className="selfie flex items-center justify-center">
          <div className="outer-circle flex h-[165px] w-[165px] items-center justify-center rounded-full bg-[#F7F7F7]">
            <img
              src="../images/avataaars.png"
              alt="avatar image"
              className="h-36 w-36 rounded-full bg-[#D8D8DA]"
            />
          </div>
        </div>

        <div className="profile my-6 flex flex-col items-center justify-center">
          <h1 className="mb-4 text-3xl font-bold text-[#373737]">
            I'm AbalJerind
          </h1>
          <p className="px-3 text-center text-[16px] leading-7 font-medium break-words text-[#6D6D6D]">
            Frontend developer from Jakarta, ID. Currently building interfaces
            at Home.
          </p>
        </div>

        <Buttons />
      </div>

      {/* projects */}
      <div className="mt-12 px-2">
        <div className="rounded-xl bg-[#F7F7F7] px-2 py-4">
          <div className="title-project flex justify-between">
            <div className="flex items-center justify-center pl-2">
              <GrayCircle />
              <p className="text-lg font-semibold text-[#666666]">Projects</p>
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
