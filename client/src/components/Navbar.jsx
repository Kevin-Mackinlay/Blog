import React from 'react';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=trips">
            <h6>TRIPS</h6>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>FOOD</h6>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>SPORT</h6>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>DESIGN</h6>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <span>Mack</span>
          <span>Logout</span>
          <span className='write'> <Link className='link' to="/write">Write</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
