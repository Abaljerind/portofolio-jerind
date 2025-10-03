import { GoHome } from "react-icons/go";
import { PiCertificate, PiUser } from "react-icons/pi";
import { RiCodeBoxFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

export default function NavItems() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/", icon: <GoHome /> },
    { name: "About", path: "/about", icon: <PiUser /> },
    { name: "Project", path: "/project", icon: <RiCodeBoxFill /> },
    { name: "Certificate", path: "/certificate", icon: <PiCertificate /> },
  ];

  return (
    <ul className="flex justify-between md:justify-start md:gap-6 lg:gap-8">
      {menuItems.map((nav, index) => {
        return (
          <li className="group relative cursor-pointer" key={index + 1}>
            <Link to={nav.path}>
              <small className="absolute -top-6 left-[50%] w-fit -translate-x-[50%] rounded-full bg-[#373737] px-2 py-0.5 text-center text-xs text-white opacity-0 transition-all delay-200 duration-300 group-hover:opacity-100">
                {nav.name}
              </small>
              <span
                className={`text-3xl ${location.pathname === nav.path ? "text-[#373737] opacity-100 dark:text-white" : "text-[#373737] opacity-50 dark:text-white"} transition-all duration-300 group-hover:opacity-100 dark:brightness-0 dark:invert`}
              >
                {nav.icon}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
