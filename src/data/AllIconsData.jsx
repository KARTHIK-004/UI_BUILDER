import React, { useEffect } from "react";
import CodeIcon from "@mui/icons-material/Code";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import WebIcon from "@mui/icons-material/Web";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TabletIcon from "@mui/icons-material/Tablet";
import LaptopIcon from "@mui/icons-material/Laptop";
import StorageIcon from "@mui/icons-material/Storage";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BuildIcon from "@mui/icons-material/Build";
import BugReportIcon from "@mui/icons-material/BugReport";
import SpeedIcon from "@mui/icons-material/Speed";
import TimelineIcon from "@mui/icons-material/Timeline";
import TuneIcon from "@mui/icons-material/Tune";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExtensionIcon from "@mui/icons-material/Extension";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import ViewArrayIcon from "@mui/icons-material/ViewArray";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridOnIcon from "@mui/icons-material/GridOn";
import TableChartIcon from "@mui/icons-material/TableChart";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import BorderOuterIcon from "@mui/icons-material/BorderOuter";
import BorderInnerIcon from "@mui/icons-material/BorderInner";
import BorderClearIcon from "@mui/icons-material/BorderClear";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import TitleIcon from "@mui/icons-material/Title";
import ShortTextIcon from "@mui/icons-material/ShortText";
import NotesIcon from "@mui/icons-material/Notes";
import SubjectIcon from "@mui/icons-material/Subject";
import LinkIcon from "@mui/icons-material/Link";
import AddLinkIcon from "@mui/icons-material/AddLink";
import LaunchIcon from "@mui/icons-material/Launch";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import SettingsInputHdmiIcon from "@mui/icons-material/SettingsInputHdmi";
import SettingsInputSvideoIcon from "@mui/icons-material/SettingsInputSvideo";
import SettingsOverscanIcon from "@mui/icons-material/SettingsOverscan";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import ContrastIcon from "@mui/icons-material/Contrast";
import ExposureIcon from "@mui/icons-material/Exposure";
import FilterIcon from "@mui/icons-material/Filter";
import FilterBAndWIcon from "@mui/icons-material/FilterBAndW";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import PaletteIcon from "@mui/icons-material/Palette";
import GradientIcon from "@mui/icons-material/Gradient";
import OpacityIcon from "@mui/icons-material/Opacity";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import CropIcon from "@mui/icons-material/Crop";
import CropFreeIcon from "@mui/icons-material/CropFree";
import CropDinIcon from "@mui/icons-material/CropDin";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import ImageIcon from "@mui/icons-material/Image";
import ImageAspectRatioIcon from "@mui/icons-material/ImageAspectRatio";
import PanoramaIcon from "@mui/icons-material/Panorama";
import MovieIcon from "@mui/icons-material/Movie";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ReplayIcon from "@mui/icons-material/Replay";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BrushIcon from "@mui/icons-material/Brush";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import CastIcon from "@mui/icons-material/Cast";
import CategoryIcon from "@mui/icons-material/Category";
import { useAppContext } from "./ContextApi";

