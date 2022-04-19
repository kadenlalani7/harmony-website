import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Trial from './components/Trial/Trial';
import Footer from './components/Footer/SmallFooter';
import ProfilePage from './components/About/ProfilePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import {route}
function App() {

  return (
    <div className="bg-white h-max font-body ">
      <Navbar />        
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about_us" exact element={<About/>} />
            <Route path="/about_us/Miguel_Gutierez" exact element={<ProfilePage/>} />
          <Route path='/contact_us' exact element={<Contact/>}/>
          <Route path='/sign_up_for_trial' exact element={<Trial/>}/>
          {/* <Route path="/meet_the_team" exact element={<Team/>} /> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
