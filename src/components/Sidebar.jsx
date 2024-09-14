import React, { useContext, useEffect, useRef } from "react";
import AppContext, { useTheme } from "../data/ContextApi";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DrawIcon from "@mui/icons-material/Draw";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  const {
    menuItems,
    setMenuItems,
    openSideBar,
    setOpenSideBar,
    showSideBar,
    setShowSideBar,
    isMobileView,
  } = useContext(AppContext);

  const { darkMode } = useTheme();
  const menuRef = useRef(null);

  function handleLinkClick(item) {
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((prevMenuItem) =>
        prevMenuItem.id === item.id
          ? { ...prevMenuItem, isSelected: true }
          : { ...prevMenuItem, isSelected: false }
      )
    );
  }

  function handleClick() {
    setOpenSideBar(!openSideBar);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isMobileView
      ) {
        setShowSideBar(false);
      }
    }

    if (showSideBar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSideBar, setShowSideBar, isMobileView]);

  return (
    <div
      ref={menuRef}
      className={`${openSideBar ? "w-80 p-6" : "w-24 p-4"} ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
      } ${
        showSideBar ? (isMobileView ? "fixed inset-0 z-50" : "block") : "hidden"
      } relative h-screen pt-12 transition-all duration-300 z-30 rounded-lg max-sm:hidden`}
    >
      <div
        onClick={handleClick}
        className="w-7 h-7 z-40 rounded-full absolute right-[-11px] top-24 flex items-center justify-center"
      >
        <div className="bg-sky-500 rounded-full w-[70%] h-[70%] flex items-center justify-center cursor-pointer">
          {openSideBar ? (
            <KeyboardArrowLeftIcon
              fontSize="small"
              className="text-white text-[12px]"
            />
          ) : (
            <KeyboardArrowRightIcon
              fontSize="small"
              className="text-white text-[12px]"
            />
          )}
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div
          className={`bg-sky-500 p-2 rounded-md w-12 h-12 flex items-center justify-center`}
        >
          <DrawIcon sx={{ fontSize: 28 }} className="text-white text-[28px]" />
        </div>
        {openSideBar && (
          <div className="flex gap-1 text-[23px] ">
            <span className={`font-bold text-sky-500`}>UI</span>
            <span
              className={`${
                darkMode ? " text-white" : " text-slate-600"
              } font-bold`}
            >
              Shelf
            </span>
          </div>
        )}
      </div>

      <div
        className={`mt-28 ${
          openSideBar ? "ml-3" : "ml-0"
        } flex flex-col gap-2 text-[15px]`}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleLinkClick(item)}
            className={`${
              item.isSelected
                ? "bg-sky-500 text-white"
                : "text-slate-500 hover:text-sky-500"
            } p-[7px] select-none cursor-pointer rounded-lg flex items-center gap-2 w-[65%]`}
          >
            {item.icon}
            {openSideBar && <span className="mt-0.5">{item.name}</span>}
          </div>
        ))}
      </div>

      <div className="p-[7px] hover:text-sky-500 select-none cursor-pointer mt-14 text-[15px] rounded-lg flex items-center gap-2 w-[80%] text-slate-500">
        <LogoutIcon />
        {openSideBar && <span className="mt-0.5">Log Out</span>}
      </div>
    </div>
  );
}

export default Sidebar;
