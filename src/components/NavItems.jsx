import { Link, useLocation } from "react-router-dom";

export default function NavItems() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/", icon: "../images/Home.svg" },
    { name: "About", path: "/about", icon: "../images/User.svg" },
    { name: "Project", path: "/project", icon: "../images/Folder.svg" },
  ];

  return (
    <ul className="flex justify-between">
      {menuItems.map((nav, index) => {
        return (
          <li className="group relative cursor-pointer" key={index + 1}>
            <Link to={nav.path}>
              <small className="absolute -top-6 left-[50%] w-fit -translate-x-[50%] rounded-full bg-[#373737] px-2 py-0.5 text-center text-xs text-white opacity-0 transition-all delay-200 duration-300 group-hover:opacity-100">
                {nav.name}
              </small>
              <img
                src={nav.icon}
                alt={`${nav.name} Icon`}
                className={`size-7 ${location.pathname === nav.path ? "opacity-100" : "opacity-50"} transition-all duration-300 group-hover:opacity-100`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
