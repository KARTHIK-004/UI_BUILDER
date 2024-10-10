import React, { useEffect, useRef, useState } from "react";
import { useAppContext, useTheme } from "../data/ContextApi";
import CategoryIcon from "@mui/icons-material/Category";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import IconWindow from "./IconWindow";
import { TextToIcon } from "../data/TextToIcon";
import { useUser } from "@clerk/clerk-react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

function AddProjectWindow() {
  const {
    isMobileView,
    selectedIcon,
    setOpenIconWindow,
    allProjects,
    setAllProjects,
    openIconWindow,
    selectedProject,
    setSelectedProject,
    openProjectWindow,
    setOpenProjectWindow,
    setSelectedIcon,
  } = useAppContext();
  const [errorMessage, setErrorMessage] = useState("");
  const [projectName, setProjectName] = useState("");
  const { darkMode } = useTheme();
  const inputRef = useRef(null);
  const { user } = useUser();

  useEffect(() => {
    if (openProjectWindow) inputRef.current?.focus();
  }, [openProjectWindow]);

  // This useEffect handles the input focus and error message
  useEffect(() => {
    if (!selectedProject) {
      setProjectName("");

      const iconObject = {
        icon: TextToIcon({
          text: "CodeIcon",
          className: "text-white",
        }),
        name: "CodeIcon",
      };

      setSelectedIcon(iconObject);
    } else {
      setProjectName(selectedProject.name);
      const iconObject = {
        icon: TextToIcon({
          text: selectedProject.icon,
          className: "text-white",
        }),
        name: selectedProject.icon,
      };

      setSelectedIcon(iconObject);
    }

    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    setTimeout(focusInput, 0);
    setErrorMessage("");
  }, [openProjectWindow]);

  // This function handles the input update
  const handleInputUpdate = (e) => {
    setErrorMessage("");
    setProjectName(e.target.value);
  };

  // This function adds a new project
  const addNewProject = async () => {
    if (projectName.trim() === "") {
      setErrorMessage("Project name cannot be empty");
      inputRef.current?.focus();
      return;
    }

    if (
      allProjects.find(
        (project) => project.name.toLowerCase() === projectName.toLowerCase()
      )
    ) {
      setErrorMessage("Project name already exists");
      inputRef.current?.focus();
      return;
    }

    const newProject = {
      id: uuidv4(),
      clerkUserId: user?.id,
      name: projectName,
      icon: selectedIcon.name,
      createAt: new Date().toISOString(),
      components: [],
    };
    try {
      setAllProjects([...allProjects, newProject]);
      toast.success("Project added successfully");
      setOpenProjectWindow(false);
    } catch (error) {
      toast.error("Failed to add Project");
      return;
    }
  };

  const editTheProject = async () => {
    if (projectName.trim() === "") {
      setErrorMessage("Project name cannot be empty");
      inputRef.current?.focus();
      return;
    }

    if (!selectedProject) {
      toast.error("No project selected for editing");
      return;
    }
  };
  return (
    <>
      <div
        className={`${isMobileView ? "w-[80%]" : "w-[50%]"} ${
          darkMode
            ? "bg-slate-800 text-white border-slate-700"
            : "bg-white text-slate-700 border-slate-50"
        } border rounded-md shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ${
          openProjectWindow ? "block" : "hidden"
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
            onClick={() => setOpenProjectWindow(false)}
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
                value={projectName}
                onChange={handleInputUpdate}
                placeholder="Enter Project Name..."
                ref={inputRef}
                className={`p-[10px] text-[12px] w-full rounded-md border outline-none ${
                  darkMode
                    ? "bg-slate-700 text-white border-slate-600"
                    : "bg-white border-slate-300"
                }`}
              />
              {/* Error Message */}
              <div
                className={`flex items-center gap-2 mt-2 ${
                  errorMessage ? "" : "hidden"
                }`}
              >
                <ErrorOutlineIcon
                  sx={{ fontSize: 14 }}
                  className="text-red-500"
                />
                <span className="text-[12px] text-red-500 mt-[2px]">
                  {errorMessage}
                </span>
              </div>
            </div>

            {/* Icon */}
            <div
              onClick={() => setOpenIconWindow((prevState) => !prevState)}
              className="w-12 h-10 text-white  flex items-center justify-center bg-sky-500 rounded-lg cursor-pointer hover:bg-sky-600"
            >
              {selectedIcon?.icon || <CategoryIcon sx={{ fontSize: 17 }} />}
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="w-full mt-12 mb-10 flex gap-3 justify-end px-7 items-center">
          {/* Cancel Button */}
          <button
            onClick={() => setOpenProjectWindow(false)}
            className="border text-[12px] p-2 px-6 rounded-md transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-black"
          >
            Cancel
          </button>
          <button
            onClick={addNewProject}
            className="bg-sky-500 hover:bg-sky-600 text-white text-[12px] p-2 px-3 rounded-md transition-all"
          >
            Add Project
          </button>
        </div>
      </div>

      {/* Render IconWindow when openIconWindow is true */}
      {openIconWindow && <IconWindow />}
    </>
  );
}

export default AddProjectWindow;
