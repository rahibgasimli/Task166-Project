import React from 'react'

import birinciYer from "../../assets/images/imtahan-info/1.svg"
import ikinciYer from "../../assets/images/imtahan-info/2.svg"
import ucuncuYer from "../../assets/images/imtahan-info/3.svg"
import dorduncuYer from "../../assets/images/imtahan-info/4.svg"
import besinciYer from "../../assets/images/imtahan-info/5.svg"
import { TbPointFilled } from "react-icons/tb";
import { LuArrowRight } from "react-icons/lu";


const ImtahanNetice = () => {
  return (
    <div className="imtahan-netice-card">
        <h1>İmtahan üzrə nəticələr</h1>
        <div className="imtahan-neticeler">


        <div className="imtahan-netice">
            <span><img src={birinciYer} alt="" className='tutulanYer' />Ilahə Nəzərova</span>
            <span className="imtahan-netice-time">20 bal <TbPointFilled/>  -12 dəq  <a href="#"><LuArrowRight/></a></span>
        </div>

        <div className="imtahan-netice">
            <span><img src={ikinciYer} alt="" className='tutulanYer'/>Ilahə Nəzərova</span>
            <span className="imtahan-netice-time">19 bal <TbPointFilled/>  -12 dəq  <a href="#"><LuArrowRight/></a></span>
        </div>

        <div className="imtahan-netice">
            <span><img src={ucuncuYer} alt="" className='tutulanYer'/>Ilahə Nəzərova</span>
            <span className="imtahan-netice-time">18 bal <TbPointFilled/>  -00 dəq  <a href="#"><LuArrowRight/></a></span>
        </div>

        <div className="imtahan-netice">
            <span><img src={dorduncuYer} alt="" className='tutulanYer'/>Ilahə Nəzərova</span>
            <span className="imtahan-netice-time">17 bal <TbPointFilled/>  -12 dəq  <a href="#"><LuArrowRight/></a></span>
        </div>

        <div className="imtahan-netice">
            <span><img src={besinciYer} alt="" className='tutulanYer'/>Ilahə Nəzərova</span>
            <span className="imtahan-netice-time">20 bal <TbPointFilled/>  -12 dəq  <a href="#"><LuArrowRight/></a></span>
        </div>
        </div>
    </div>
  )
}

export default ImtahanNetice