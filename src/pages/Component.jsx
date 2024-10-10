import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAppContext, useTheme } from "../data/ContextApi";
import TopNav from "../components/TopNav";
import ComponentBar from "../components/ComponentBar";

function Component() {
  const {
    setShowComponentPage,
    showComponentPage,
    setShowSideBar,
    showSideBar,
    setSelectedProject,
    selectedProject,
    setOpenComponentEditor,
    mainSearchQuery,
    setMainSearchQuery,
  } = useAppContext();
  return (
    <div className="w-full min-h-screen p-3 px-4 pt-5 bg-slate-50">
      <TopNav />
      {selectedProject?.components.length === 0 && (
        <div className=" p-1 gap-5 flex flex-col   justify-center h-[500px] mt-[68px] mb-[34px] items-center">
          {selectedProject?.icon !== undefined && (
            <div className="w-28 h-28 bg-slate-200 rounded-full flex items-center justify-center">
              {TextToIcon({
                text: selectedProject?.icon,
                fontSize: 60,
                className: "text-slate-100",
              })}
            </div>
          )}
          {/* <CategoryIcon sx={{ fontSize: 150 }} className="text-slate-200" /> */}
          <div className=" flex flex-col    ">
            <h3 className="font-semibold text-[19px] mb-1 text-center ">{`There are no components Yet...`}</h3>
            <p className="text-gray-400   text-center text-[14px]">
              Please click below to add your first component.
            </p>
          </div>
          <button
            onClick={() => setOpenComponentEditor(true)}
            className="flex gap-1 items-center   bg-sky-500 p-2 rounded-md 
      text-white text-center text-[12px] px-3 pr-5"
          >
            <AddIcon />
            <span className="text-sm">Add new component</span>
          </button>
        </div>
      )}
      <ComponentBar />
    </div>
  );
}

export default Component;
