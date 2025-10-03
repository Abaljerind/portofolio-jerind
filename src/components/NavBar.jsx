import { useEffect, useState } from "react";
import NavItems from "./NavItems";
import HireMe from "./HireMe";

export default function NavBar() {
  // Cek preferensi mode gelap dari localStorage atau OS
  function getInitialTheme() {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // State untuk menyimpan mode gelap (true = dark, false = light)
  const [darkModes, setDarkModes] = useState(getInitialTheme);

  // useEffect: Tambahkan/hapus kelas "dark" ke elemen <html>
  useEffect(() => {
    if (darkModes) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.style.backgroundColor = "#161616";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.style.backgroundColor = "#EDEDED";
    }
  }, [darkModes]);

  return (
    <>
      <div className="flex h-16 items-center gap-1 rounded-xl bg-white/75 pr-[10px] pl-4 shadow-lg shadow-black/5 lg:pl-6 dark:border dark:border-[#3D3D3D] dark:bg-[#212121]/75">
        <div className="left-side w-full">
          <NavItems />
        </div>

        <div className="right-side w-full">
          <ul className="flex items-center justify-end gap-4 md:gap-6 lg:justify-end lg:gap-8">
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
                className="size-7 opacity-50 transition-all duration-300 group-hover:opacity-100 dark:brightness-0 dark:invert"
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
