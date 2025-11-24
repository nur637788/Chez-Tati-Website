
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
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
import FavoritePage from "./components/HomePage/CartPage/FavoritePage";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import FAQs from "./components/Footer/FAQs";
import EditProfile from "./components/ProfilePage/EditProfile";
import ReviewPage from "./components/ProfilePage/ReviewPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
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
        // Cart or Favorite Page
        { path: "/cart", element: <Cart /> },
        { path: "/favorite", element: <FavoritePage /> },
        // User Login na kore Checkout korte parbe na
        { path: "/singlecheckout", element: <ProtectedRoute> <SingleCheckout /> </ProtectedRoute> },
        { path: "/allcheckout", element: <ProtectedRoute> <AllCheckout /> </ProtectedRoute> },
        // Profile or Account
        { path: "/profile", element: <Profile /> },
        { path: "/editprofile", element: <ProtectedRoute> <EditProfile /> </ProtectedRoute> },
        { path: "/review", element: <ProtectedRoute><ReviewPage /> </ProtectedRoute> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/forgetpass", element: <ForgetPass /> },
        { path: "/newpass", element: <NewPass /> },
        { path: "/admin", element: <ProtectedRoute> <Admin /> </ProtectedRoute> },
        // Footer Link
        { path: "/privacypolicy", element: <PrivacyPolicy /> },
        { path: "/admin", element: <Admin /> },
        { path: "/faqs", element: <FAQs /> },





      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
