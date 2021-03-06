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
import RequireAdmin from './pages/Authentication/RequireAdmin';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import Payment from "./pages/Dashboard/Payment";
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProducts from './pages/Dashboard/ManageProducts';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import Blogs from './pages/Blogs';
import MyPortfolio from './pages/MyPortfolio';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-2'>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
            <Route path='/dashboard/my-orders' element={<MyOrders />} />
            <Route path="/dashboard/add-review" element={<AddReview />} />
            <Route path="/dashboard/add-product" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
            <Route path="/dashboard/manage-products" element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
            <Route path="/dashboard/manage-all-orders" element={<RequireAdmin><ManageAllOrders /></RequireAdmin>} />
            <Route path="/dashboard/make-admin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
            <Route path="/dashboard/my-profile" element={<MyProfile />} />
          </Route>
          <Route path="/purchase/:id" element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          } />
          <Route path="/payment/:id" element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          } />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/my-portfolio" element={<MyPortfolio />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
