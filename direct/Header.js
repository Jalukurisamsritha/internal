import React from 'react';
import {Link} from 'react-router-dom'; 

const Header = () => {
 return (
 <header>
 <h1>My Website</h1>
 {/* <Router>
    <Routes>
        <nav>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/About" element={<About/>}>About</Route>
        </nav>
    </Routes>
 </Router> */}
 <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/About">About</Link></li>
 </ul>
 
 </header>
 );
};
export default Header;