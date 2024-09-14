import React from "react";
import TopBar from "./TopBar";
import StatsBar from "./StatsBar";
import ProjectBar from "./ProjectBar";
import FavoriteBar from "./FavoriteBar";
import AddProjectWindow from "../components/AddProjectWindow";
import { useAppContext } from "../data/ContextApi";

function ContentArea() {
  const { openProjectWindow } = useAppContext();
  return (
    <div className={` w-full p-5 `}>
      <AddProjectWindow />
      {openProjectWindow && <SoftLayer />}
      <TopBar />
      <StatsBar />
      <ProjectBar />
      <FavoriteBar />
    </div>
  );
}

export default ContentArea;

export function SoftLayer() {
  return (
    <div className="w-full h-full fixed top-0 right-0 bg-black opacity-30"></div>
  );
}