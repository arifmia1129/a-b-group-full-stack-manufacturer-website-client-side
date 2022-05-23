import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Home from './pages/Home/Home';
import Navbar from "./pages/Shared/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/Shared/NotFound';
import Purchase from './pages/Purchase/Purchase';
import RequireAuth from './pages/Authentication/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-2'>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purchase/:id" element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