export const allIconsArray = [
  {
    id: 1,
    icon: <CodeIcon className="text-[20px]" />,
    name: "CodeIcon",
    isSelected: true,
  },
  {
    id: 2,
    icon: <DeveloperModeIcon className="text-[20px]" />,
    name: "DeveloperModeIcon",
    isSelected: false,
  },
  {
    id: 3,
    icon: <WebIcon className="text-[20px]" />,
    name: "WebIcon",
    isSelected: false,
  },
  {
    id: 4,
    icon: <DesktopWindowsIcon className="text-[20px]" />,
    name: "DesktopWindowsIcon",
    isSelected: false,
  },
  {
    id: 5,
    icon: <PhoneIphoneIcon className="text-[20px]" />,
    name: "PhoneIphoneIcon",
    isSelected: false,
  },
  {
    id: 6,
    icon: <TabletIcon className="text-[20px]" />,
    name: "TabletIcon",
    isSelected: false,
  },
  {
    id: 7,
    icon: <LaptopIcon className="text-[20px]" />,
    name: "LaptopIcon",
    isSelected: false,
  },
  {
    id: 8,
    icon: <StorageIcon className="text-[20px]" />,
    name: "StorageIcon",
    isSelected: false,
  },
  {
    id: 9,
    icon: <CloudUploadIcon className="text-[20px]" />,
    name: "CloudUploadIcon",
    isSelected: false,
  },
  {
    id: 10,
    icon: <CloudDownloadIcon className="text-[20px]" />,
    name: "CloudDownloadIcon",
    isSelected: false,
  },
  {
    id: 11,
    icon: <FolderIcon className="text-[20px]" />,
    name: "FolderIcon",
    isSelected: false,
  },
  {
    id: 12,
    icon: <FolderOpenIcon className="text-[20px]" />,
    name: "FolderOpenIcon",
    isSelected: false,
  },
  {
    id: 13,
    icon: <InsertDriveFileIcon className="text-[20px]" />,
    name: "InsertDriveFileIcon",
    isSelected: false,
  },
  {
    id: 14,
    icon: <CreateNewFolderIcon className="text-[20px]" />,
    name: "CreateNewFolderIcon",
    isSelected: false,
  },
  {
    id: 15,
    icon: <SaveAltIcon className="text-[20px]" />,
    name: "SaveAltIcon",
    isSelected: false,
  },
  {
    id: 16,
    icon: <DeleteForeverIcon className="text-[20px]" />,
    name: "DeleteForeverIcon",
    isSelected: false,
  },
  {
    id: 17,
    icon: <BuildIcon className="text-[20px]" />,
    name: "BuildIcon",
    isSelected: false,
  },
  {
    id: 18,
    icon: <BugReportIcon className="text-[20px]" />,
    name: "BugReportIcon",
    isSelected: false,
  },
  {
    id: 19,
    icon: <SpeedIcon className="text-[20px]" />,
    name: "SpeedIcon",
    isSelected: false,
  },
  {
    id: 20,
    icon: <TimelineIcon className="text-[20px]" />,
    name: "TimelineIcon",
    isSelected: false,
  },
  {
    id: 21,
    icon: <TuneIcon className="text-[20px]" />,
    name: "TuneIcon",
    isSelected: false,
  },
  {
    id: 22,
    icon: <SettingsApplicationsIcon className="text-[20px]" />,
    name: "SettingsApplicationsIcon",
    isSelected: false,
  },
  {
    id: 23,
    icon: <ExtensionIcon className="text-[20px]" />,
    name: "ExtensionIcon",
    isSelected: false,
  },
  {
    id: 24,
    icon: <ViewModuleIcon className="text-[20px]" />,
    name: "ViewModuleIcon",
    isSelected: false,
  },
  {
    id: 25,
    icon: <ViewQuiltIcon className="text-[20px]" />,
    name: "ViewQuiltIcon",
    isSelected: false,
  },
  {
    id: 26,
    icon: <ViewCompactIcon className="text-[20px]" />,
    name: "ViewCompactIcon",
    isSelected: false,
  },
  {
    id: 27,
    icon: <ViewStreamIcon className="text-[20px]" />,
    name: "ViewStreamIcon",
    isSelected: false,
  },
  {
    id: 28,
    icon: <ViewArrayIcon className="text-[20px]" />,
    name: "ViewArrayIcon",
    isSelected: false,
  },
  {
    id: 29,
    icon: <ViewCarouselIcon className="text-[20px]" />,
    name: "ViewCarouselIcon",
    isSelected: false,
  },
  {
    id: 30,
    icon: <ViewColumnIcon className="text-[20px]" />,
    name: "ViewColumnIcon",
    isSelected: false,
  },
  {
    id: 31,
    icon: <ViewListIcon className="text-[20px]" />,
    name: "ViewListIcon",
    isSelected: false,
  },
  {
    id: 32,
    icon: <GridOnIcon className="text-[20px]" />,
    name: "GridOnIcon",
    isSelected: false,
  },
  {
    id: 33,
    icon: <TableChartIcon className="text-[20px]" />,
    name: "TableChartIcon",
    isSelected: false,
  },
  {
    id: 34,
    icon: <FormatAlignLeftIcon className="text-[20px]" />,
    name: "FormatAlignLeftIcon",
    isSelected: false,
  },
  {
    id: 35,
    icon: <FormatAlignCenterIcon className="text-[20px]" />,
    name: "FormatAlignCenterIcon",
    isSelected: false,
  },
  {
    id: 36,
    icon: <FormatAlignRightIcon className="text-[20px]" />,
    name: "FormatAlignRightIcon",
    isSelected: false,
  },
  {
    id: 37,
    icon: <FormatAlignJustifyIcon className="text-[20px]" />,
    name: "FormatAlignJustifyIcon",
    isSelected: false,
  },
  {
    id: 38,
    icon: <FormatBoldIcon className="text-[20px]" />,
    name: "FormatBoldIcon",
    isSelected: false,
  },
  {
    id: 39,
    icon: <FormatItalicIcon className="text-[20px]" />,
    name: "FormatItalicIcon",
    isSelected: false,
  },
  {
    id: 40,
    icon: <FormatUnderlinedIcon className="text-[20px]" />,
    name: "FormatUnderlinedIcon",
    isSelected: false,
  },
  {
    id: 41,
    icon: <FormatColorFillIcon className="text-[20px]" />,
    name: "FormatColorFillIcon",
    isSelected: false,
  },
  {
    id: 42,
    icon: <BorderAllIcon className="text-[20px]" />,
    name: "BorderAllIcon",
    isSelected: false,
  },
  {
    id: 43,
    icon: <BorderOuterIcon className="text-[20px]" />,
    name: "BorderOuterIcon",
    isSelected: false,
  },
  {
    id: 44,
    icon: <BorderInnerIcon className="text-[20px]" />,
    name: "BorderInnerIcon",
    isSelected: false,
  },
  {
    id: 45,
    icon: <BorderClearIcon className="text-[20px]" />,
    name: "BorderClearIcon",
    isSelected: false,
  },
  {
    id: 46,
    icon: <TextFieldsIcon className="text-[20px]" />,
    name: "TextFieldsIcon",
    isSelected: false,
  },
  {
    id: 47,
    icon: <TitleIcon className="text-[20px]" />,
    name: "TitleIcon",
    isSelected: false,
  },
  {
    id: 48,
    icon: <ShortTextIcon className="text-[20px]" />,
    name: "ShortTextIcon",
    isSelected: false,
  },
  {
    id: 49,
    icon: <NotesIcon className="text-[20px]" />,
    name: "NotesIcon",
    isSelected: false,
  },
  {
    id: 50,
    icon: <SubjectIcon className="text-[20px]" />,
    name: "SubjectIcon",
    isSelected: false,
  },
  {
    id: 51,
    icon: <LinkIcon className="text-[20px]" />,
    name: "LinkIcon",
    isSelected: false,
  },
  {
    id: 52,
    icon: <AddLinkIcon className="text-[20px]" />,
    name: "AddLinkIcon",
    isSelected: false,
  },
  {
    id: 53,
    icon: <LaunchIcon className="text-[20px]" />,
    name: "LaunchIcon",
    isSelected: false,
  },
  {
    id: 54,
    icon: <AttachFileIcon className="text-[20px]" />,
    name: "AttachFileIcon",
    isSelected: false,
  },
  {
    id: 55,
    icon: <CloudIcon className="text-[20px]" />,
    name: "CloudIcon",
    isSelected: false,
  },
  {
    id: 56,
    icon: <CloudQueueIcon className="text-[20px]" />,
    name: "CloudQueueIcon",
    isSelected: false,
  },
  {
    id: 57,
    icon: <CloudDoneIcon className="text-[20px]" />,
    name: "CloudDoneIcon",
    isSelected: false,
  },
  {
    id: 58,
    icon: <CloudOffIcon className="text-[20px]" />,
    name: "CloudOffIcon",
    isSelected: false,
  },
  {
    id: 59,
    icon: <SettingsEthernetIcon className="text-[20px]" />,
    name: "SettingsEthernetIcon",
    isSelected: false,
  },
  {
    id: 60,
    icon: <SettingsInputComponentIcon className="text-[20px]" />,
    name: "SettingsInputComponentIcon",
    isSelected: false,
  },
  {
    id: 61,
    icon: <SettingsInputHdmiIcon className="text-[20px]" />,
    name: "SettingsInputHdmiIcon",
    isSelected: false,
  },
  {
    id: 62,
    icon: <SettingsInputSvideoIcon className="text-[20px]" />,
    name: "SettingsInputSvideoIcon",
    isSelected: false,
  },
  {
    id: 63,
    icon: <SettingsOverscanIcon className="text-[20px]" />,
    name: "SettingsOverscanIcon",
    isSelected: false,
  },
  {
    id: 64,
    icon: <SettingsBrightnessIcon className="text-[20px]" />,
    name: "SettingsBrightnessIcon",
    isSelected: false,
  },
  {
    id: 65,
    icon: <BrightnessMediumIcon className="text-[20px]" />,
    name: "BrightnessMediumIcon",
    isSelected: false,
  },
  {
    id: 66,
    icon: <ContrastIcon className="text-[20px]" />,
    name: "ContrastIcon",
    isSelected: false,
  },
  {
    id: 67,
    icon: <ExposureIcon className="text-[20px]" />,
    name: "ExposureIcon",
    isSelected: false,
  },
  {
    id: 68,
    icon: <FilterIcon className="text-[20px]" />,
    name: "FilterIcon",
    isSelected: false,
  },
  {
    id: 69,
    icon: <FilterBAndWIcon className="text-[20px]" />,
    name: "FilterBAndWIcon",
    isSelected: false,
  },
  {
    id: 70,
    icon: <ColorLensIcon className="text-[20px]" />,
    name: "ColorLensIcon",
    isSelected: false,
  },
  {
    id: 71,
    icon: <PaletteIcon className="text-[20px]" />,
    name: "PaletteIcon",
    isSelected: false,
  },
  {
    id: 72,
    icon: <GradientIcon className="text-[20px]" />,
    name: "GradientIcon",
    isSelected: false,
  },
  {
    id: 73,
    icon: <OpacityIcon className="text-[20px]" />,
    name: "OpacityIcon",
    isSelected: false,
  },
  {
    id: 74,
    icon: <BlurOnIcon className="text-[20px]" />,
    name: "BlurOnIcon",
    isSelected: false,
  },
  {
    id: 75,
    icon: <BlurCircularIcon className="text-[20px]" />,
    name: "BlurCircularIcon",
    isSelected: false,
  },
  {
    id: 76,
    icon: <CropIcon className="text-[20px]" />,
    name: "CropIcon",
    isSelected: false,
  },
  {
    id: 77,
    icon: <CropFreeIcon className="text-[20px]" />,
    name: "CropFreeIcon",
    isSelected: false,
  },
  {
    id: 78,
    icon: <CropDinIcon className="text-[20px]" />,
    name: "CropDinIcon",
    isSelected: false,
  },
  {
    id: 79,
    icon: <CropSquareIcon className="text-[20px]" />,
    name: "CropSquareIcon",
    isSelected: false,
  },
  {
    id: 80,
    icon: <ImageIcon className="text-[20px]" />,
    name: "ImageIcon",
    isSelected: false,
  },
  {
    id: 81,
    icon: <ImageAspectRatioIcon className="text-[20px]" />,
    name: "ImageAspectRatioIcon",
    isSelected: false,
  },
  {
    id: 82,
    icon: <PanoramaIcon className="text-[20px]" />,
    name: "PanoramaIcon",
    isSelected: false,
  },
  {
    id: 83,
    icon: <MovieIcon className="text-[20px]" />,
    name: "MovieIcon",
    isSelected: false,
  },
  {
    id: 84,
    icon: <MovieFilterIcon className="text-[20px]" />,
    name: "MovieFilterIcon",
    isSelected: false,
  },
  {
    id: 85,
    icon: <MusicNoteIcon className="text-[20px]" />,
    name: "MusicNoteIcon",
    isSelected: false,
  },
  {
    id: 86,
    icon: <QueueMusicIcon className="text-[20px]" />,
    name: "QueueMusicIcon",
    isSelected: false,
  },
  {
    id: 87,
    icon: <PlayCircleFilledIcon className="text-[20px]" />,
    name: "PlayCircleFilledIcon",
    isSelected: false,
  },
  {
    id: 88,
    icon: <PauseCircleFilledIcon className="text-[20px]" />,
    name: "PauseCircleFilledIcon",
    isSelected: false,
  },
  {
    id: 89,
    icon: <StopCircleIcon className="text-[20px]" />,
    name: "StopCircleIcon",
    isSelected: false,
  },
  {
    id: 90,
    icon: <SkipPreviousIcon className="text-[20px]" />,
    name: "SkipPreviousIcon",
    isSelected: false,
  },
  {
    id: 91,
    icon: <SkipNextIcon className="text-[20px]" />,
    name: "SkipNextIcon",
    isSelected: false,
  },
  {
    id: 92,
    icon: <ReplayIcon className="text-[20px]" />,
    name: "ReplayIcon",
    isSelected: false,
  },
  {
    id: 93,
    icon: <ShuffleIcon className="text-[20px]" />,
    name: "ShuffleIcon",
    isSelected: false,
  },
  {
    id: 94,
    icon: <AspectRatioIcon className="text-[20px]" />,
    name: "AspectRatioIcon",
    isSelected: false,
  },
  {
    id: 95,
    icon: <BookmarkIcon className="text-[20px]" />,
    name: "BookmarkIcon",
    isSelected: false,
  },
  {
    id: 96,
    icon: <AssignmentIcon className="text-[20px]" />,
    name: "AssignmentIcon",
    isSelected: false,
  },
  {
    id: 97,
    icon: <BrushIcon className="text-[20px]" />,
    name: "BrushIcon",
    isSelected: false,
  },
  {
    id: 98,
    icon: <BubbleChartIcon className="text-[20px]" />,
    name: "BubbleChartIcon",
    isSelected: false,
  },
  {
    id: 99,
    icon: <CastIcon className="text-[20px]" />,
    name: "CastIcon",
    isSelected: false,
  },
  {
    id: 100,
    icon: <CategoryIcon className="text-[20px]" />,
    name: "CategoryIcon",
    isSelected: false,
  },
];

