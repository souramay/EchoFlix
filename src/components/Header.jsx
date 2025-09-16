import { useDispatch, useSelector } from "react-redux"
import { logo } from "../utils/constants/ImgConst"
import { signOut } from "firebase/auth";
import { resetTvvideoId } from "../utils/redux/tvdetailslice";
import { resetvideoId} from "../utils/redux/MovieSlice";

import { useEffect, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

import { setSearchClicked } from "../utils/redux/GptSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  // hooks
  const User = useSelector((state) => state.user);
  const searchClicked = useSelector((state) => state.gpt.SearchClicked);
  const navigate = useNavigate();
  const locate = useLocation();
  

  const dispatch = useDispatch();

  const [showDropdown, setShowDropdown] = useState(false);

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out: ", error);
      });
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSearchClick = () => {
    dispatch(setSearchClicked());
    navigate("/search");
  };

  useEffect(() => {
    if (
      locate.pathname === "/browse" ||
      locate.pathname.startsWith("/detail/") ||
      locate.pathname === "/tvBrowse" ||
      locate.pathname.startsWith("/tvBrowse/") ||
      locate.pathname.startsWith("/tvdetail/")
    ) {
      dispatch(setSearchClicked());
    }
  }, [locate.pathname, dispatch]);

  return (
    <div className="flex justify-between items-center z-20 relative -mt-4 ">
      <div
        className="w-36 mx-4 cursor-pointer"
        onClick={() => {
          navigate("/browse");
          if(locate.pathname.startsWith("/tvBrowse") || locate.pathname.startsWith("/tvdetail/")){
            dispatch(resetTvvideoId());
          dispatch(resetvideoId());
          }
          
        }}
      >
        <img alt="logo" src={logo} className="w-auto" />
      </div>

      <div className="ml-auto mr-2 sm:mr-4 flex items-center gap-1 sm:gap-3 md:gap-4 min-w-0">
        {(locate.pathname === "/browse" ||
          locate.pathname.startsWith("/detail/") ||
          locate.pathname === "/tvBrowse" ||
          locate.pathname.startsWith("/tvBrowse/") ||
          locate.pathname.startsWith("/tvdetail/")) && (
          <button
            onClick={handleSearchClick}
            aria-label="GPT Search"
            className="relative text-white text-sm rounded-full h-10 w-10 sm:w-40 px-0 sm:pl-10 sm:pr-3 flex items-center justify-center bg-transparent sm:bg-gray-800 sm:hover:bg-gray-700 mr-0 sm:mr-3"
          >
            <FiSearch className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span className="hidden sm:block w-full text-center ml-2">GPT Search</span>
          </button>
        )}
        {User && (
          <>
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base truncate max-w-[8rem] md:max-w-[14rem] mr-1">
              {User.displayName ?? "User"}
            </span>
            <img
              src={User.photoURL}
              alt="Profile"
              className="h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full object-cover ring-2 ring-gray-800 bg-gray-900 bg-gradient-to-br from-red-900 shrink-0"
            />
            <button
              onClick={toggleDropdown}
              className="bg-transparent border-none cursor-pointer flex items-center focus:outline-none ml-1 sm:ml-0"
            >
              <FiChevronDown
                className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-200 ${
                  showDropdown ? "-rotate-180" : ""
                } mr-1 sm:mr-3`}
              />
            </button>
            {showDropdown && (
              <ul className="absolute right-2 top-24 bg-[#B71C1C] rounded-lg cursor-pointer">
                <li
                  onClick={HandleSignOut}
                  className="text-white p-2 font-sans font-bold"
                >
                  Logout
                </li>
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
