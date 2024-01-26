import React,{useEffect} from 'react'
import './bvr.css'
import video from '../../Assets/bvrland.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../NavBarHotel/NavBarHotel'
import Footer from '../../Footer/Footer'
import BVR_Amenities from '../BVR_Amenities/BVR_Amenities'
import UnAuthorisedAccess from '../../DailogBoxes/UnAuthorisedAccess'

// import axios from 'axios'
const BVR = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  if(localStorage.getItem('role')=='customer')
  return (
    <>
    <Navbar/>
    <section className="bvrhome">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
    </section>
    <BVR_Amenities/>
    <Footer/>
    </>
  )
  else
  return(
    <>
    <UnAuthorisedAccess/>
    </>
  )
}

export default BVR