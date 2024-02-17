import React from 'react'
import ExamsFilter from './ExamsFilter'
import ExamsCard from './ExamsCard'

const Exams = () => {
  return (
    <div className="exams-section">
      <div className="exams-section-text">
        <h6>Ən çox işlənənlər</h6>
        <h1>İmtahanlar</h1>
      </div>
      <div className="exams-section-main">
        <div className="exams-section-left">
          <ExamsFilter />
        </div>
        <div className="exams-section-right">
          <div className="exams-cards-left">
          <ExamsCard className="exams-section-card"/>
          <ExamsCard className="exams-section-card"/>
          <ExamsCard className="exams-section-card"/>
          </div>
          <div className="exams-cards-right">
          <ExamsCard className="exams-section-card"/>
          <ExamsCard className="exams-section-card"/>
          <ExamsCard className="exams-section-card"/>
          <button className='daha-cox-btn'>Daha çox</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Exams