import React,{useEffect,useState} from 'react'
import './fotppage.css'
import video from '../../Assets/video.mp4'
import {GiArchiveRegister} from 'react-icons/gi'
import {IoArrowBack} from 'react-icons/io5'
import {RiLockPasswordLine} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

import Aos from 'aos'
import 'aos/dist/aos.css'

const UpdatePassword = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const navigate = useNavigate(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(validatevalues()){
      try {
        const response = await axios.post('http://localhost:8088/user/otp', {
          password
        });
  
      
        console.log(response.data);
      } catch (error) {
        
        console.error('Password Updation failed', error);
      }
    }
  };

  const validatevalues=()=> {
  
    if (password !== confirmpassword) {
        alert('Passwords do not match. Please make sure they match.');
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
        Password Update
        </h1></center>
</div>
        <div className="cardDiv grid">
        <h3 data-aos="fade-up" className='cardTitle'>
        Enter the New Password and Confirm The Password
        </h3>
        <div className="passwordInput">
              <label htmlFor="city">Password</label>
              <div className="input flex">
                <input type="password" placeholder='Enter the Password here'  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <RiLockPasswordLine className="icon"/>
              </div>
            </div>

            <div className="passwordInput" style={{marginBottom:"1rem"}}>
              <label htmlFor="city"> Confirm Password</label>
              <div className="input flex">
                <input type="password" placeholder='Reenter the Password here' value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)}/>
                <RiLockPasswordLine className="icon"/>
              </div>
            </div>


            <div className="searchOptions1 flex" onClick={() => {navigate("/forgotpass");}}>
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

export default UpdatePassword