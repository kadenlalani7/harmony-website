import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import {route}
function App() {
  return (
    <div className="bg-[#1C5367] h-max space-y-4">
      <Navbar />        
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/aboutus" exact element={<About/>} />
          {/* <Route path="/meet_the_team" exact element={<Team/>} /> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
