import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export default function HireMe() {
  return (
    <Link to="/contact">
      <button className="flex cursor-pointer items-center rounded-lg bg-[#141414] p-2 text-xs font-bold text-white duration-300 hover:shadow-xl md:text-sm dark:bg-[#383838]">
        <IoIosAddCircleOutline className="text-lg" />
        <span className="pl-1">Hire Me</span>
      </button>
    </Link>
  );
}
