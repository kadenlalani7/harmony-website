import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Careers from './components/Careers/Careers'
import Trial from './components/Trial/Trial';
import Footer from './components/Footer/SmallFooter';
import ProfileMG from './components/About/Miguel/ProfilePage';
import ProfileAI from './components/About/Arthur/ProfilePage';
import ProfileKL from './components/About/Kaden/ProfilePage';
import Apply from './components/Careers/Apply';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import {route}
const App = () => {

  return (
    <div className="bg-white h-max font-body ">
      <Navbar id='nav' />        
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about_us" exact element={<About/>} />
            {/* Memebers of the team section */}
            <Route path="/about_us/Miguel_Gutierrez" exact element={<ProfileMG/>} />
            <Route path="/about_us/Arthur_Imai" exact element={<ProfileAI/>} />
            <Route path="/about_us/Kaden_Lalani" exact element={<ProfileKL/>} />
          <Route path='/careers' exact element={<Careers/>}/>
          <Route path='/sign_up_for_trial' exact element={<Trial/>}/>
          <Route path='/careers/apply' exact element={<Apply/>}/>
          {/* <Route path="/meet_the_team" exact element={<Team/>} /> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
