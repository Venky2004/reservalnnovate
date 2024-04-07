import React,{useEffect,useState} from 'react'
import './bookastayform.css'
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
import Navbar from '../NavBarHotel/NavBarHotel'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Aos from 'aos'
import 'aos/dist/aos.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UnAuthorisedAccess from '../../DailogBoxes/UnAuthorisedAccess'


const Bookastayform = () => {

  const location = useLocation();
  const { myProp } = location.state;

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  const [roomType, setroomType] = useState(myProp.RoomType);
  const [price,setprice] = useState(myProp.Price);
  const [personCount,setPersonCount]= useState(0);
  const [checkInDate,setcheckInDate]= useState('');
  const [checkOutDate,setcheckOutDate] = useState('');
  const [totalCost, settotalCost] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [totalHours, setTotalHours] = useState(0);

  useEffect(() => {
    calculatetotalCost();
  }, [checkInDate,checkOutDate]);

  const calculatetotalCost = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    const timeDifference = checkOut - checkIn;
    if(timeDifference<0){
      toast.error(`Select Proper Date and Time`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
    const hoursDifference = timeDifference / (1000 * 3600);

    const days = Math.floor(hoursDifference / 24);
    const hours = hoursDifference % 24;

    setTotalDays(days);
    setTotalHours(hours);
    if(checkOutDate!='' && checkInDate!='')
    toast.success(`Duration of the Stay will be ${days} Days,${hours} Hours`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      //setTimeout(() => {navigate("/home");}, 5000);


    const cost = (days + (hours / 24)) * price;
    settotalCost(cost);}
  };



  const serverurl = localStorage.getItem("backendUrl")
  const navigate = useNavigate(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    

    if(validatevalues()){
      try {
       
        const response = await axios.post(`${serverurl}/user/bookingDetails`, {
        roomType,
        price,
        personCount,
        checkInDate,
        checkOutDate,
        totalCost
        });
  
      
        console.log(response.data);
        if(response.data=="Proceed to Payment Portal"){
          navigate("/pay");
        }
        else if(response.data=="Session Timeout"){
          toast.error('Session TimeOut Login Again', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setTimeout(() => {
              navigate("/login");
            }, 3000);
        }
        else{
          toast.error('Booking Failed Start from First', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setTimeout(() => {
              navigate("/bookastay");
            }, 3000);
        }


      } catch (error) {
        
        console.error('Booking Failed', error);
      }
    }
  };

  const validatevalues=()=> {

    if (!checkInDate) {
      toast.error(`Check-in date is required`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        return false;
    }

    if (!checkOutDate) {
      toast.error(`Check-out date is required`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        return false;
    }

    if (checkOutDate <= checkInDate) {
      toast.error(`Check-out date must be after check-in date`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        return false;
    }

    if(personCount<=0) {
      toast.error(`Person Count Should be atleast one`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        return false;
    }
    if(personCount>myProp.RoomCapacity){
      toast.error(`Person Count Should be less Than ${myProp.RoomCapacity}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        return false;
    }
     return true;
  }
  
  if(localStorage.getItem('role')=='customer'){
  return (
    <>
    <Navbar/>
    <section className="signup">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
      <div className="textDiv">

        <h1 data-aos="fade-up" className="homeTitle">
        Room Registration Form
        </h1>
</div>
        <div className="cardDiv grid">
            

            <div className="textInput">
              <label htmlFor="city">Room Type</label>
              <div className="input flex">
                <input type="text" placeholder='Enter the Name here'  value={roomType} onChange={(e) => setroomType(e.target.value)} />
                <MdOutlineBedroomParent className="icon"/>
              </div>
            </div>

            <div className="numericInput">
              <label htmlFor="city">Person Count</label>
              <div className="input flex">
                <input type="number" placeholder='Enter the Number of people wanna stay here'  value={personCount} onChange={(e) => setPersonCount(e.target.value)}/>
                <BsPerson className="icon"/>
              </div>
            </div>

            <div className="numericInput">
              <label htmlFor="city">Price Per Day</label>
              <div className="input flex">
                <input type="number" placeholder='₹'  value={price} onChange={(e) => setprice(e.target.value)} />
                <FaRupeeSign className="icon"/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Check in Date & Time</label>
              <div className="input flex">
                <input type="datetime-local" value={checkInDate} onChange={(e) => setcheckInDate(e.target.value)}/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Checkout Date & TIme</label>
              <div className="input flex">
                <input type="datetime-local"  value={checkOutDate} onChange={(e) => setcheckOutDate(e.target.value)}/>
              </div>
            </div>

            <div className="numericInput">
              <label htmlFor="city">Total price</label>
              <div className="input flex">
                <input type="text" placeholder=''  value={totalCost} onChange={(e) => settotalCost(e.target.value)} />
                <FaRupeeSign className="icon"/>
              </div>
            </div>

            <div className="searchOptions1 flex" onClick={() => {navigate("/bookastay");}}>
              <IoArrowBack className='icon'/>
              <span>Cancel</span>
            </div>

            <div className="searchOptions2 flex" onClick={handleRegister}>
              <GiArchiveRegister className='icon'/>
              <span>Book Now</span>
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

export default Bookastayform