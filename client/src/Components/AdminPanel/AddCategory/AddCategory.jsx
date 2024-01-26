import React,{useEffect,useState} from 'react'
import './Addcategory.css'
import video from '../../Assets/video.mp4'
import {FiInstagram} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import {MdOutlineBedroomParent} from 'react-icons/md'
import {FaRupeeSign} from 'react-icons/fa'
import {GiArchiveRegister} from 'react-icons/gi'
import {BsPerson} from 'react-icons/bs'
import {IoArrowBack} from 'react-icons/io5'
import Navbar from '../NavBar/NavBarHotel'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UnAuthorisedAccess from '../../DailogBoxes/UnAuthorisedAccess'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {

  const location = useLocation();

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  const [roomType, setRoomType] = useState('');
  const [price,setPrice] = useState(0);
  const [roomCapacity,setRoomCapacity]=useState(0);
  const [pictureURL,setPicture]=useState('');
  const [description,setDescription]=useState('');

  const navigate = useNavigate(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    

    if(validatevalues()){
      try {
        const response = await axios.post('http://localhost:8080/user/addRoomType', {
          roomType,
          price,
          roomCapacity,
          pictureURL,
          description
        });
        console.log(response.data);
        navigate("/addroom");
      }
      catch(error){
        console.log(error);
      }
    }
  };

  const validatevalues=()=> {
      if(roomCapacity<=0) {
          toast.error('Room Capacity should be greater Than Zero', {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
              return false;
      }
  
      if(roomType==''){
          toast.error('Select any of the room', {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
      }
      if(price<=0){
        toast.error('Price must be positive integer!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    if(description=='' || pictureURL==''){
      toast.error('Please fill the feilds', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
  }
  
       return true;
    
  }
  
  if(localStorage.getItem('role')=='manager'){
  return (
    <>
    <Navbar/>
    <section className="addcategory">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
      <div className="textDiv">

        <h1 data-aos="fade-up" className="homeTitle">
        Room Category Registration Form
        </h1>
</div>
        <div className="cardDiv grid">
            

            <div className="textInput">
              <label htmlFor="city">Room Type</label>
              <div className="input flex">
                <input type="text" placeholder='Enter the Room Type here'  value={roomType} onChange={(e) => setRoomType(e.target.value)} />
                <MdOutlineBedroomParent className="icon"/>
              </div>
            </div>

            <div className="numericInput">
              <label htmlFor="city">Price</label>
              <div className="input flex">
                <input type="number" placeholder='Enter the Price here'  value={price} onChange={(e) => setPrice(e.target.value)} />
                <FaRupeeSign className="icon"/>
              </div>
            </div>

            <div className="numericInput">
              <label htmlFor="city">Room Capacity</label>
              <div className="input flex">
                <input type="number" placeholder='Enter the Room Capacity here'  value={roomCapacity} onChange={(e) => setRoomCapacity(e.target.value)} />
                <FaRupeeSign className="icon"/>
              </div>
            </div>

            <div className="textInput">
              <label htmlFor="city">Picture</label>
              <div className="input flex">
                <input type="text" placeholder='Enter the Image url here'  value={pictureURL} onChange={(e) => setPicture(e.target.value)} />
                <MdOutlineBedroomParent className="icon"/>
              </div>
            </div>

            <div className="textInput des">
              <label htmlFor="city">Description</label>
              <div className="input flex">
                <input type="text" placeholder='Enter the Description here'  value={description} onChange={(e) => setDescription(e.target.value)} />
                <MdOutlineBedroomParent className="icon"/>
              </div>
            </div>

            <div className="searchOptions1 flex" onClick={() => {navigate("/bookastay");}}>
              <IoArrowBack className='icon'/>
              <span>Cancel</span>
            </div>

            <div className="searchOptions2 flex" onClick={handleRegister}>
              <GiArchiveRegister className='icon'/>
              <span>ADD Category</span>
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
    </>
  )
}
else{
  return(
    <UnAuthorisedAccess/>
  )
}
}

export default AddCategory