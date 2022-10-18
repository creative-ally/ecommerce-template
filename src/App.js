import { Route, Routes } from 'react-router-dom';
import AllDoor from './Categories/Door/AllDoor';
import SubCategory from './Categories/Door/SubCategory';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Chat from './Components/ChatBot/Chat';
import Home from './Pages/Home/Home';
import CategoryList from './Pages/OfficeCategory/CategoryList';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
<link href="/dist/output.css" rel="stylesheet"></link>

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/categorylist/:category"
          element={<CategoryList/>}
        />
        <Route path="/doors" element={<AllDoor />} />
        <Route path="/doors/:id" element={<SubCategory />} />

        <Route path ='/signin' element={<SignIn/>}/>
        <Route path ='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer />
      <Chat></Chat>
    </div>
  );
}

export default App;
