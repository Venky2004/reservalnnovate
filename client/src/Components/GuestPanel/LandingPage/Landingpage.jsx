import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Main from '../Main/Main'
import Footer from '../../Footer/Footer'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Landingpage = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}

export default Landingpage