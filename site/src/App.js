import logo from './pages/img/bres.png';
import './App.css';
import {Route, Routes} from "react-router-dom"
import { Link } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import GitLogo from './pages/img/GitHubLogo.png'
import LinkLogo from './pages/img/LinkInLogo.png'

function App() {
  return (
    <div>      
      <nav>
      <ul class="grid nav-grid">
        <li class="logo col-1 col-1-m"><a href="/"><img src={ logo }></img></a></li>
        <li class="col-8 col-2-m hide-s"></li>
        <li id="nav-home" class="link col-1 col-1-m "><Link to="/">Home</Link></li>
        <li id="nav-about" class="link col-1 col-1-m "><Link to="/About">About</Link></li>
        <li id="nav-contact" class="link col-1 col-1-m "><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav> 
    
    <div class="grid-overlay">
        <div class="grid">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>


    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
    </Routes>

    <footer>
      <div class="grid center">
        <div class="col-1 col-1-m col-1-s">
          <img src={logo}></img>
        </div>
        <div class="col-1 hide-m"></div>
        <div class="col-4 col-4-m col-3-s">
          <p>
            "Pleasure in the job puts perfection in the work." - Aristotle
          </p>
          <ul class="contact">
            <li><Link to="/Contact" class="button">Get in touch</Link></li>
            <li><a href="https://www.linkedin.com/in/cameron-haynes-778056233/" target="_blank" class="social"><img src={LinkLogo} alt="LinkedIn" width="30px" height="30px"></img></a></li>
            <li><a href="https://github.com/CamH04" target="_blank" class="social"><img src={ GitLogo } alt="github" width="30px" height="30px"></img></a></li>
          </ul>
        </div>
        <div class="col-2 hide-m"></div>
      </div>
    </footer>


    </div> 
  );
}

export default App;
