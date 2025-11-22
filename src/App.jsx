
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import ProductDetails from './components/HomePage/ProductDetails';
import NewProducts from "./components/HomePage/NewProducts";
import Discount from './components/HomePage/Discount';
import Popular from './components/HomePage/Popular'
import AllProducts from "./components/HomePage/AllProducts";
import Cart from "./components/HomePage/CartPage/AddToCartPage";
import SingleCheckout from "./components/HomePage/CartPage/SingleCheckout";
import AllCheckout from "./components/HomePage/CartPage/AllCheckout";
import Profile from "./components/ProfilePage/Profile";
import Login from "./components/LoginPage/Login";
import Register from "./components/LoginPage/Register";
import ForgetPass from "./components/LoginPage/ForgetPass";
import NewPass from "./components/LoginPage/NewPass";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/ProfilePage/Dasboard/Admin";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/products", element: <Products /> },
        { path: "/product/:id", element: <ProductDetails /> },
        { path: "/contact", element: <ProtectedRoute> <Contacts /> </ProtectedRoute> },
        { path: "/newProducts", element: <NewProducts /> },
        { path: "/discount", element: <Discount /> },
        { path: "/Popular", element: <Popular /> },
        { path: "/allproducts", element: <AllProducts /> },
        { path: "/cart", element: <Cart /> },
        // User Login na kore Checkout korte parbe na
        { path: "/singlecheckout", element: <ProtectedRoute> <SingleCheckout /> </ProtectedRoute> },
        { path: "/allcheckout", element: <ProtectedRoute> <AllCheckout /> </ProtectedRoute> },
        // Profile
        { path: "/profile", element: <Profile /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/forgetpass", element: <ForgetPass /> },
        { path: "/newpass", element: <NewPass /> },
        { path: "/admin", element: <Admin /> },




      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
