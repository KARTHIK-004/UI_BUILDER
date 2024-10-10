import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useAppContext, useTheme } from "../data/ContextApi";
import { Skeleton } from "@mui/material";

function FavoriteBar() {
  const { allFavoriteComponents, isLoading } = useAppContext();
  const { darkMode } = useTheme();

  // Function to format date
  const formatDate = (date) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

    return formattedDate;
  };

  return (
    <div
      className={`${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-700"
      } w-full p-8 rounded-lg mt-4 shadow`}
    >
      {/* Main Header */}
      <div className="flex justify-between">
        <span className="font-bold text-lg">Favorite Components</span>
        {/* Button */}
        <button
          disabled={allFavoriteComponents.length === 0}
          style={{ opacity: allFavoriteComponents.length === 0 ? 0.5 : 1 }}
          className="bg-sky-500 flex gap-2 items-center text-white text-[12px] p-2 px-3 rounded-md"
        >
          <VisibilityIcon fontSize="small" />
          <span className="max-sm:hidden">View All</span>
        </button>
      </div>

      {/* Header's List */}
      <div className="grid grid-cols-4 mt-6 mb-4 text-sm items-center text-slate-400 px-4 max-sm:grid-cols-2">
        <span>Component Name</span>
        <span className="max-sm:hidden">Created At</span>
        <span className="max-sm:hidden">Project</span>
        <span>Actions</span>
      </div>

      {/* Components */}
      {isLoading ? (
        <div className="px-4 flex flex-col gap-3 mt-1">
          {/* Skeleton for each row */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 items-center rounded-lg p-2 max-sm:grid-cols-2"
            >
              {/* Component Name Skeleton */}
              <Skeleton variant="text" width={100} height={20} />

              {/* Date Skeleton */}
              <Skeleton
                variant="text"
                width={120}
                height={20}
                className="max-sm:hidden"
              />

              {/* Project Skeleton */}
              <Skeleton
                variant="rectangular"
                width={100}
                height={30}
                className="max-sm:hidden"
              />

              {/* Actions Skeleton */}
              <div className="flex gap-2">
                <Skeleton variant="circular" width={28} height={28} />
                <Skeleton variant="circular" width={28} height={28} />
              </div>
            </div>
          ))}
        </div>
      ) : allFavoriteComponents.length === 0 ? (
        <div className="flex justify-center items-center mt-16 mb-8 text-slate-400 dark:text-slate-500 text-sm">
          No favorite components set yet...
        </div>
      ) : (
        <div className="px-4 flex flex-col gap-1 mt-1">
          {allFavoriteComponents.slice(0, 5).map((component, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 text-sm items-center rounded-lg p-2 max-sm:grid-cols-2"
            >
              {/* Component Name */}
              <span className="hover:text-sky-500 cursor-pointer">
                {component.name}
              </span>

              {/* Component Date */}
              <span className="max-sm:hidden">
                {formatDate(component.createdAt)}
              </span>

              {/* Project */}
              <span className="justify-self-start max-sm:hidden">
                <span className="inline-block rounded-2xl bg-sky-500 text-white text-[12px] px-4 py-1 whitespace-nowrap">
                  {component.projectName}
                </span>
              </span>

              {/* Actions Buttons */}
              <div className="flex gap-2">
                {/* Edit Button */}
                <div
                  className="bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center hover:bg-sky-600 cursor-pointer"
                  aria-label="Edit"
                >
                  <EditIcon
                    fontSize="small"
                    className="text-white text-[13px]"
                  />
                </div>

                {/* Delete Button */}
                <div
                  className="bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center hover:bg-sky-600 cursor-pointer"
                  aria-label="Delete"
                >
                  <DeleteIcon
                    fontSize="small"
                    className="text-white text-[13px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteBar;
