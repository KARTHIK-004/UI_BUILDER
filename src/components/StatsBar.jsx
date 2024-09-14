import React, { useEffect, useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Skeleton from "@mui/material/Skeleton";
import { useAppContext, useTheme } from "../data/ContextApi";

export default function StatsBar() {
  const { darkMode } = useTheme();

  const [statisticsCards, setStatisticsCard] = useState([]);

  const { isLoading, allProjects, allFavoriteComponents } = useAppContext();

  useEffect(() => {
    setStatisticsCard([
      {
        id: 1,
        name: "Projects Created",
        icon: <AccountTreeIcon className="text-sky-400" />,
        count: allProjects.length,
      },
      {
        id: 2,
        name: "Components Added",
        icon: <CategoryIcon className="text-sky-400" />,
        count: allProjects.reduce((a, b) => a + b.components.length, 0),
      },
      {
        id: 3,
        name: "Favorite Components",
        icon: <FavoriteIcon className="text-sky-400" />,
        count: allFavoriteComponents.length,
      },
    ]);
  }, [allProjects, allFavoriteComponents]);

  return (
    <div
      className={`${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-700"
      } mt-4 rounded-lg`}
    >
      <div className="grid grid-cols-3 gap-4 rounded-lg mt-2">
        {statisticsCards.map((card) => (
          <div key={card.id} className="flex gap-4 items-center p-4 rounded-lg">
            <div className="w-11 h-11 bg-sky-100 rounded-full flex items-center justify-center max-md:hidden">
              {card.icon}
            </div>
            <div className="flex flex-col max-sm:justify-center">
              {isLoading ? (
                <Skeleton
                  className="mb-2"
                  variant="rectangular"
                  width={105}
                  height={25}
                />
              ) : (
                <span className="font-bold text-2xl max-sm:text-center">
                  {/* {card.count} */}11 
                </span>
              )}
              <span className="text-sm font-light text-slate-400 max-sm:text-[11px] max-sm:text-center">
                {card.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
