import React from 'react'
import { IoIosTime } from "react-icons/io";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { FaCalendar } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

const ImtahanMelumat = () => {
  return (
    <div className="imtahan-melumat-card">
        <h4>Məlumat</h4>
        <div className="melumat-info">
            <span><IoIosTime/>45 dəqiqə</span>
            <span><HiClipboardDocumentList/>20 sual</span>
            <span><FaCalendar/>22.05.2023 hazırlanıb</span>
        </div>
        <h3>Suallar</h3>
        <h6><TbPointFilled/>Azərbaycan dili-10 sual</h6>
        <h6><TbPointFilled/>Riyaziyyat-10 sual</h6>
    </div>
  )
}

export default ImtahanMelumat