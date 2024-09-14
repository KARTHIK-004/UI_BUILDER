import React from "react";
import { Link } from "react-router-dom";
import DrawIcon from "@mui/icons-material/Draw";
import { useAuth } from "@clerk/clerk-react";

function Navbar() {
  const { userId } = useAuth();

  return (
    <nav className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        {/* Icon Container */}
        <div className="bg-sky-500 flex items-center justify-center p-[6px] rounded-md">
          {/* Icon */}
          <div className="w-[26px] h-[26px] items-center justify-center flex">
            <DrawIcon
              sx={{ fontSize: 20 }}
              className="text-white text-[28px]"
            />
          </div>
        </div>

        {/* App Name */}
        <div className="flex gap-1 text-[22px]">
          <span className="font-bold text-sky-500">UI</span>
          <span className="font-bold text-slate-700">Shelf</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
        {!userId ? (
          <>
            <Link to="/register">
              <button className="max-sm:w-full text-sm border border-sky-500 text-white bg-sky-500 p-[8px] px-6 rounded-md">
                Sign In
              </button>
            </Link>

            <Link to="/login">
              <button className="max-sm:w-full text-sm border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white p-[8px] px-6 rounded-md">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <Link to="/dashboard">
            <button className="max-sm:w-full text-sm border bg-sky-500 text-white hover:bg-sky-600 p-[8px] px-6 rounded-md">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
