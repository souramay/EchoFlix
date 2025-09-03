import { useSelector } from "react-redux"
import { logo } from "../utils/ImgConst"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";


const Header = () => {

  // hooks
const User =useSelector((state) => state.user);

const [showDropdown, setShowDropdown] = useState(false);

const HandleSignOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
   
  }).catch((error) => {
    // An error happened.
    console.error("Error signing out: ", error);
  });
}

const toggleDropdown = () => {
  setShowDropdown(!showDropdown);
};

  return (
    <div className="flex justify-between items-center">
      <div className="w-36 mx-2">
      <img alt="logo" src={logo}  className=" w-auto   "
      /></div>
     {User && <div className="flex p-2  justify-between items-center">
        <div className="w-12 m-2 rounded-full bg-red-300 flex justify-center item-center">
        <img
  alt="profile"
  src={User.photoURL || "./userProfile/1.png"}
  className="w-8 h-12 object-cover item-center m-full rounded-full "
/>
</div>
      <p className="font-bold text-red-950 text-lg">{User.displayName}</p>

      <button
            onClick={toggleDropdown}
            className="bg-transparent border-none cursor-pointer flex items-center"
            style={{ outline: "none" }}
          >
            <FiChevronDown
  className={`w-6   h-6 transition-transform duration-200 mr-9 text-black font-bold  ${showDropdown ? "-rotate-180" : ""}`}
  // color prop can be omitted if using Tailwind
/>
          </button>
      
      {showDropdown && (
        <ul className="absolute cursor-pointer right-0 mt-17 mr-7 bg-black opacity-60 rounded-t-sm">
            <li
              onClick={HandleSignOut}
              className="text-white p-2 "
            >
              Logout
            </li>
            </ul>
          )}

      </div>}
      
    </div>
  )
}


export default Header;    

