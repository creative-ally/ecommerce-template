import { Route, Routes, useLocation } from 'react-router-dom';
import './css/styles.css';
import SubCategory from './Categories/SubCategory';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Chat from './Components/ChatBot/Chat';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import Blog from './Categories/Blog/Blog';
import Category from './Categories/Category';
import BacktoTop from './Shared/BacktoTop/BacktoTop';
import Product from './Categories/Product';
import { useEffect, useState } from 'react';
import Loader from './Shared/Loader/Loader';
import Cart from './Components/ShoppingCart/Cart';
import AddBlogs from './Categories/Blog/AddBlogs';
import ShowroomLocator from './Pages/ShowroomLocator/ShowroomLocator';
import Help from './Pages/Help';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import AddProduct from './Pages/Dashboard/AddProduct';
import Orders from './Pages/Dashboard/Orders';
import Products from './Pages/Dashboard/Products';
import Dashboard from './Pages/Dashboard/Dashboard';
import Checkout from './Components/ShoppingCart/Checkout';
import SearchProducts from './SearchProducts/SearchProducts';
import SearchProdductsDetail from './SearchProdductsDetail/SearchProdductsDetail';
import Payment from './Pages/Dashboard/Payment';
import UserProfile from './Pages/Dashboard/UserProfile';
import UserOrders from './Pages/Dashboard/UserOrders';
import UserHistory from './Pages/Dashboard/UserHistory';
import { ToastContainer } from 'react-toastify';
<link href="/dist/output.css" rel="stylesheet"></link>;

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [1000]);
  }, []);

  const location = useLocation();

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="bg-white">
          {/* dynamically load navbar. when user goes /dashboard will see only dashboard navbar  */}
          {location.pathname.includes('/dashboard') ? null : <Navbar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/category/:category/:code" element={<SubCategory />} />
            <Route path="/product/:id" element={<Product />} />
            <Route
              path="/searchPrducts/:id"
              element={<SearchProdductsDetail />}
            />
            <Route path="/showroomLocator" element={<ShowroomLocator />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help" element={<Help />} />
            <Route path="/addBlogs" element={<AddBlogs />} />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/searchProducts" element={<SearchProducts />} />
            {/* dashboard routes */}
            <Route path="/dashboard" element={<DashboardHome />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="products" element={<Products />}></Route>
              <Route path="addproducts" element={<AddProduct />}></Route>
              <Route path="orders" element={<Orders />}></Route>
              {/* User Routes */}
              <Route path="userProfile" element={<UserProfile />}></Route>
              <Route path="userOrders" element={<UserOrders />}></Route>
              <Route path="UserHistory" element={<UserHistory />}></Route>
              <Route path="payment/:id" element={<Payment />} />
            </Route>
          </Routes>
          <ToastContainer />
          <Footer />
          <BacktoTop />
          <Chat></Chat>
        </div>
      )}
    </>
  );
}

export default App;
