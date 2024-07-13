import {Button} from '@material-tailwind/react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from './Pages/Home/HomePage';
import { NoPage } from './Pages/noPage/NoPage';
import  ProductInfo  from './Pages/ProductInfo/ProductInfo';
import {ScrollTop}  from './components/ScrollTop/ScrollTop';
import  CartPage  from './Pages/CartPage/CartPage';
import  AllProduct  from './Pages/AllProduct/AllProduct';
import Login from './Pages/registration/Login';
import  Signup  from './Pages/registration/Signup';
import  Userdashboard  from './Pages/user/Userdashboard';
import  AdminDashboard  from './Pages/Admin/AdminDashboard';
import AddProductPage from './components/Admin/AddProduct';
import UpdateProductPage from './components/Admin/UpdateProduct';
import  Mystate  from './context/Mystate';
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin';
import { ProtectedRouteForUser } from './protectedRoute/ProtectedRouteForUser';
import { CategoryPage } from './Pages/category/CategoryPage';
function App() {

  return (
    <div className="overflow-x-hidden">
      <Mystate>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/productInfo/:id" element={<ProductInfo />} />
            <Route path="/category/:categoryname" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/allProduct" element={<AllProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/userdashboard"
              element={
                <ProtectedRouteForUser>
                  <Userdashboard />
                </ProtectedRouteForUser>
              }
            />
            <Route
              path="/admindashboard"
              element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard />
                </ProtectedRouteForAdmin>
              }
            />

            <Route
              path="/addProduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProductPage />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateProduct/:id"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProductPage />
                </ProtectedRouteForAdmin>
              }
            />
          </Routes>
          <Toaster />
        </Router>
      </Mystate>
    </div>
  );
}

export default App
