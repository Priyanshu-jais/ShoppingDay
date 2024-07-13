import { Navigate } from "react-router-dom";


export const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")); 

  if (user?.role === "admin") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
