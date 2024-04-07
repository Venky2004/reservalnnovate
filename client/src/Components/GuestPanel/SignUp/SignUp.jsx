import React,{useEffect,useState} from 'react'
import './signup.css'
import video from '../../Assets/video.mp4'
import {FiInstagram} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import {TbLogin2} from 'react-icons/tb'
import {FiMail} from 'react-icons/fi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {GiArchiveRegister} from 'react-icons/gi'
import {FaAddressCard} from 'react-icons/fa'
import {PiTextAaDuotone} from 'react-icons/pi'
import {AiOutlinePhone} from 'react-icons/ai'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Aos from 'aos'
import 'aos/dist/aos.css'

const SignUp = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  //const notify = () => toast("Registered Successful");
  const serverurl = localStorage.getItem('backendUrl');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno,setPhoneno]= useState('');
  const [dateOfBirth,setDateOfBirth]= useState('');
  const [adress,setAdress] = useState('');
  const [aadharNo,setAadharNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  
  const navigate = useNavigate(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(name,email,phoneno,dateOfBirth,adress,aadharNo,password,confirmpassword)

    if(validatevalues()){
      try {
        const response = await axios.post(`${serverurl}/user/register`, {
          name,
          email,
          phoneno,
          dateOfBirth,
          adress,
          aadharNo,
          password,
        });
  
      
        console.log(response.data);
        if(response.data=="Mail Sent Successfully"){
          navigate("/otp");
        }
        else if(response.data=="Registration Done SucessFully"){
          toast("Registered Successful")
          navigate("/success");
        }
        else{
          toast("Registered UnSuccessful")
          navigate("/failure")
        }


      } catch (error) {
        
        console.error('Registered failed', error);
      }
    }
  };

  const validatevalues=()=> {
 
    const nameRegex = /^[A-Za-z\s]+$/;
    const aadharRegex = /^\d{12}$/;
    const phoneRegex = /^\d{10}$/;
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!name.match(nameRegex)) {
      alert('Invalid name. Please enter a valid name.');
      return false;
    }
  
    if (!aadharNo.match(aadharRegex)) {
      alert('Invalid Aadhar number. Please enter a 12-digit Aadhar number.');
      return false;
    }
  
    if (!phoneno.match(phoneRegex)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return false;
    }
  
    if (!email.match(emailRegex)) {
      alert('Invalid email address. Please enter a valid email.');
      return false;
    }
  
    if (password !== confirmpassword) {
      alert('Passwords do not match. Please make sure they match.');
      return false;
    }
  
    return true;
  }
  

  return (
    <>
    <Navbar/>
    <section className="signup">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
      <div className="textDiv">

        <h1 data-aos="fade-up" className="homeTitle">
        Sign Up
        </h1>
</div>
        <div className="cardDiv grid">
            

            <div className="textInput">
              <label htmlFor="city">Name</label>
              <div className="input flex">
                <input type="text" placeholder='Enter the Name here'  value={name} onChange={(e) => setName(e.target.value)} />
                <FaAddressCard className="icon"/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Select your Date Of Birth</label>
              <div className="input flex">
                <input type="date"  value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
              </div>
            </div>

            <div className="numericInput">
              <label htmlFor="city">Phone Number</label>
              <div className="input flex">
                <input type="text" placeholder='Enter the Phone Number here'  value={phoneno} onChange={(e) => setPhoneno(e.target.value)}/>
                <AiOutlinePhone className="icon"/>
              </div>
            </div>


            <div className="textInput">
              <label htmlFor="city">Address</label>
              <div className="input flex">
                <input type="text" placeholder='Enter the Address here'  value={adress} onChange={(e) => setAdress(e.target.value)}/>
                <FaAddressCard className="icon"/>
              </div>
            </div>

            <div className="numericInput">
              <label htmlFor="city">Aadhaar Number</label>
              <div className="input flex">
                <input type="text" placeholder='Enter the Aadhaar Number here'  value={aadharNo} onChange={(e) => setAadharNo(e.target.value)} />
                <PiTextAaDuotone className="icon"/>
              </div>
            </div>

            <div className="textInput">
              <label htmlFor="city">Email Address</label>
              <div className="input flex">
                <input type="mail" placeholder='Enter the Email Address here'  value={email} onChange={(e) => setEmail(e.target.value)} />
                <FiMail className="icon"/>
              </div>
            </div>

            <div className="passwordInput">
              <label htmlFor="city">Password</label>
              <div className="input flex">
                <input type="password" placeholder='Enter the Password here'  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <RiLockPasswordLine className="icon"/>
              </div>
            </div>

            <div className="passwordInput">
              <label htmlFor="city"> Confirm Password</label>
              <div className="input flex">
                <input type="password" placeholder='Reenter the Password here' value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)}/>
                <RiLockPasswordLine className="icon"/>
              </div>
            </div>

            <div className="searchOptions1 flex" onClick={() => {navigate("/login");}}>
              <TbLogin2 className='icon'/>
              <span>Login</span>
            </div>

            <div className="searchOptions2 flex" onClick={handleRegister}>
              <GiArchiveRegister className='icon'/>
              <span>Register</span>
            </div>



        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <FiInstagram className="icon"/>
            <FiTwitter className="icon"/>
          </div>
          <div className="leftIcons">
          <BsListTask className="icon"/>
          <TbApps className="icon"/>
          </div>
        </div>

      </div>
      <ToastContainer />
    </section>
    </>
  )
}

export default SignUp