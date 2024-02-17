import React from 'react'

import imtahanPhoto from "../../assets/images/imtahan-info/background.svg"

const Imtahanphoto = () => {
  return (
    <div className="imtahan-info-background">
        <div className="imtahan-info-img">
          <img src={imtahanPhoto} alt="" />
        </div>
        <div className="imtahan-info-text">
          <button className="imtahan-al-btn">1 Azn-imtahanı al</button>
        </div>
    </div>
  )
}

export default Imtahanphoto