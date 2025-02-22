import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="mt-2 rounded-2xl bg-white py-2 shadow-sm lg:mt-4 dark:border dark:border-[#3D3D3D] dark:bg-[#212121]">
        <Outlet />
      </div>
    </>
  );
}
