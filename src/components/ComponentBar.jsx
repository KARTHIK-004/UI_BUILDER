import React, { useEffect, useRef, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CodeIcon from "@mui/icons-material/Code";
import PreviewIcon from "@mui/icons-material/Preview";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import SyntaxHighlighter from "react-syntax-highlighter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import {
  atelierSulphurpoolLight,
  stackoverflowLight,
  vs,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import toast from "react-hot-toast";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { IconButton } from "@mui/material";
import { useAppContext } from "../data/ContextApi";
import { DropDown } from "./DropDown";

function truncateString() {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

function ComponentBar() {
  const {
    allProjects,
    setAllProjects,
    setSelectedProject,
    setDropDownPositions,
    setOpenDropDown,
    setSelectedComponent,
    setOpenComponentEditor,
    selectedProject,
    openDropDown,
  } = useAppContext();

  const components = [
    {
      name: "Component 1",
      code: `  <button className="bg-red-500 text-[12px] text-white px-3 p-5 rounded-md">
          <span className="text-[20px]">This is a button</span>
        </button>`,
    },
    {
      name: "Component 2",
      code: `<div className="bg-green-400 p-4 ">
      <h1>Hello World 2</h1>
      </div>`,
    },
  ];

  return (
    <div className="mt-10 flex flex-col gap-3">
      {components.map((component, index) => (
        <SingleComponent key={index} component={component} />
      ))}
    </div>
  );
}

function SingleComponent({ component }) {
  const {
    allProjects,
    setAllProjects,
    setSelectedProject,
    setDropDownPositions,
    openDropDown,
    setOpenDropDown,
    setSelectedComponent,
    setOpenComponentEditor,
    selectedProject,
  } = useAppContext();

  const [tabMenu, setTabMenu] = useState([
    {
      id: 1,
      icon: <PreviewIcon className="text-[19px]" />,
      name: "Preview",
      isSelected: true,
    },
    {
      id: 2,
      icon: <CodeIcon className="text-[19px]" />,
      name: "Jsx",
      isSelected: false,
    },
  ]);
  const [copySuccess, setCopySuccess] = useState(false);

  const changeTabState = (index) => {
    setTabMenu((prevTabMenu) =>
      prevTabMenu.map((singleItem, i) =>
        i === index
          ? { ...singleItem, isSelected: true }
          : { ...singleItem, isSelected: false }
      )
    );
  };

  const copyTheCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };
  const [isFavorite, setFavorite] = useState(component.isFavorite);

  function updateFavoriteState() {
    const newAllProjects = allProjects.map((project) => {
      const updatedComponents = project.components.map((comp) => {
        if (comp._id === component._id) {
          return {
            ...comp,
            isFavorite: !comp.isFavorite,
          };
        }
        return comp;
      });

      if (updatedComponents !== project.components) {
        return { ...project, components: updatedComponents };
      }
      return project;
    });

    // Update the components array in the selectedProject
    if (selectedProject) {
      const updateSelectedProject = newAllProjects.find(
        (project) => project._id === selectedProject._id
      );

      if (updateSelectedProject) {
        setSelectedProject(updateSelectedProject);
      }
    }
    setAllProjects(newAllProjects);
  }

  const iconRef = useRef(null);

  const openTheDropDown = (event) => {
    event.stopPropagation();
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      const top = rect.bottom + window.scrollY;
      const left = rect.left + window.scrollX;

      setDropDownPositions({ top, left });
      setOpenDropDown(true);
    }

    // Select the component
    setSelectedComponent(component);
  };
  return (
    <div className="bg-white w-full rounded-lg p-8 pt-8 pb-10 mb-3">
      {/* Component Title */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-[19px] cursor-pointer hover:text-sky-500">
            {component.name}
          </span>
          <Checkbox
            onChange={() => updateFavoriteState(selectedProject?._id)}
            checked={isFavorite}
            icon={<FavoriteBorderIcon className="text-slate-400 text-[20px]" />}
            checkedIcon={<FavoriteIcon className="text-red-500" />}
          />
        </div>
        <div onClick={openTheDropDown} ref={iconRef}>
          <IconButton>
            <MoreVertIcon className="text-slate-400 text-[20px]" />
          </IconButton>
        </div>
        {openDropDown && <DropDown />}
      </div>

      {/* Component Preview and Code Buttons */}
      <div className="flex gap-2 mt-8 text-[13px] ">
        {tabMenu.map((item, index) => (
          <div
            key={index}
            onClick={() => changeTabState(index)}
            className={`flex gap-1 items-center cursor-pointer select-none text-slate-400 px-3 py-[4px] rounded-md ${
              item.isSelected ? "bg-sky-500 text-white" : "hover:bg-slate-100"
            }`}
          >
            {item.icon}
            <span className="mt-[2px]">{item.name}</span>
          </div>
        ))}
      </div>

      {/* The Component */}
      {tabMenu[0].isSelected ? (
        <div className="w-full border rounded-md border-slate-200 mt-6">
          <LiveProvider code={component.code}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LiveError className="rounded-lg border-gray-200 p-4 text-red-600" />
              <LivePreview className="rounded-lg border-gray-200 p-4" />
            </div>
          </LiveProvider>
        </div>
      ) : (
        <div className="border rounded-md mt-6 w-full relative">
          <div className="absolute top-4 right-4 z-50 rounded-full bg-slate-200">
            <IconButton onClick={() => copyTheCode(component.code)}>
              {!copySuccess ? (
                <ContentCopyIcon sx={{ fontSize: 16 }} />
              ) : (
                <DoneAllIcon sx={{ fontSize: 16 }} />
              )}
            </IconButton>
          </div>

          <SyntaxHighlighter
            language={"javascript"}
            style={atelierSulphurpoolLight}
            showLineNumbers
          >
            {component.code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}

export default ComponentBar;
