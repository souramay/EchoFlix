import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

const User = useSelector((state) => state.user);
  return User ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;