import { Link } from "react-router-dom";

export default function HireMe() {
  return (
    <Link to="/contact">
      <button className="flex cursor-pointer items-center rounded-md bg-[#141414] p-2 text-xs font-bold text-white">
        <img src="../images/Add.svg" alt="Add Icon" className="size-5" />
        <span className="pl-1">Hire Me</span>
      </button>
    </Link>
  );
}
