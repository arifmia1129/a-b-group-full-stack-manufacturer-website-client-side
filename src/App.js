import './App.css';
import Home from './pages/Home/Home';
import Navbar from "./pages/Shared/Navbar";
function App() {
  return (
    <div className='max-w-7xl mx-auto px-2'>
      <Navbar>
        <Home />
      </Navbar>
    </div>
  );
}

export default App;
