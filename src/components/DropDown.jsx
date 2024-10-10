import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useAppContext } from "../data/ContextApi";

export function DropDown() {
  const {
    dropDownPositions,
    openDropDown,
    setOpenDropDown,
    openDeleteWindow,
    setOpenDeleteWindow,
    setSelectedComponent,
    selectedComponent,
    selectedProject,
    setSelectedProject,
    allProjects,
    setAllProjects,
    setOpenComponentEditor,
    openComponentEditor,
  } = useAppContext();

  const dropDownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpenDropDown(false);
        if (openDeleteWindow) {
          setSelectedComponent(null);
        }
      }
    }

    function handleScroll() {
      setOpenDropDown(false);
    }

    function handleWheel(event) {
      if (event.deltaY !== 0) {
        setOpenDropDown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [setOpenDropDown]);

  useEffect(() => {
    if (!openDropDown) {
      if (!openDeleteWindow && !openComponentEditor) {
        setSelectedComponent(null);
      }
    }
  }, [openDropDown]);

  function deleteComponentFunction() {
    setOpenDeleteWindow(true);
    setOpenDropDown(false);
  }

  function duplicateComponentFunction() {
    // Uncomment this function
    if (selectedComponent && selectedProject) {
      try {
        const newComponentObject = {
          ...selectedComponent,
          _id: uuidv4(),
          name: `${selectedComponent.name} Copy`,
          createdAt: new Date().toISOString(),
        };

        const updatedProject = {
          // Assuming you have a way to get this updated project
          ...selectedProject,
          components: [...selectedProject.components, newComponentObject],
        };

        updatedProject.components.sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });

        setSelectedProject(updatedProject);

        const updatedAllProjects = allProjects.map((project) => {
          if (project._id === selectedProject._id) {
            return updatedProject;
          }
          return project;
        });
        setAllProjects(updatedAllProjects);

        toast.success("Component has been duplicated successfully");
      } catch (error) {
        toast.error("Failed to duplicate component");
      }
    }

    setOpenDropDown(false);
  }

  return (
    <div
      ref={dropDownRef}
      style={{
        top: dropDownPositions.top,
        left: dropDownPositions.left - 140,
        visibility: openDropDown ? "visible" : "hidden",
      }}
      className="bg-white z-50 px-5 border border-slate-50 fixed py-4 w-[160px] select-none shadow-md rounded-lg flex flex-col gap-5"
    >
      <div
        onClick={() => {
          setOpenComponentEditor(true);
          setOpenDropDown(false);
        }}
        className="flex gap-1 items-center text-slate-600 cursor-pointer hover:text-sky-500"
      >
        <EditOutlinedIcon sx={{ fontSize: 21 }} />
        <span className="text-[14px]">Edit</span>
      </div>
      <div
        onClick={duplicateComponentFunction} // This now has access to the function
        className="flex gap-1 items-center text-slate-600 cursor-pointer hover:text-sky-500"
      >
        <ContentCopyIcon sx={{ fontSize: 21 }} />
        <span className="text-[14px]">Duplicate</span>
      </div>
      <hr className="border-t border-slate-200" />
      <div
        onClick={deleteComponentFunction}
        className="flex gap-1 items-center text-slate-600 cursor-pointer hover:text-red-500"
      >
        <DeleteOutlineOutlinedIcon sx={{ fontSize: 21 }} />
        <span className="text-[14px]">Delete</span>
      </div>
    </div>
  );
}
