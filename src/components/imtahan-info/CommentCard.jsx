import React from 'react'

import dordUlduz from "../../assets/images/imtahan-info/4star.svg"


const CommentCard = () => {
  return (
    <div className="comment-card">
        <h3>İlaha Nazarova</h3>
        <span><img src={dordUlduz} alt="" /> 2 gün əvvəl</span>
        <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard </p>
    </div>
  )
}

export default CommentCard