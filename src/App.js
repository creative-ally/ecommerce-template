import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CategoryList from './Pages/OfficeCategory/CategoryList';
<link href="/dist/output.css" rel="stylesheet"></link>

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/categorylist/:category"
          element={<CategoryList/>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
