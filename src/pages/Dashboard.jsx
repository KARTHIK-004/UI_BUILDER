import React from "react";
import { AppProvider, useAppContext, useTheme } from "../data/ContextApi";
import Sidebar from "../components/Sidebar";
import ContentArea from "../components/ContentArea";
import Component from "./Component";

const DashboardContent = () => {
  const { showComponentPage } = useAppContext();
  const { darkMode } = useTheme();

  return (
    <div
      className={`${
        darkMode ? "bg-slate-700" : "bg-slate-50"
      } flex relative border`}
    >
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      {!showComponentPage ? <ContentArea /> : <Component />}
    </div>
  );
};

const Dashboard = () => {
  return (
    <AppProvider>
      <DashboardContent />
    </AppProvider>
  );
};

export default Dashboard;
