import { useState } from "react";
import NavItems from "./NavItems";
import HireMe from "./HireMe";
// cari cara untuk menambahkan dark mode dengan tailwindcss
// perlu ubah seluruh style html didalam project ini untuk dark mode
// saat di dark mode, bg color dari tag small untuk text "light mode" nya perlu diganti, cari tau warna yang dipake di tab Elements, section Styles yang bawah.

export default function NavBar() {
  document.body.style.backgroundColor = "#EDEDED";

  const [darkModes, setDarkModes] = useState(false);

  return (
    <>
      <div className="flex h-16 items-center gap-8 rounded-lg bg-white px-4 shadow-md shadow-black/10">
        <div className="left-side w-full">
          <NavItems />
        </div>

        <div className="right-side w-full">
          <ul className="flex items-center justify-between">
            <li
              className="group relative cursor-pointer"
              onClick={() => setDarkModes(!darkModes)}
            >
              <small className="absolute -top-6 left-[50%] w-20 -translate-x-[50%] rounded-full bg-[#373737] px-1 py-0.5 text-center text-xs text-white opacity-0 transition-all delay-200 duration-300 group-hover:opacity-100">
                {darkModes ? "Light Mode" : "Dark Mode"}
              </small>
              <img
                src={darkModes ? "../images/Sun.svg" : "../images/Moon.svg"}
                alt={darkModes ? "Dark Mode" : "Light Mode"}
                className="size-7 opacity-50 transition-all duration-300 group-hover:opacity-100"
              />
            </li>
            <li>
              <HireMe />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
