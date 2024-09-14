import React, { useContext, useState } from 'react';
import AllIcons, { allIconsArray } from '../data/AllIconsData';
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from '../context/AppContext';


function IconWindow() {
  const {
    isMobileView,
    openIconWindow,
    setOpenIconWindow,
    onUpdateIconSelected
  } = useContext(AppContext); 

  const [allIconsState, setAllIconsState] = useState(allIconsArray);
  
  return (
    <div
      className={`${isMobileView ? 'w-[80%]' : 'w-[50%]'} ${openIconWindow ? 'fixed' : 'hidden'} h-[490px] bg-white shadow-md left-1/2 top-28 rounded-lg -translate-x-1/2 z-[70]`}
    >
      {/* Header */}
      <div className="flex justify-between items-center pt-7 px-7 mb-8">
        <div className="flex items-center gap-2">
          {/* Category Icon */}
          <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
            <AppsIcon
              sx={{ fontSize: 17 }}
              className="text-sky-400 text-[17px]"
            />
          </div>
          {/* Category Header */}
          <span className="font-semibold text-lg">Project Icons</span>
        </div>
        <CloseIcon
          onClick={() => setOpenIconWindow(false)}
          className="text-slate-400 text-[18px] cursor-pointer"
        />
      </div>
      {/* Message */}
      <div className="mx-7 w-[80%] text-[12px] text-slate-400">
        {`Please select the icons you'd like to use from the collection below:`}
      </div>
      {/* All Icons Area */}
      <div className="w-full flex flex-col items-center mt-3">
        <div className="border border-slate-100 w-[92%] h-[280px] overflow-auto rounded-md bg-slate-100">
          <AllIcons
            allIconsState={allIconsState}
            setAllIconsState={setAllIconsState}
          />
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-6 px-7 text-[12px]">
        <button
          onClick={() => setOpenIconWindow(false)}
          className="px-4 py-2 text-slate-500 border border-slate-200 rounded-md hover:bg-slate-200"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onUpdateIconSelected(
              allIconsState.filter((icon) => icon.isSelected)[0]
            );
            setOpenIconWindow(false);
          }}
          className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default IconWindow;
