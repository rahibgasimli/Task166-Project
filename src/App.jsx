import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CommentCard from './components/imtahan-info/CommentCard'
import ImtahanMelumat from './components/imtahan-info/ImtahanMelumat'
import ImtahanNetice from './components/imtahan-info/ImtahanNetice'
import ImtahanReyler from './components/imtahan-info/ImtahanReyler'
import Imtahanphoto from './components/imtahan-info/Imtahanphoto'
import Category from './components/imtahanlar/Category'
import Exams from './components/imtahanlar/Exams'
import ExamsCard from './components/imtahanlar/ExamsCard'
import ExamsFilter from './components/imtahanlar/ExamsFilter'
import Info from './components/imtahanlar/Info'
import ImtahanInfoPage from './pages/ImtahanInfoPage'
import Imtahanlar from './pages/Imtahanlar'

import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Imtahanlar/>}></Route>
          <Route path='/page2' element={<ImtahanInfoPage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
