import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Navigates } from "./data";
import { BiHomeAlt2 } from "react-icons/bi";
import ToastConfig from "./toastConfig/ToastConfig";
import ThemeBtn from "./components/ThemeBtn";
const Layout = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  

  return (
    <div className="relative w-full h-full bg-background  text-textcolor">
      <div className="hidden  sm:flex w-full p-3 items-center justify-center">
        <div className="w-fit h-[50px] bg-Navbackground ring-1 ring-Navborder rounded-sm  text-textcolor p-4 hidden  sm:flex sm:items-center sm:gap-10  ">
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
        <div className="absolute right-10 hidden sm:flex">
          <ThemeBtn id={1} />
        </div>
      </div>

      <Navbar
        navbar={navbar}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <ToastConfig />
      <div className="pt-0 sm:pt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
