import { useSelector } from "react-redux"
import { logo } from "../utils/constants/ImgConst"
import { signOut } from "firebase/auth";


import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { auth } from "../utils/constants/GetAuthfirebase";


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
    <div className="flex justify-between items-center z-20 relative">
      <div className="w-36 mx-2">
      <img alt="logo" src={logo}  className=" w-auto   "
      /></div>
     {User && <div className="flex p-2 gap-4 justify-between items-center">
        <div className="w-14 h-14 m-2  rounded-full bg-red-950 flex justify-center item-center">
        <img
  alt="profile"
  src={User.photoURL || "./userProfile/1.png"}
  className="w-full h-full object-cover item-center  m-full rounded-full "
/>
</div>
      <p className="font-bold text-white text-lg">{User.displayName}</p>

      <button
            onClick={toggleDropdown}
            className="bg-transparent border-none cursor-pointer flex items-center"
            style={{ outline: "none" }}
          >
            <FiChevronDown
  className={`w-6   h-6 transition-transform duration-200 mr-9 text-white font-bold  ${showDropdown ? "-rotate-180" : ""}`}
  // color prop can be omitted if using Tailwind
/>
          </button>
      
      {showDropdown && (
        <ul className="absolute  cursor-pointer right-0 mt-21 mr-7 bg-[#B71C1C]   rounded-lg onhover:scale-105 ">
            <li
  onClick={HandleSignOut}
  className="text-white p-2 font-sans font-bold"
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

