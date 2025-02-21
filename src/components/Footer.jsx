import GrayCircle from "./GrayCircle";
import SocialMediaList from "./SocialMediaList";

export default function Footer() {
  const socialMediaList = [
    {
      name: "FrontendMentor",
      img: "../images/frontendmentor.png",
      href: "https://www.frontendmentor.io/profile/Abaljerind",
    },
    {
      name: "LinkedIn",
      img: "../images/Linkedin.svg",
      href: "https://www.linkedin.com/in/abal-jerind-baa90519a/",
    },
    {
      name: "Github",
      img: "../images/Github.svg",
      href: "https://github.com/Abaljerind",
    },
  ];

  return (
    <footer className="mt-12 px-2">
      <div className="social-media mb-2 flex justify-between rounded-xl bg-[#F7F7F7] px-2 py-4 dark:bg-[#2C2C2C]">
        <div className="left-side flex items-center pl-2">
          <GrayCircle />
          <p className="text-lg font-semibold text-[#666666] dark:text-[#C0C0C0]">
            Follow Me
          </p>
        </div>
        <div className="right-side flex items-center justify-center gap-1">
          {socialMediaList.map((social, index) => {
            return <SocialMediaList social={social} key={index + 1} />;
          })}
        </div>
      </div>

      <div className="copyright rounded-xl bg-[#F7F7F7] px-4 py-6 dark:bg-[#2C2C2C]">
        <p className="text-center text-sm font-medium text-[#787878] dark:text-[#C0C0C0]">
          &copy; 2025{" "}
          <a
            href="https://www.linkedin.com/in/abal-jerind-baa90519a/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#444444] underline dark:text-white"
          >
            AbalJerind
          </a>{" "}
          - Build with{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#444444] underline dark:text-white"
          >
            React
          </a>{" "}
          &{" "}
          <a
            href="https://vite.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#444444] underline dark:text-white"
          >
            Vite
          </a>
        </p>
      </div>
    </footer>
  );
}
