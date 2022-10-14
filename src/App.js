import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
<link href="/dist/output.css" rel="stylesheet"></link>

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
