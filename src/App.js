import { Route, Routes } from 'react-router-dom';
import AllDoor from './Categories/Door/AllDoor';
import SubCategory from './Categories/Door/SubCategory';
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
        <Route path="/doors/:id" element={<SubCategory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
