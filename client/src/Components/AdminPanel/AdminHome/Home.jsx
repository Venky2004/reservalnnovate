import React,{useEffect} from 'react'
import './Adminhome.css'
import video from '../../Assets/admv.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../NavBar/NavBarHotel'
import { useNavigate } from 'react-router-dom'
import UnAuthorisedAccess from '../../DailogBoxes/UnAuthorisedAccess'

// import axios from 'axios'
const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const navigate=useNavigate();
  
  if(localStorage.getItem('role')=='manager'){
  return (
    <>
    <Navbar/>
    <section className="adminhome">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
    </section>
    </>
  )}
  else{
    //  <UnAuthorisedAccess/>
    return(
      <UnAuthorisedAccess/>
    )
  }
}

export default Home