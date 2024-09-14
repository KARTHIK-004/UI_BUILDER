import React, { useEffect, useRef } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useTheme, useAppContext } from "../data/ContextApi";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function TopBar() {
  const { user } = useUser();
  const { darkMode, toggleTheme } = useTheme();
  const { setShowSideBar, setIsMobileView, showSearchBar, setShowSearchBar } =
    useAppContext();

  const searchBarRef = useRef(null);

  // Toggle the search bar on click
  const handleClickedSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  // Handle click outside to close the search bar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowSearchBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSearchBar]);

  // Handle window resize to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileView]);

  return (
    <div
      className={`w-full p-3 rounded-lg px-6 flex justify-between items-center relative ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-700"
      }`}
    >
      {/* Text Area */}
      <div onClick={() => setShowSideBar(true)} className="flex flex-col">
        <div className="hidden max-sm:block">
          <MenuIcon className="text-slate-500 cursor-pointer" />
        </div>

        <div className="flex flex-col max-sm:hidden">
          <span className="font-bold">Welcome Back, {user?.lastName}</span>
          <span className="text-slate-400 text-[11px] font-light">
            We are happy to see you again
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div
        ref={searchBarRef}
        className={`w-1/3 max-sm:w-[60%] p-2 flex gap-1 items-center justify-center rounded-md ${
          darkMode ? "bg-slate-700" : "bg-slate-100"
        } cursor-pointer transition-all duration-300 ease-in-out`}
        onClick={handleClickedSearchBar}
      >
        {showSearchBar ? (
          <div className="px-2 flex justify-between items-center w-full">
            <input
              className="w-full bg-transparent outline-none text-[13px] placeholder:text-slate-400"
              placeholder="Search a component..."
            />
            <CloseRoundedIcon
              fontSize="small"
              className="text-slate-400 text-[10px] cursor-pointer"
              onClick={() => setShowSearchBar(false)}
            />
          </div>
        ) : (
          <div className="flex items-center gap-1 justify-center w-full text-slate-400">
            <SearchIcon fontSize="small" />
            <span className="text-sm">Search</span>
          </div>
        )}
      </div>

      {/* Theme Switch & User Profile */}
      <div className="flex gap-2 items-center">
        {/* Theme Switch */}
        <button onClick={toggleTheme}>
          {darkMode ? (
            <LightModeIcon className="text-sky-500" />
          ) : (
            <DarkModeIcon className="text-sky-500" />
          )}
        </button>

        {/* Profile */}
        <div className="flex gap-3 items-center">
          <div className="w-9 h-9 rounded-full flex items-center justify-center">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
