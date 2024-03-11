import React,{useEffect,useState} from 'react'
import './login.css'
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
import {MdPublishedWithChanges} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  const navigate=useNavigate(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://fq1g7hgb-8080.inc1.devtunnels.ms/user/login', {
        email,
        password,
      });

    
      console.log(response.data);
     if(response.data!="Invalid Credentials"){
      // toast("Login Successful");
      localStorage.setItem('role',response.data);
      toast.success('Login Success', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          const userRole = localStorage.getItem('role');
          console.log(userRole);

          if (userRole == "manager") {
            console.log('hello');
            navigate('/adminhome');
          } else if (userRole  == "customer") {
            console.log('bye');
            navigate('/home');
          } else {
            console.log('Unknown role');
          }
        
        }, 3000);
      
     }
     else{
      toast.error('Invalid Login Credentials', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {navigate("/login");}, 5000);
     }
      
    } catch (error) {
      navigate("/loginfailed");
      console.error('Login failed', error);
    }
    
  };

  return (
    <>
    <Navbar/>
    <section className="login">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">

        <div data-aos="fade-up" className="cardDiv grid">
                <center><h1 className="login_header">Login</h1></center>
            <div className="destinationInput">
              <label htmlFor="city">Email</label>
              <div className="input flex">
                <input type="text" placeholder='Enter the Email here'  value={email}
          onChange={(e) => setEmail(e.target.value)} />
                <FiMail className="icon"/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Password</label>
              <div className="input flex">
              <input type="password" placeholder='Enter the Password here'  value={password}
          onChange={(e) => setPassword(e.target.value)}/>
              <RiLockPasswordLine className="icon"/>
              </div>
            </div>
            <br /><br /><br />

            <div className="searchOptions1 flex" onClick={() => {navigate("/forgotpass");}}>
              <MdPublishedWithChanges className='icon'/>
              <span>Forgot Password</span>
            </div>
            <div className="searchOptions2 flex" onClick={handleLogin}>
              <TbLogin2 className='icon'/>
              <span>Login</span>
            </div>
             <div className="searchOptions3 flex" onClick={() => {navigate("/signup");}}>
              <GiArchiveRegister className='icon' />
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
      <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </section>
    {/* <MapWithMarkers/> */}
    </>
  )
}

export default Login