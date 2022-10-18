import { Route, Routes } from 'react-router-dom';
import AllDoor from './Categories/Door/AllDoor';
import SubCategory from './Categories/Door/SubCategory';
import Interior from './Categories/Interior/Interior';
import Chat from './Components/ChatBot/Chat';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
<link href="/dist/output.css" rel="stylesheet"></link>

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doors" element={<AllDoor />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/doors/:id" element={<SubCategory />} />
      </Routes>
      <Footer />
      <Chat></Chat>
    </div>
  );
}

export default App;
