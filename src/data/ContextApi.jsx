// const [openProjectWindow, setOpenProjectWindow] = useState(false);
// const [showSearchBar, setShowSearchBar] = useState(false);
// const [isMobileView, setIsMobileView] = useState(false);
// const [showSideBar, setShowSideBar] = useState(true);
// const [allProjects, setAllProjects] = useState([]);
// const [allFavoriteComponents, setAllFavoriteComponents] = useState([]);
// const [isLoading, setIsLoading] = useState(true);
// const [openIconWindow, setOpenIconWindow] = useState(false);
// const [showComponentPage, setShowComponentPage] = useState(true);
// const [selectedProject, setSelectedProject] = useState(null);
// const [dropDownPositions, setDropDownPositions] = useState({
//   left: 0,
//   top: 0,
// });

// const [openDropDown, setOpenDropDown] = useState(false);
// const [openDeleteWindow, setOpenDeleteWindow] = useState(false);
// const [selectedComponent, setSelectedComponent] = useState(null);
// const [openComponentEditor, setOpenComponentEditor] = useState(false);
// const [openAllProjectsWindow, setOpenAllProjectsWindow] = useState(false);
// const [openSortingDropDown, setOpenSortingDropDown] = useState(false);
// const [sortingDropDownPositions, setSortingDropDownPositions] = useState({
//   left: 0,
//   top: 0,
// });
// const [sortedProjects, setSortedProjects] = useState([]);
// const { user, isLoaded, isSignedIn } = useUser();

//   //   const [sortingOptions, setSortingOptions] = useState([
//   //     {
//   //       category: "Order",
//   //       options: [
//   //         { label: "A-Z", value: "asc", selected: true },
//   //         { label: "Z-A", value: "desc", selected: false },
//   //       ],
//   //     },
//   //     {
//   //       category: "Date",
//   //       options: [
//   //         { label: "Newest", value: "newest", selected: false },
//   //         { label: "Oldest", value: "oldest", selected: false },
//   //       ],
//   //     },
//   //   ]);

//   //   const [openAllFavoriteComponentsWindow, setOpenAllFavoriteComponentsWindow] =
//   //     useState(false);
//   //   const [openFilterDropDown, setOpenFilterDropDown] = useState(false);
//   //   const [filterDropDownPositions, setFilterDropDownPositions] = useState({
//   //     left: 0,
//   //     top: 0,
//   //   });

//   //   const [selectedProjectToFilter, setSelectedProjectToFilter] = useState(null);

//   //   const [openLiveSearchBar, setOpenLiveSearchBar] = useState(false);
//   //   const [mainSearchQuery, setMainSearchQuery] = useState("");
//   //   const [liveSearchPositions, setLiveSearchPositions] = useState({
//   //     left: 0,
//   //     top: 0,
//   //   });

//   //End of variables
//   //
//   //Update the window size

//   //   useEffect(() => {
//   //     function handleResize() {
//   //       setIsMobileView(window.innerWidth <= 640);
//   //     }

//   //     // Initial check
//   //     handleResize();

//   //     // Event listener for window resize
//   //     window.addEventListener("resize", handleResize);

//   //     // Cleanup
//   //     return () => {
//   //       window.removeEventListener("resize", handleResize);
//   //     };
//   //   }, []);

//   //   //Simulate the fetch using setTimeout
//   //   useEffect(() => {
//   //     async function fetchAllProjectsNew() {
//   //       try {
//   //         const response = await fetch(`/api/projects?clerkUserId=${user?.id}`);
//   //         if (!response.ok) {
//   //           throw new Error("Failed to fetch projects");
//   //         }
//   //         const data = await response.json();
//   //         if (data.projects) {
//   //           data.projects.forEach((project) => {
//   //             project.components.sort((a, b) => {
//   //               return (
//   //                 new Date(b.createdAt).getTime() -
//   //                 new Date(a.createdAt).getTime()
//   //               );
//   //             });
//   //           });
//   //           // Update the all Projects
//   //           setAllProjects(data.projects);
//   //           setSortedProjects(data.projects);
//   //         }
//   //       } catch (error) {
//   //         console.error(error);
//   //       } finally {
//   //         setIsLoading(false);
//   //       }
//   //     }

//   //     if (isLoaded && isSignedIn) {
//   //       fetchAllProjectsNew();
//   //     }
//   //   }, [user, isLoaded, isSignedIn]);

//   //   // Update favorite components when allProjects changes
//   //   useEffect(() => {
//   //     if (allProjects.length > 0) {
//   //       const favoriteComponents = allProjects.flatMap((project) =>
//   //         project.components.filter((component) => component.isFavorite)
//   //       );
//   //       setAllFavoriteComponents(favoriteComponents);
//   //     }
//   //   }, [allProjects]);

//   //   // Update local storage whenever hideSideBar changes
//   //   useEffect(() => {
//   //     if (typeof window !== "undefined") {
//   //       localStorage.setItem("openedSideBar", JSON.stringify(openSideBar));
//   //     }
//   //   }, [openSideBar]);

//   //   useEffect(() => {
//   //     if (typeof window !== "undefined") {
//   //       // Save the dark mode state to localStorage whenever it changes
//   //       const isDarkMode = darkModeMenu[1].isSelected;
//   //       localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
//   //     }
//   //   }, [darkModeMenu]);

