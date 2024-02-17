import React from 'react'

import { RiMessage2Fill } from "react-icons/ri";
import besUlduz from "../../assets/images/imtahan-info/5star.svg"

const ImtahanReyler = () => {
  return (
    <div className="imtahan-reyler">
        <h1>Rəylər</h1>
        <div className="imtahan-reyler-card">
            <div className="reyler-card-left">
                <h2>4.9</h2>
                <span><RiMessage2Fill/>440 rəy</span>
            </div>

            <div className="reyler-card-right">
                <img src={besUlduz} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ImtahanReyler