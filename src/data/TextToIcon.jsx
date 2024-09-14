import CategoryIcon from "@mui/icons-material/Category";
import RectangleIcon from "@mui/icons-material/Rectangle";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TabletIcon from "@mui/icons-material/Tablet";
import LaptopIcon from "@mui/icons-material/Laptop";
import StorageIcon from "@mui/icons-material/Storage";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FolderIcon from "@mui/icons-material/Folder";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import LaunchIcon from "@mui/icons-material/Launch";
import AttachFileIcon from "@mui/icons-material/AttachFile";
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


export function TextToIcon({
  text,
  size = "medium",
  fontSize,
  className = ""
}) {
  switch (text) {
    // Existing cases
    case "RectangleIcon":
      return (
        <RectangleIcon
          fontSize={size}
          style={{ fontSize: fontSize }}
          className={`text-sky-400 ${className}`}
        />
      );
    case "CategoryIcon":
      return (
        <CategoryIcon
          fontSize={size}
          style={{ fontSize: fontSize }}
          className={`text-sky-400 ${className}`}
        />
      );
    case "ShuffleIcon":
      return (
        <ShuffleIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "ReplayIcon":
      return (
        <ReplayIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "SkipNextIcon":
      return (
        <SkipNextIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "SkipPreviousIcon":
      return (
        <SkipPreviousIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "StopCircleIcon":
      return (
        <StopCircleIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "PlayCircleFilledIcon":
      return (
        <PlayCircleFilledIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "PauseCircleFilledIcon":
      return (
        <PauseCircleFilledIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "FormatColorFillIcon":
      return (
        <FormatColorFillIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "FormatBoldIcon":
      return (
        <FormatBoldIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "FormatItalicIcon":
      return (
        <FormatItalicIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "FormatUnderlinedIcon":
      return (
        <FormatUnderlinedIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "QueueMusicIcon":
      return (
        <QueueMusicIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "MusicNoteIcon":
      return (
        <MusicNoteIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "MovieFilterIcon":
      return (
        <MovieFilterIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "MovieIcon":
      return (
        <MovieIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "PanoramaIcon":
      return (
        <PanoramaIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "ImageAspectRatioIcon":
      return (
        <ImageAspectRatioIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "ImageIcon":
      return (
        <ImageIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "CropSquareIcon":
      return (
        <CropSquareIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "CropDinIcon":
      return (
        <CropDinIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "CropFreeIcon":
      return (
        <CropFreeIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "CropIcon":
      return (
        <CropIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "BlurOnIcon":
      return (
        <BlurOnIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "BlurCircularIcon":
      return (
        <BlurCircularIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "OpacityIcon":
      return (
        <OpacityIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "ColorLensIcon":
      return (
        <ColorLensIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "PaletteIcon":
      return (
        <PaletteIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "GradientIcon":
      return (
        <GradientIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    // Existing icons
    case "FilterBAndWIcon":
      return (
        <FilterBAndWIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "WebIcon":
      return (
        <WebIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "CodeIcon":
      return (
        <CodeIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "DeveloperModeIcon":
      return (
        <DeveloperModeIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "DesktopWindowsIcon":
      return (
        <DesktopWindowsIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "PhoneIphoneIcon":
      return (
        <PhoneIphoneIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "TabletIcon":
      return (
        <TabletIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "LaptopIcon":
      return (
        <LaptopIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "StorageIcon":
      return (
        <StorageIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "CloudUploadIcon":
      return (
        <CloudUploadIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "CloudDownloadIcon":
      return (
        <CloudDownloadIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "FolderIcon":
      return (
        <FolderIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "FileCopyIcon":
      return (
        <FileCopyIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "AccessAlarmIcon":
      return (
        <AccessAlarmIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "AccessibilityNewIcon":
      return (
        <AccessibilityNewIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "AccountCircleIcon":
      return (
        <AccountCircleIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "AddShoppingCartIcon":
      return (
        <AddShoppingCartIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "AttachFileIcon":
      return (
        <AttachFileIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "BatteryChargingFullIcon":
      return (
        <BatteryChargingFullIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "BrushIcon":
      return (
        <BrushIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "CameraAltIcon":
      return (
        <CameraAltIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "ChatIcon":
      return (
        <ChatIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "CheckCircleIcon":
      return (
        <CheckCircleIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "CloseIcon":
      return (
        <CloseIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "DirectionsBikeIcon":
      return (
        <DirectionsBikeIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "ExpandMoreIcon":
      return (
        <ExpandMoreIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "FavoriteIcon":
      return (
        <FavoriteIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "HomeIcon":
      return (
        <HomeIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "InfoIcon":
      return (
        <InfoIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "LaunchIcon":
      return (
        <LaunchIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "LightbulbIcon":
      return (
        <LightbulbIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "MapIcon":
      return (
        <MapIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "NotificationsIcon":
      return (
        <NotificationsIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "PowerSettingsNewIcon":
      return (
        <PowerSettingsNewIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "SearchIcon":
      return (
        <SearchIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "SettingsIcon":
      return (
        <SettingsIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "StarIcon":
      return (
        <StarIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    case "ThumbUpIcon":
      return (
        <ThumbUpIcon
          style={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}
        />
      );
    default:
      return null;
  }
}