//   //   useEffect(() => {
//   //     if (menuItems[0].isSelected) {
//   //       setSelectedProject(null);
//   //       setShowComponentPage(false);
//   //     }
//   //     if (menuItems[1].isSelected) {
//   //       setOpenAllProjectsWindow(true);
//   //       setSelectedProject(null);
//   //       setShowComponentPage(false);
//   //     }

//   //     if (menuItems[2].isSelected) {
//   //       setOpenAllFavoriteComponentsWindow(true);
//   //     }
//   //   }, [menuItems]);

//   return (

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CodeIcon from "@mui/icons-material/Code";
import { allProjectsData } from "./AllData";

// Create contexts
const AppContext = createContext();
const ThemeContext = createContext();

// AppProvider component
export const AppProvider = ({ children }) => {
  // App state
  const [value, setValue] = useState("Hello, world!");
  const [menuItems, setMenuItems] = useState([
    { id: "1", name: "Home", icon: <HomeIcon />, isSelected: true },
    { id: "2", name: "Projects", icon: <CategoryIcon />, isSelected: false },
    { id: "3", name: "Favorites", icon: <FavoriteIcon />, isSelected: false },
  ]);

  // Load sidebar state from localStorage or default to true
  const [openSideBar, setOpenSideBar] = useState(() => {
    const storedValue = localStorage.getItem("openedSideBar");
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  // Save sidebar state in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("openedSideBar", JSON.stringify(openSideBar));
  }, [openSideBar]);

  // Additional states
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);
  const [allProjects, setAllProjects] = useState([]);
  const [allFavoriteComponents, setAllFavoriteComponents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme !== null ? JSON.parse(storedTheme) : false;
  });

  // Toggle theme mode and save it to localStorage
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Fetch all projects
  useEffect(() => {
    async function fetchAllProjects() {
      try {
        setTimeout(() => {
          setAllProjects(allProjectsData);
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Failed to fetch projects", error);
        setIsLoading(false);
      }
    }
    fetchAllProjects();
  }, []);

  // Update favorite components when allProjects changes
  useEffect(() => {
    if (allProjects.length > 0) {
      const favoriteComponents = allProjects.flatMap(project =>
        project.components.filter(component => component.isFavorite)
      );
      setAllFavoriteComponents(favoriteComponents);
    }
  }, [allProjects]);

  // Additional state management
  const [selectedIcon, setSelectedIcon] = useState({
    icon: <CodeIcon />,
    name: "CodeIcon",
  });
  const [openProjectWindow, setOpenProjectWindow] = useState(false);
  const [openIconWindow, setOpenIconWindow] = useState(false);
  const [showComponentPage, setShowComponentPage] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [dropDownPositions, setDropDownPositions] = useState({
    left: 0,
    top: 0,
  });
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openDeleteWindow, setOpenDeleteWindow] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [openComponentEditor, setOpenComponentEditor] = useState(false);
  const [openAllProjectsWindow, setOpenAllProjectsWindow] = useState(false);
  const [openSortingDropDown, setOpenSortingDropDown] = useState(false);
  const [sortingDropDownPositions, setSortingDropDownPositions] = useState({
    left: 0,
    top: 0,
  });
  const [sortedProjects, setSortedProjects] = useState([]);

  // Memoize the values to avoid unnecessary re-renders
  const themeContextValue = useMemo(
    () => ({ darkMode, toggleTheme }),
    [darkMode]
  );
  const appContextValue = useMemo(
    () => ({
      value,
      setValue,
      menuItems,
      setMenuItems,
      openSideBar,
      setOpenSideBar,
      showSideBar,
      setShowSideBar,
      isMobileView,
      setIsMobileView,
      showSearchBar,
      setShowSearchBar,
      allProjects,
      setAllProjects,
      allFavoriteComponents,
      setAllFavoriteComponents,
      isLoading,
      setIsLoading,
      openIconWindow,
      setOpenIconWindow,
      showComponentPage,
      setShowComponentPage,
      selectedProject,
      setSelectedProject,
      dropDownPositions,
      setDropDownPositions,
      openDropDown,
      setOpenDropDown,
      openDeleteWindow,
      setOpenDeleteWindow,
      selectedComponent,
      setSelectedComponent,
      openComponentEditor,
      setOpenComponentEditor,
      openProjectWindow,
      setOpenProjectWindow,
      openAllProjectsWindow,
      setOpenAllProjectsWindow,
      openSortingDropDown,
      setOpenSortingDropDown,
      sortingDropDownPositions,
      setSortingDropDownPositions,
      sortedProjects,
      setSortedProjects,
      selectedIcon,
      setSelectedIcon,
    }),
    [
      value,
      menuItems,
      openSideBar,
      showSideBar,
      isMobileView,
      showSearchBar,
      allProjects,
      allFavoriteComponents,
      isLoading,
      openIconWindow,
      showComponentPage,
      selectedProject,
      dropDownPositions,
      openDropDown,
      openDeleteWindow,
      selectedComponent,
      openComponentEditor,
      openProjectWindow,
      openAllProjectsWindow,
      openSortingDropDown,
      sortingDropDownPositions,
      sortedProjects,
      selectedIcon,
    ]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <AppContext.Provider value={appContextValue}>
        {children}
      </AppContext.Provider>
    </ThemeContext.Provider>
  );
};

// Custom hooks to use context
export const useAppContext = () => useContext(AppContext);
export const useTheme = () => useContext(ThemeContext);

export default AppContext;
