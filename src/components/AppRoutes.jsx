import { useSelector } from "react-redux";
import { Routes, Route} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const AppRoutes = () => {
  const UserDetails = useSelector((state) => state.user);

  // if (!authChecked) {
  //   return (
  //     <div className="flex items-center justify-center h-screen text-white">Loading...</div>
  //   );
  // }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/browse"
        element={<Browse />}
      />
    </Routes>
  );
};

export default AppRoutes;