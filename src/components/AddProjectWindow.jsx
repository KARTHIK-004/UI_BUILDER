import React, { useEffect, useRef } from "react";
import { useAppContext, useTheme } from "../data/ContextApi";
import CategoryIcon from "@mui/icons-material/Category";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function AddProjectWindow() {
  const {
    isMobileView,
    openProjectWindow,
    setOpenProjectWindow,
    setOpenIconWindow,
    selectedIcon
  } = useAppContext();
  
  const { darkMode } = useTheme();

  const inputRef = useRef(null);

 

  useEffect(() => {
    inputRef.current?.focus();
  }, [openProjectWindow]);

  return (
    <div
      className={`${isMobileView ? "w-[90%]" : "w-[50%]"} ${
        darkMode
          ? "bg-slate-800 text-white border-slate-700"
          : "bg-white text-slate-700 border-slate-50"
      } border rounded-md shadow-md top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 z-50 ${
        openProjectWindow ? "fixed" : "hidden"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center pt-7 px-7">
        <div className="flex items-center gap-2">
          {/* Project Icon */}
          <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
            <CategoryIcon
              sx={{ fontSize: 17 }}
              className="text-sky-400 text-[12px]"
            />
          </div>
          {/* Category Header */}
          <span className="font-semibold text-lg">New Project</span>
        </div>
        <CloseIcon
          onClick={() => {
            // Close the window
            setOpenProjectWindow(false);
          }}
          sx={{ fontSize: 16 }}
          className={`text-${
            darkMode ? "white" : "slate-400"
          } text-[18px] cursor-pointer`}
        />
      </div>
      {/* Body */}
      <div className="flex flex-col gap-2 mt-11 px-7 w-full">
        <span className="text-[13px] font-medium">Project Name</span>
        <div className="flex gap-3 w-full">
          {/* Input */}
          <div className="flex flex-col w-full">
            <input
              ref={inputRef}
              placeholder="Enter Project Name..."
              className={`p-[10px] text-[12px] w-full rounded-md border outline-none ${
                darkMode
                  ? "bg-slate-700 text-white border-slate-600"
                  : "bg-white border-slate-300"
              }`}
            />
            {/* Error Message */}
            {/* <div className="flex items-center gap-2 mt-2">
              <ErrorOutlineIcon sx={{ fontSize: 14 }} className="text-red-500" />
              <span className="text-[12px] text-red-500 mt-[2px]">errorMessage</span>
            </div> */}
          </div>

          {/* Icon */}
          <div
            onClick={() => setOpenIconWindow(prevState => !prevState)}
            className="w-12 h-10 text-white  flex items-center justify-center bg-sky-500 rounded-lg cursor-pointer hover:bg-sky-600"
          >
            {selectedIcon?.icon}
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full mt-12 mb-10 flex gap-3 justify-end px-7 items-center">
        {/* Cancel Button */}
        <button
          onClick={() => {
            setOpenProjectWindow(false);
          }}
          className={`border text-[12px] p-2 px-6 rounded-md transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-black`}
        >
          Cancel
        </button>
        <button className="bg-sky-500 hover:bg-sky-600 text-white text-[12px] p-2 px-3 rounded-md transition-all">
          Add Project
        </button>
      </div>
    </div>
  );
}

export default AddProjectWindow;
