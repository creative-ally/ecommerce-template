import { Route, Routes } from 'react-router-dom';
import AllDoor from './Categories/Door/AllDoor';
import SubCategory from './Categories/Door/SubCategory';
import Interior from './Categories/Interior/Interior';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp'
import Chat from './Components/ChatBot/Chat';
import AllDinning from './Pages/DinningCategories/AllDinning';
import DinningCategories from './Pages/DinningCategories/DinningCategories';
import Help from './Pages/Help';
import Home from './Pages/Home/Home';
import CategoryList from './Pages/OfficeCategory/CategoryList';
import FsingleProduct from './Pages/OfficeCategory/FsingleProduct';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
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
        <Route path="/dinning" element={<AllDinning />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/dinning/:id" element={<DinningCategories />} />

        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/help' element={<Help />} />
      </Routes>
      <Footer />
      <Chat></Chat>
    </div>
  );
}

export default App;
