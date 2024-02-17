import React from 'react'

const ExamsFilter = () => {
  return (
    <div className="exams-filter">
        <h5>Filter</h5>
        <div className="filter-category">
            <h6>Kategoriyalar</h6>
            <button className='btn-qara'>Ibtidai sinif</button>
            <button>Buraxılış</button>
            <button>Blok</button>
            <button>Təkmilləşdirmə</button>
            <button>Liseylərə</button>
            <button>Magistratura</button>
            <button>Olimpiada</button>
            <button>Fənn imtahanı</button>
        </div>

        <div className="filter-etiket">
            <h6>Etiketlər</h6>
            <button>2-cü sinif</button>
            <button>3-cü sinif</button>
            <button className='btn-qara'>4-cü sinif</button>
        </div>
    </div>
  )
}

export default ExamsFilter