export default function AllIcons({ allIconsState, setAllIconsState }) {
  const {
    selectedProjectObject: { selectedProject } = {},
    openIconWindowObject: { openIconWindow } = {},
  } = useAppContext() || {};

  function handleClickedIcon(singleIcon) {
    setAllIconsState((prevState) =>
      prevState.map((icon) => ({
        ...icon,
        isSelected: icon.id === singleIcon.id ? !icon.isSelected : false,
      }))
    );
  }

  useEffect(() => {
    if (selectedProject) {
      setAllIconsState((prevState) =>
        prevState.map((icon) => ({
          ...icon,
          isSelected: icon.name === selectedProject?.icon,
        }))
      );
    }
  }, [selectedProject]);

  return (
    <div className="flex flex-wrap gap-2 text-sky-500 p-3">
      {allIconsState.map((singleIcon, index) => (
        <div
          key={index}
          onClick={() => handleClickedIcon(singleIcon)}
          className={`w-9 h-9 shadow-sm border border-slate-50 flex items-center 
            justify-center rounded-lg hover:bg-sky-500 hover:text-white 
            ${
              singleIcon.isSelected
                ? "bg-sky-500 text-white"
                : "bg-white text-sky-500"
            }`}
        >
          {singleIcon.icon}
        </div>
      ))}
    </div>
  );
}
