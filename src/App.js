import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Authentication/Register';
import Home from './pages/Home/Home';
import Navbar from "./pages/Shared/Navbar";
function App() {
  return (
    <div className='max-w-7xl mx-auto px-2'>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
