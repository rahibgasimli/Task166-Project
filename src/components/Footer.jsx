import React from 'react'

import logo from "../assets/images/navbar/logo.svg"
import mailLogo from "../assets/images/footer/mail-logo.svg"
import phoneLogo from "../assets/images/footer/phone-logo.svg"
import socialMedias from "../assets/images/footer/social-medias.svg"
import { SlArrowDown } from "react-icons/sl";


const Footer = () => {
  return (
    <div className="footer-section">
        <div className="footer-top">
            <div className="footer-top-left">
                <img className="footer-logo" src={logo} alt="" />
                <span><img src={mailLogo} alt="" />Nümunə@gmail.com</span>
                <span><img src={phoneLogo} alt="" />000 000 00 00</span>
            </div>

            <div className="footer-top-right">
                <nav className="footer-links">
                    <a href="#">Haqqımızda</a>
                    <a href="#">Kitablar</a>
                    <a href="#">İmtahanlar</a>
                    <a href="#">Bizimlə əlaqə</a>
                    <span>AZ <SlArrowDown className="footer-arrow"/> </span>
                </nav>

                <div className="social-medias">
                    <img src={socialMedias} alt="" />
                </div>
            </div>

        </div>

        <div className="footer-bottom">
            <span>© 2024, şirkərin adı. Bütün hüquqlar qorunur</span>
        </div>
        
    </div>
  )
}

export default Footer