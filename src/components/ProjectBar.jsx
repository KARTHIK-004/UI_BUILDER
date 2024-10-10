import React from "react";
import Skeleton from "@mui/material/Skeleton";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import { AddOutlined } from "@mui/icons-material";
import { TextToIcon } from "../data/TextToIcon";
import { useAppContext, useTheme } from "../data/ContextApi";

function AllProjects() {
  const {
    allProjects,
    isLoading,
    setOpenProjectWindow,
    setShowComponentPage,
    setSelectedProject,
  } = useAppContext();
  const { darkMode } = useTheme();

  function projectClicked() {
    setShowComponentPage(true);
  }
  return (
    <div
      className={`w-full p-8 rounded-lg mt-4 shadow ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-700"
      }`}
    >
      {/* Header Section */}
      <span className="text-lg flex gap-2 justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-lg">All Projects</span>
          <span className="text-[13px] text-sky-600 cursor-pointer">More</span>
        </div>
        {/* New project button */}
        {!isLoading && allProjects.length > 0 && (
          <button
            onClick={() => setOpenProjectWindow(true)}
            className="bg-sky-500 text-white text-[12px] px-3 py-[2px] rounded-md"
          >
            <AddOutlined fontSize="small" />
            <span className="text-[13px] max-sm:hidden">New Project</span>
          </button>
        )}
      </span>

      {/* Showing the projects */}
      {isLoading ? (
        <div className="flex flex-wrap gap-4 mt-7 mb-2 max-sm:grid max-sm:grid-cols-1">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="w-52">
              <Skeleton variant="circular" width={70} height={70} />
              <Skeleton variant="text" width={120} height={20} />
              <Skeleton variant="text" width={100} height={15} />
            </div>
          ))}
        </div>
      ) : allProjects.length === 0 ? (
        <div className="p-1 gap-5 flex flex-col justify-center h-[200px] mt-[68px] mb-[34px] items-center">
          <AddModeratorIcon
            sx={{ fontSize: 80, color: darkMode ? "#6B7280" : "#D1D5DB" }}
          />
          <div>
            <h3 className="font-semibold text-[15px] mb-1 text-center">
              There are no projects yet...
            </h3>
            <p
              className={`${
                darkMode ? "text-slate-400" : "text-slate-500"
              } w-52 text-center text-[13px]`}
            >
              Please click below to add your first project.
            </p>
          </div>
          <button className="bg-sky-500 p-2 rounded-md text-white text-center text-[12px] px-7">
            Add New Project
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 mt-7 mb-2 max-sm:grid max-sm:grid-cols-1">
          {allProjects?.slice(0, 10).map((project, index) => (
            <div
              key={index}
              className={`w-52 rounded-md p-5 flex gap-2 justify-center flex-col items-center max-sm:w-full`}
            >
              {/* The Icon */}
              <div className="w-[70px] h-[70px] bg-sky-100 rounded-full flex items-center justify-center">
                {TextToIcon({ text: project.icon, size: "medium" })}
              </div>

              {/* Name and components count */}
              <div
                onClick={projectClicked}
                className="flex flex-col items-center justify-center "
              >
                <span className="font-semibold text-lg text-center cursor-pointer hover:text-sky-500 select-none">
                  {project.name}
                </span>
                <span className="text-[12px] text-slate-400 text-center">
                  {project.components.length} Components
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProjects;
