import React, { useState } from "react";
import TopBar from "./TopBar";
import StatsBar from "./StatsBar";
import ProjectBar from "./ProjectBar";
import FavoriteBar from "./FavoriteBar";
import AddProjectWindow from "../components/AddProjectWindow";
import { useAppContext } from "../data/ContextApi";

function ContentArea() {
  const {
    openProjectWindow,
    showComponentPage,
    openDeleteWindow,
    openComponentEditor,
    openAllProjectsWindow,
    openAllFavoriteComponentsWindow,
    showSearchBar,
    mainSearchQuery,
  } = useAppContext();

  // const [selectedIcon, setSelectedIcon] = useState({
  //   icon: <CodeIcon />,
  //   name: "CodeIcon",
  // });

  // //Get the icon from the callback function and set it in the selectedIcon state
  // function getTheIconSelected() {
  //   setSelectedIcon({ icon: icon.icon, name: icon.name });
  // }

  return (
    <div className={` w-full p-5 `}>
      <AddProjectWindow />
      {openProjectWindow && (
        <div className="w-full h-full fixed top-0 right-0 bg-black opacity-30"></div>
      )}
      <TopBar />
      <StatsBar />
      <ProjectBar />
      <FavoriteBar />
    </div>
  );
}

export default ContentArea;
