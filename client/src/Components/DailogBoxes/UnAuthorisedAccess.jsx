import React,{useEffect} from 'react'
import './DailogBox.css'
import video from '../Assets/video.mp4'
import {IoArrowBack} from 'react-icons/io5'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
import fail from '../Assets/Unauthorized.png'

const UnAuthorisedAccess = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  const navigate = useNavigate(false);
  const handleOkay = async (e) => {
       navigate("/login");
  };


  

  return (
    <>
    <section className="dailogbox">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="cardDiv grid cardDivFail">
            <div className="gifDiv">
            <img src={fail} alt=""  />

            </div>
        <center><h3 data-aos="fade-up" className='cardTitle'>
        UnAuthorized Access Please Try Again.
        </h3></center>
            <div className="searchOptions1 flex" onClick={handleOkay}>
              <IoArrowBack className='icon'/>
              <span>Back To Login</span>
            </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default UnAuthorisedAccess