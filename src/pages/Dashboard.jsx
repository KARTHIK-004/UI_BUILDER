import React from "react";
import { AppProvider, useTheme } from "../data/ContextApi";
import Sidebar from "../components/Sidebar";
import ContentArea from "../components/ContentArea";

const DashboardContent = () => {
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
      <ContentArea />
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
