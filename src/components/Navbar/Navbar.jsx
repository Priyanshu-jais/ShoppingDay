import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";


 const Navbar = () => {
   const [user, setUser] = useState(null);

   useEffect(() => {
     const storedUser = localStorage.getItem("user");
     if (storedUser) {
       setUser(JSON.parse(storedUser));
     }
   }, []);

   const navigate = useNavigate();

   const logout = () => {
     localStorage.removeItem("user");
     setUser(null);
     navigate("/");
   };

   //cartItems
   const cartItem = useSelector((store) => store.cart);

   // Handle cart navigation
   const handleCartNavigation = () => {
     if (user) {
       navigate("/cart");
     } else {
       navigate("/login");
     }
   };

   // navList Data
   const navList = (
     <ul className="flex space-x-7 text-gray-200 font-medium text-md px-5 font-serif ">
       {/* Home */}
       <li>
         <Link to={"/"}>Home</Link>
       </li>

       {/* All Product */}
       <li>
         <Link to={"/allProduct"}>All Product</Link>
       </li>

       {/* Signup */}
       {!user ? (
         <li>
           <Link to={"/signup"}>Signup</Link>
         </li>
       ) : (
         ""
       )}
       {!user ? (
         <li>
           <Link to={"/login"}>Login</Link>
         </li>
       ) : (
         ""
       )}

       {/* User */}
       {user?.role === "user" && (
         <li>
           <Link to={"/userdashboard"}>{user?.name}</Link>
         </li>
       )}

       {/* Admin */}
       {user?.role === "admin" && (
         <li>
           <Link to={"/admindashboard"}>{user?.name}</Link>
         </li>
       )}

       {/* logout */}
       {user && (
         <li className="cursor-pointer" onClick={logout}>
           Logout
         </li>
       )}

       {/* Cart */}
       <li className="cursor-pointer" onClick={handleCartNavigation}>
         <Link to={"/cart"}>Cart[{cartItem.length}]</Link>
       </li>
     </ul>
   );
   return (
     <nav className="w-screen fixed z-50 h-[60px] bg-gray-900 border-b border-b-richblack-700 top-0">
       {/* main  */}
       <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
         {/* left  */}
         <div className="left ml-11 py-3 lg:py-0">
           <Link to={"/"}>
             <h2 className=" font-bold text-white text-2xl text-center font-serif italic">
               ShoppingDay😍
             </h2>
           </Link>
         </div>

         <div className="lg:flex lg:justify-between items-center gap-1 mr-2">
           {/* right  */}
           <div className="right flex justify-center mb-4 lg:mb-0">
             {navList}
           </div>

           {/* Search Bar  */}
           <SearchBar />
         </div>
       </div>
     </nav>
   );
 };

export default Navbar;
