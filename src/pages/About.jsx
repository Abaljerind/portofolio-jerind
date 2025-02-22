import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import GrayCircle from "../components/GrayCircle";
import MySkills from "../components/MySkills";

function About() {
  const skillList = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React JS",
    "Vite",
    "NPM",
    "Git & Github",
    "Figma",
  ];

  return (
    <>
      <div className="px-2">
        {/* header */}
        <div className="title-about flex items-center justify-between px-4 py-5 lg:px-6">
          <div className="flex items-center justify-between">
            <GrayCircle />
            <p className="text-lg font-semibold text-[#666666] md:text-xl dark:text-[#C0C0C0]">
              About
            </p>
          </div>
        </div>

        {/* profile */}
        <div className="profile flex flex-col px-4 lg:px-6">
          <h2 className="mb-4 text-3xl font-bold text-[#373737] md:mt-4 md:mb-6 md:text-4xl dark:text-white">
            It's Me Abal
          </h2>
          <p className="mb-10 text-justify text-[16px] leading-7 tracking-tight text-[#666666] md:text-lg dark:text-[#C0C0C0]">
            I'm AbalJerind, a frontend web developer currently residing in
            Jakarta, Indonesia. I have a deep passion for crafting responsive,
            user-friendly and accessible web interfaces. My main goal is to
            bridge the gap between design and functionality, ensuring that users
            have a smooth and enjoyable experience across all devices.
          </p>

          <div className="relative mb-10 overflow-hidden rounded-xl bg-white p-3 drop-shadow-sm md:mx-auto md:flex md:max-w-xs md:items-center md:justify-center dark:bg-[#373737]">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-20 -z-50 md:size-64"
            >
              <path
                fill="#5B5B68"
                d="M61.6,-21.9C69.9,5.3,59.6,36.6,36.9,53.7C14.2,70.9,-20.8,73.9,-42.1,58.3C-63.5,42.8,-71.1,8.6,-61.7,-20C-52.4,-48.7,-26.2,-71.8,0.2,-71.9C26.7,-72,53.4,-49,61.6,-21.9Z"
                transform="translate(100 100)"
              />
            </svg>
            <img
              src="../images/myself.png"
              alt="AbalJerind"
              className="h-auto w-full rounded-xl md:object-cover"
            />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-[#373737] dark:text-white">
            More About Me
          </h2>
          <p className="mb-5 text-justify text-[16px] leading-7 tracking-tight text-[#666666] md:text-lg dark:text-[#C0C0C0]">
            AbalJerind holds a bachelor's degree in Informatics Engineering from
            Gunadarma University in Depok, Indonesia, and has a relentless drive
            to stay up-to-date with the latest web technologies and best
            practices. He continuously expands his skills through online
            courses, hands-on projects, and continuous learning. His experience
            includes working with APIs, slicing Figma designs into pixel-perfect
            web interfaces, and ensuring cross-browser compatibility.
          </p>
          <p className="mb-10 text-justify text-[16px] leading-7 tracking-tight text-[#666666] md:text-lg dark:text-[#C0C0C0]">
            When he's not immersed in coding and development, he finds
            relaxation in playing video games and watching movies, both of which
            inspire his creativity and problem-solving skills. He firmly
            believes in maintaining a healthy work-life balance, ensuring he
            takes breaks to recharge and stay motivated. As part of his routine,
            he dedicates his weekends to regular exercise, which helps improve
            focus, reduce stress, and maintain overall well-being—allowing him
            to stay sharp and energized for new challenges in web development.
          </p>
        </div>

        <div className="skills lg:px-2">
          <h2 className="mb-4 px-4 text-3xl font-bold text-[#373737] dark:text-white">
            My Skills
          </h2>
          <p className="mb-5 px-4 text-justify text-[16px] leading-7 tracking-tight text-[#666666] md:text-lg lg:mb-7 dark:text-[#C0C0C0]">
            I continuously refine my skills through hands-on practice and
            real-world challenges. Take a look — I hope you’ll find them
            impressive!
          </p>
        </div>

        <div className="flex flex-wrap gap-2 rounded-xl bg-[#F7F7F7] p-4 dark:bg-[#2C2C2C]">
          {skillList.map((skill, index) => {
            return <MySkills key={index + 1} skill={skill} />;
          })}
        </div>
      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default About;
