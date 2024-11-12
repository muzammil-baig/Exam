// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import './Simple.css'
// import './Main.css'
// // This is Advance One! And The Simple.css is Simpler One
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Gallery from './Help';
// import Services from './Services';

// function Main() {
//   return (
//     <Router>
//       <div className="app">
//         <nav className="navbar">
//           <div className="left">
//             <span className="brand">Baig</span>
//           </div>
//           <ul className="nav-links">
//             <li><Link to="/" className="nav-link">Home</Link></li>
//             <li><Link to="/About" className="nav-link">About</Link></li>
//             <li><Link to="/Contact" className="nav-link">Contact</Link></li>
//             <li><Link to="/Services" className="nav-link">Services</Link></li>
//             <li><Link to="/Gallery" className="nav-link">Gallery</Link></li>
//           </ul>
//           <div className="right">
//             <button className="login-box">Login</button>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/Services" element={<Services />} />
//           <Route path="/Gallery" element={<Gallery />} />
//         </Routes>
//         <footer>
//             <p>&copy; 2024 My App. All rights reserved.</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default Main;

// Practiced One
// import React from 'react'
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// import './Simple.css'
// import Home from "./Home";
// import About from "./About"
// import Contact from "./Contact"
// import Services from './Services';
// import Gallery from './Help';

// const Main = () => {
//   return(
//     <BrowserRouter>
//       <div className="app">
//         <nav className="navbar">
//           <div className="left">
//             <span className="brand">Baig</span>
//           </div>
//           <ul className="nav-links">
//             <li>
//               <Link to="/" className='nav-link'>Home</Link>
//             </li>
//             <li>
//               <Link to="/about" className='nav-link'>About</Link>
//             </li>
//             <li>
//               <Link to="/contact" className='nav-link'>Contact</Link>
//             </li>
//             <li>
//               <Link to="/service" className='nav-link'>Services</Link>
//             </li>
//             <li>
//               <Link to="/gallery" className='nav-link'>Gallery</Link>
//             </li>
//           </ul>
//           <div className="right">
//             <button className="login-box">Login</button>
//           </div>
//         </nav>
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/about' element={<About />} />
//             <Route path='/contact' element={<Contact />} />
//             <Route path='/service' element={<Services />} />
//             <Route path='/gallery' element={<Gallery />} />
//           </Routes>
//           <footer>
//             <p>&copy; 2024 My App. All Rights Reserved</p>
//           </footer>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default Main;

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Main.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Gallery from "./Help";
import footer from './footer.png'

const Main = () => {
  return (
    // <BrowserRouter>
    //   <div className="app">
    //     <nav className="navbar">
    //       <div className="left">
    //         <span className="brand">Baig</span>
    //       </div>
    //       <ul className="nav-links">
    //         <li>
    //           <Link to="/" className="nav-link">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/About" className="nav-link">
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/Contact" className="nav-link">
    //             Support
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/Services" className="nav-link">
    //             Services
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/Gallery" className="nav-link">
    //             Gallery
    //           </Link>
    //         </li>
    //       </ul>
    //       <div className="right">
    //         <button className="login-box">Login</button>
    //       </div>
    //     </nav>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/About" element={<About />} />
    //       <Route path="/Contact" element={<Contact />} />
    //       <Route path="/Services" element={<Services />} />
    //       <Route path="/Gallery" element={<Gallery />} />
    //     </Routes>
    //     <footer>
    //       <img src={footer} alt={"FooterImage"} />
    //     </footer>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="left">
            <div className="brand">Baig</div>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/About" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/Support" className="nav-link">Support</Link>
            </li>
            <li>
              <Link to="/Service" className="nav-link">Service</Link>
            </li>
            <li>
              <Link to="/Gallery" className="nav-link">Gallery</Link>
            </li>
          </ul>
          <div className="right">
            <button type="sunmit" className="login-box">Login</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Support" element={<Contact/>}/>
          <Route path="/Service" element={<Services/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
        </Routes>
      </div>
      <footer>
        <img src={footer} alt="" />
      </footer>
    </BrowserRouter>
  );
};

export default Main;
