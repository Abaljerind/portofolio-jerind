export default function SocialMediaList({ social }) {
  return (
    <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition duration-500 hover:bg-[#EBEBEB] dark:duration-initial dark:hover:bg-[#1C1C1C]">
      <a
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E9E9] bg-white dark:border dark:border-[#212121] dark:bg-[#212121] dark:hover:border dark:hover:border-white/20"
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={social.img}
          alt={social.name}
          className={`size-4 dark:brightness-0 dark:invert ${social.name === "FrontendMentor" ? "dark:brightness-100 dark:invert-0" : ""} `}
        />
      </a>
    </div>
  );
}
