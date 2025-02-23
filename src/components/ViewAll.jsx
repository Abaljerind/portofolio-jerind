import { Link } from "react-router-dom";

export default function ViewAll() {
  return (
    <Link
      to={"/project"}
      className="flex h-[46px] w-[101px] items-center justify-center rounded-lg transition duration-500 hover:bg-[#EBEBEB] dark:hover:bg-[#1C1C1C]"
    >
      <button className="flex w-full scale-90 cursor-pointer items-center justify-between rounded-lg border-2 border-[#EBEBEB] bg-white p-2.5 md:text-lg dark:border-none dark:bg-[#373737]">
        <span className="mr-2 text-sm font-bold text-[#373737] dark:text-white">
          View All
        </span>
        <img
          src="../images/RightArrow.svg"
          alt="icon right arrow"
          className="size-[14px] scale-75 dark:brightness-0 dark:invert"
        />
      </button>
    </Link>
  );
}
