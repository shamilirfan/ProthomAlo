import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Footer from "./Footer";
import Home from './Home';
import FullPage from "./FullPage";
import Call from "./Call";

function App() {
  return (
    <div className='w-full h-full'>
      <Call />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<FullPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
