import React, { useState } from "react";
import AllIcons, { allIconsArray } from "../data/AllIconsData";
import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext, useTheme } from "../data/ContextApi";

function IconWindow() {
  const {
    isMobileView,
    openIconWindow,
    setOpenIconWindow,
    onUpdateIconSelected,
  } = useAppContext();
  const { darkMode } = useTheme();
  const [allIconsState, setAllIconsState] = useState(allIconsArray);

  return (
    <div
      className={`${isMobileView ? "w-[80%]" : "w-[50%]"} ${
        openIconWindow ? "fixed" : "hidden"
      }  ${
        darkMode
          ? "bg-slate-800 text-white border-slate-700"
          : "bg-white text-slate-700 border-slate-50"
      } h-[490px] shadow-md left-1/2 top-28 rounded-lg -translate-x-1/2 z-[70]`}
    >
      {/* Header */}
      <div className="flex justify-between items-center pt-7 px-7 mb-8">
        <div className="flex items-center gap-2">
          {/* Category Icon */}
          <div
            className={`w-[30px] h-[30px] ${
              darkMode ? "bg-slate-600" : "bg-sky-200"
            } rounded-full flex items-center justify-center`}
          >
            <AppsIcon
              sx={{ fontSize: 17 }}
              className={`${
                darkMode ? "text-sky-300" : "text-sky-400"
              } text-[17px]`}
            />
          </div>
          {/* Category Header */}
          <span className="font-semibold text-lg">Project Icons</span>
        </div>
        <CloseIcon
          onClick={() => setOpenIconWindow(false)}
          className="text-slate-400 text-[18px] cursor-pointer"
        />
      </div>
      {/* Message */}
      <div
        className={`mx-7 w-[80%] text-[12px] ${
          darkMode ? "text-slate-300" : "text-slate-400"
        }`}
      >
        {`Please select the icons you'd like to use from the collection below:`}
      </div>
      {/* All Icons Area */}
      <div className="w-full flex flex-col items-center mt-3">
        <div
          className={`border ${
            darkMode
              ? "border-slate-600 bg-slate-700"
              : "border-slate-100 bg-slate-100"
          } w-[92%] h-[280px] overflow-auto rounded-md`}
        >
          <AllIcons
            allIconsState={allIconsState}
            setAllIconsState={setAllIconsState}
          />
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-6 px-7 text-[12px]">
        <button
          onClick={() => setOpenIconWindow(false)}
          className={`px-4 py-2 border rounded-md ${
            darkMode
              ? "text-slate-300 border-slate-600 hover:bg-slate-600"
              : "text-slate-500 border-slate-200 hover:bg-slate-200"
          }`}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onUpdateIconSelected(
              allIconsState.filter((icon) => icon.isSelected)[0]
            );
            setOpenIconWindow(false);
          }}
          className={`px-4 py-2 rounded-md ${
            darkMode
              ? "bg-sky-600 hover:bg-sky-700"
              : "bg-sky-500 text-white hover:bg-sky-600"
          }`}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default IconWindow;
