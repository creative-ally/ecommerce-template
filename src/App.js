import { Route, Routes } from 'react-router-dom';
import AllDoor from './Categories/Door/AllDoor';
import SubCategory from './Categories/Door/SubCategory';
import Interior from './Categories/Interior/Interior';
import SignIn from './Components/Auth/SignIn';

import Chat from './Components/ChatBot/Chat';
import AllDining from './Pages/DiningCategories/AllDining';
import DiningCategories from './Pages/DiningCategories/DiningCategories';
import Home from './Pages/Home/Home';
import CategoryList from './Pages/OfficeCategory/CategoryList';
import FsingleProduct from './Pages/OfficeCategory/FsingleProduct';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import SignUp from './Components/Auth/SignUp';
<link href="/dist/output.css" rel="stylesheet"></link>

function App() {
  return (
    <div>
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
        <Route path="/doors" element={<AllDoor />} />
        <Route path="/doors/:id" element={<SubCategory />} />
        <Route path="/dining" element={<AllDining />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/blog" element={<Interior />} />
        <Route path="/dining/:id" element={<DiningCategories />} />

        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

      </Routes>
      <Footer />
      <Chat></Chat>
    </div>
  );
}

export default App;
