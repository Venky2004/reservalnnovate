import React,{useEffect,useState} from 'react'
import './forgotpass.css'
import video from '../../Assets/video.mp4'
import {GiArchiveRegister} from 'react-icons/gi'
import {IoArrowBack} from 'react-icons/io5'
import {FiMail} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

import Aos from 'aos'
import 'aos/dist/aos.css'

const ForgotPass = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  const [email, setEmail] = useState('');
  const navigate = useNavigate(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validatevalues()){
      try {
        const response = await axios.post('http://localhost:8088/user/otp', {
          email,
        });
  
      
        console.log(response.data);
      } catch (error) {
        
        console.error('Process failed', error);
      }
    }
  };

  const validatevalues=()=> {
 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!email.match(emailRegex)) {
        alert('Invalid email address. Please enter a valid email.');
        return false;
      }
  
    return true;
  }
  

  return (
    <>
    <Navbar/>
    <section className="forgotpasspage">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
      <div className="textDiv">
<center>
        <h1 data-aos="fade-up" className="homeTitle">
        Forgot Password
        </h1></center>
</div>
        <div className="cardDiv grid">
        <h1 data-aos="fade-up" className='cardTitle'>
        Enter your  Registered Mail ID
        </h1>
            <div className="MailInput" style={{marginBottom:"2rem"}}>
              <label htmlFor="city">Email</label>
              <div className="input flex">
                <input type="mail" placeholder='Enter the registered mail here'  value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FiMail className="icon"/>
              </div>
            </div>


            <div className="searchOptions1 flex" onClick={() => {navigate("/login");}}>
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

export default ForgotPass