import { Route, Routes } from 'react-router-dom';
import './css/styles.css';
import AllDoor from './Categories/Door/AllDoor';
import SubCategory from './Categories/SubCategory';
import Interior from './Categories/Interior/Interior';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Chat from './Components/ChatBot/Chat';
import AllDining from './Pages/DiningCategories/AllDining';
import DiningCategories from './Pages/DiningCategories/DiningCategories';
import Home from './Pages/Home/Home';
import CategoryList from './Pages/OfficeCategory/CategoryList';
import FsingleProduct from './Pages/OfficeCategory/FsingleProduct';
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
<link href="/dist/output.css" rel="stylesheet"></link>

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, [2000])
  }, []);

  return (
    <>
      {loading ? <Loader></Loader> :
        <div className=''>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/categorylist/:category"
              element={<CategoryList />}
            />
            <Route
              path="/furnitureSingleProduct/:id"
              element={<FsingleProduct />}
            />
            {/* <Route path="/doors" element={<AllDoor />} /> */}
            <Route path="/:category" element={<Category />} />
            <Route path="/category/:category/:code" element={<SubCategory />} />
            <Route path="/product/:id" element={<Product />} />
            {/* <Route path="/dining" element={<AllDining />} />
        <Route path="/interior" element={<Interior />} /> */}
            <Route path="/doors" element={<AllDoor />} />
            <Route path="/doors/:id" element={<SubCategory />} />
            <Route path="/dining" element={<AllDining />} />
            <Route path="/interior" element={<Interior />} />
            <Route path="/showroomLocator" element={<ShowroomLocator />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help" element={<Help />} />
            <Route path="/addBlogs" element={<AddBlogs />} />
            <Route path="/dining/:id" element={<DiningCategories />} />

            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/cart' element={<Cart />} />
            {/* dashboard routes */}
            <Route path='/dashboard' element={<DashboardHome />}>
              <Route index element={<Dashboard />}></Route>
              <Route path='products' element={<Products />}></Route>
              <Route path='addproducts' element={<AddProduct />}></Route>
              <Route path='orders' element={<Orders />}></Route>
            </Route>

      </Routes>
      <Footer />
      <BacktoTop/>
      {/* <Chat></Chat> */}
    </div>
    }
    </>
  );
}

export default App;
