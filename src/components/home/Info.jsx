import React from 'react'

import backImg from "../../assets/images/home-info/main.svg"

const Info = () => {
  return (
    <div className="home-info">
      <div className="back-img">
        <img src={backImg} alt="" className="back-img" />
      </div>
      <div className="info-text">
        <h1>İmtahanlar</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br /> the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of <br />type and scrambled it</p>
      </div>
    </div>
  )
}

export default Info