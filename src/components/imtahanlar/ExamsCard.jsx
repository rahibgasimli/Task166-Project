import React from 'react'

import { IoIosTime } from "react-icons/io";
import examStars from "../../assets/images/exams/stars.svg" 
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const ExamsCard = () => {
  return (
    <div className="exams-card">
        <div className="exams-card-top">
            <h3>3-cü sinif imtahanı</h3>
            <div className="card-reyting">
                <span><IoIosTime className='card-time-icon'/>45 dəqiqə</span>
                <span><img src={examStars} alt="" className='card-stars-icon'/>2 rəy</span>
            </div>
            <div className="card-suallar">
                <h5>Suallar</h5>
                <span><TbPointFilled/>10 sual- Azərbaycan dili</span>
                <span><TbPointFilled/>10 sual-Riyaziyyat</span>
            </div>
        </div>

        <div className="exams-card-bottom">
            <div className="exams-card-filter">
            <span>İbtidai sinif</span>
            <span>3-cü sinif</span>
            </div>
            <button><Link to="/page2">1 AZN- indi al</Link></button>
        </div>

    </div>
  )
}

export default ExamsCard