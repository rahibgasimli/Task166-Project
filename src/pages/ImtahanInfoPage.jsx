import React from 'react'
import Imtahanphoto from '../components/imtahan-info/Imtahanphoto'
import ImtahanMelumat from '../components/imtahan-info/ImtahanMelumat'
import ImtahanNetice from '../components/imtahan-info/ImtahanNetice'
import ImtahanReyler from '../components/imtahan-info/ImtahanReyler'
import CommentsList from '../components/imtahan-info/CommentsList'

const ImtahanInfoPage = () => {
  return (
    <>
    <div className="imtahan-info-page">

        <Imtahanphoto/>
        <div className="imtahan-melumat-section">
            <ImtahanMelumat/>
            <ImtahanNetice/>
        </div>
        <ImtahanReyler/>
        <CommentsList/>
        {/* <button className='daha-cox-page'>Daha çox</button> */}
    </div>
    </>
  )
}

export default ImtahanInfoPage