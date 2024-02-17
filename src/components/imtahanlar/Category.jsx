import React from 'react'

const Category = () => {
  return (
    <div className="category-section">
        <h6>İmtahan</h6>
        <h1>Kateqoriya seç</h1>
      <div className="category-boxes">
        <div className="category-boxes-top">
          <button>Buraxılış</button>
          <button>Blok</button>
          <button>Təkmilləşmə</button>
          <button>İbtidai sinif</button>
        </div>

        <div className="category-boxes-bottom">
          <button>Liseylərə</button>
          <button>Magistratura</button>
          <button>Olimpiadalar</button>
          <button>Fənn imtahanı</button>
        </div>

      </div>

    </div>
  )
}

export default Category