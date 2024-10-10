import React, { useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AddOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppContext, useTheme } from "../data/ContextApi";

const TopNav = ({ searchInput, setSearchInput }) => {
  const {
    setShowComponentPage,
    showComponentPage,
    setShowSideBar,
    setSelectedProject,
    selectedProject,
    setOpenComponentEditor,
    mainSearchQuery,
    setMainSearchQuery,
  } = useAppContext();
  const { darkMode } = useTheme();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [showComponentPage]);

  useEffect(() => {
    if (showComponentPage && mainSearchQuery !== "") {
      setSearchInput(mainSearchQuery);
    }
  }, [showComponentPage, mainSearchQuery, setSearchInput]);

  return (
    <div
      className={`w-full p-3 rounded-lg px-6 flex justify-between items-center relative ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-700"
      }`}
    >
      <div className="flex gap-5 items-center">
        {/* Back Button */}
        <div
          onClick={() => {
            setShowComponentPage(false);
          }}
          className="border mt-[2px] p-[2px] text-slate-400 flex h-7 gap-1 px-2 items-center justify-center rounded-md text-[11px] cursor-pointer"
        >
          <ArrowBackIcon sx={{ fontSize: 11 }} className=" text-[11px]" />
          <span className="max-sm:hidden">Back</span>
        </div>

        {/* Category Title and Icon */}
        <div className="flex gap-2 items-center">
          <div className="flex flex-col">
            <span className="font-bold text-xl">{selectedProject?.name}</span>
            <span className="text-slate-400 text-[11px]">
              {selectedProject?.components.length}10 Components
            </span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative p-[8px] text-[13px] w-[34%] flex px-[15px] h-13 rounded-3xl bg-slate-100 items-center gap-1">
        <SearchIcon className="text-slate-400 text-[19px]" />
        <input
          value={searchInput}
          ref={inputRef}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search a component..."
          className="bg-slate-100 outline-none font-light text-[12px] w-full"
        />
        {/* Close Icon */}
        {searchInput !== "" && (
          <div
            onClick={() => {
              setSearchInput("");
              inputRef.current?.focus();
            }}
            className="absolute right-2 top-[10px] cursor-pointer w-5 h-5 flex justify-center items-center bg-slate-300 rounded-full"
          >
            <CloseIcon
              sx={{ fontSize: 14 }}
              className="text-slate-400 text-[14px]"
            />
          </div>
        )}
      </div>

      {/* Add Component Button */}
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setOpenComponentEditor(true)}
          className="bg-sky-500 text-[12px] h-[33px] text-white px-3 rounded-md"
        >
          <AddOutlined sx={{ fontSize: 16 }} />
          <span className="max-sm:hidden">Component</span>
        </button>

        <div className="hidden max-sm:block">
          <MenuIcon
            onClick={() => setShowSideBar(true)}
            className="text-slate-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
