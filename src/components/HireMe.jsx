import { Link } from "react-router-dom";

export default function HireMe() {
  return (
    <div className="flex h-[47px] w-[98px] items-center justify-center rounded-lg transition duration-500 hover:bg-[#EBEBEB] md:h-[52px] md:w-[108px] dark:hover:bg-[#1C1C1C]">
      <Link to="/contact">
        <button className="flex cursor-pointer items-center rounded-md bg-[#141414] p-2 text-xs font-bold text-white md:text-sm dark:bg-[#383838]">
          <img src="../images/Add.svg" alt="Add Icon" className="size-5" />
          <span className="pl-1">Hire Me</span>
        </button>
      </Link>
    </div>
  );
}
