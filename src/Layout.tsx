import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Navigates } from "./data";
import { BiHomeAlt2 } from "react-icons/bi";
import { CiDark, CiLight } from "react-icons/ci";
import ToastConfig from "./toastConfig/ToastConfig";
const Layout = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarktheme, setIsDarkTheme] = useState(false);
  const [active, setActive] = useState(0);
  const { pathname } = useLocation();
  useEffect(() => {
    let index = Navigates.findIndex((el) => el.path == pathname);
    setActive(index);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleScroll = () => {
    if (window.scrollY > 100 && !isMenuOpen) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    if (!isMenuOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const handleChangeTheme = () => {
    const theme = !isDarktheme;
    document.body.setAttribute("data-theme", `${theme ? "dark" : "light"}`);
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div className="relative bg-background overflow-hidden text-textcolor">
      <div className="hidden sm:flex absolute w-full items-center pt-4 justify-center">
        <div className="w-fit h-[50px] bg-Navbackground ring-1 ring-Navborder  rounded-sm  text-textcolor p-4 hidden  sm:flex sm:items-center sm:gap-10  ">
          {!(pathname == "/") && (
            <Link to={"/"} key={"home"}>
              <BiHomeAlt2 className="text-xl" />
            </Link>
          )}
          {Navigates?.map((el, i) => (
            <Link to={el.path} key={i}>
              <span
                onClick={() => setActive(i)}
                className={`relative text-textcolor cursor-pointer after:absolute after:top-full after:left-1/2 after:mt-1 after:w-1.5 after:h-1.5 after:rounded-full after:bg-textcolor after:scale-0 ${
                  active == i ? "after:scale-100" : ""
                } hover:after:scale-100  after:transform after:transition-transform 
              `}
                key={i}
              >
                {el.name}
              </span>
            </Link>
          ))}
        </div>
        <input
          type="checkbox"
          id="theme"
          className="peer"
          hidden
          checked={isDarktheme}
          onChange={handleChangeTheme}
        />
        <label
          htmlFor="theme"
          className="hidden cursor-pointer sm:flex justify-self-end absolute after:transition-all duration-300 peer-checked:after:translate-x-full right-40 text-xl bg-Navbackground ring-1 ring-Navborder  w-16 h-8 rounded-full items-center justify-between px-2 py-2 after:content-[''] after:absolute after:w-6 after:h-6 after:bg-[#827EFC] after:rounded-full"
        >
          <CiLight /> <CiDark />
        </label>
      </div>

      <Navbar
        navbar={navbar}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <ToastConfig />
      <div className="pt-0 sm:pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
