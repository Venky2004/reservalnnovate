import React,{useEffect,useState} from 'react'
import './otppage.css'
import video from '../../Assets/video.mp4'
import {AiOutlineNumber} from 'react-icons/ai'
import {GiArchiveRegister} from 'react-icons/gi'
import {IoArrowBack} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

import Aos from 'aos'
import 'aos/dist/aos.css'

const OtpPage = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  const [otp, setOtp] = useState('');
  const navigate = useNavigate(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(otp);

    if(validatevalues()){
      try {
        console.log(otp)
        const response = await axios.post('http://localhost:8088/user/otp', {
          otp,
        });
        
        if(response.data=="Registration Done SucessFully"){
          navigate("/success");
        }
        else{
          navigate("/failure")
        }
      
        console.log(response.data);
      } catch (error) {
        
        console.error('Registration failed', error);
      }
    }
  };

  const validatevalues=()=> {
 
    const otpRegex = /^\d{5}$/;
  
    if (!otp.match(otpRegex)) {
      alert('Invalid otp. Please enter a valid otp.');
      return false;
    }
  
    return true;
  }
  

  return (
    <>
    <Navbar/>
    <section className="otppage">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
      <div className="textDiv">
<center>
        <h1 data-aos="fade-up" className="homeTitle">
        OTP Page
        </h1></center>
</div>
        <div className="cardDiv grid">
        <h1 data-aos="fade-up" className='cardTitle'>
        Enter the OTP sent to your given mail id.
        </h1>
            <div className="numericInput" style={{marginBottom:"2rem"}}>
              <label htmlFor="city">OTP</label>
              <div className="input flex">
                <input type="text" placeholder='Enter the 6-digit OTP here'  value={otp} onChange={(e) => setOtp(e.target.value)}/>
                <AiOutlineNumber className="icon"/>
              </div>
            </div>


            <div className="searchOptions1 flex" onClick={() => {navigate("/register");}}>
              <IoArrowBack className='icon'/>
              <span>Back</span>
            </div>

            <div className="searchOptions2 flex" onClick={handleSubmit}>
              <GiArchiveRegister className='icon'/>
              <span>Submit</span>
            </div>



        </div>
      </div>
    </section>
    </>
  )
}

export default OtpPage