import React from 'react'

import navbarLogo from "../assets/images/navbar/logo.svg"
import { SlArrowDown } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="navbar-section">
        <div className="navbar-logo">
            <img src={navbarLogo} alt="" />
        </div>

        <nav className="navbar-nav">
            <a href="#">Haqqımızda</a>
            <a href="#">Kitablar</a>
            <a href="#">İmtahanlar</a>
            <a href="#">Bizimlə əlaqə</a>
            <span>AZ <SlArrowDown className="asagi-oxu"/> </span>
        </nav>

        <div className="navbar-buttons">
            <button className="btn-login">Daxil ol</button>
            <button className="register">Qeydiyyat</button>
        </div>

    </div>
  )
}

export default Navbar