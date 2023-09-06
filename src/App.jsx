import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Fastcategory from './pages/Fastcategory';
import Favpage from "./pages/Favpage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Footer from './component/Footer';
import Noroute from './pages/Noroute';


function App() {



  const { data: favdata } = useSelector((state) => state.favData)






  useEffect(() => {


    localStorage.setItem("list", JSON.stringify(favdata))


  }, [favdata])




  return (
    <>



      <Router>



        < Navbar />


        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="detail/:recipeId" element={<Detail />} />
          <Route path="fast/:fastId" element={<Fastcategory />} />
          <Route path="favlist" element={<Favpage />} />
          <Route path="*" element={<Noroute />} />
        </Routes>

        <Footer />


      </Router>

      <ToastContainer
        position="bottom-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  )
}

export default App
