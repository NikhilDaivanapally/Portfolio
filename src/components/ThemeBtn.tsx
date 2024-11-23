import { useEffect, useContext } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { DataContext } from "../context";

interface ThemeInterface {
  id: number;
}

const ThemeBtn = ({ id }: ThemeInterface) => {
  // Use context with proper typing
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("ThemeBtn must be used within a DataContext.Provider");
  }
  const { isDarkTheme, setIsDarkTheme } = context;

  useEffect(() => {
    // Set the initial theme on page load
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const handleChangeTheme = () => {
    // Toggle the theme and save to localStorage
    const theme = !isDarkTheme;
    document.body.setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem("theme", theme ? "dark" : "light");
    setIsDarkTheme(theme);
  };

  return (
    <div>
      <input
        type="checkbox"
        id={`theme${id}`}
        className="peer cursor-pointer"
        hidden
        checked={isDarkTheme}
        onChange={handleChangeTheme}
      />
      <label
        htmlFor={`theme${id}`}
        className={`cursor-pointer flex after:transition-all duration-300 ${
          isDarkTheme ? "after:translate-x-full" : ""
        } right-40 text-xl bg-Navbackground ring-1 ring-Navborder w-16 h-8 rounded-full items-center justify-between px-2 py-2 after:content-[''] after:absolute after:w-6 after:h-6 after:bg-[#827EFC] after:rounded-full`}
      >
        <CiLight /> <CiDark />
      </label>
    </div>
  );
};

export default ThemeBtn;
