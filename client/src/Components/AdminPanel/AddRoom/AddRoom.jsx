import React,{useEffect,useState} from 'react'
import './addRoom.css'
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
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UnAuthorisedAccess from '../../DailogBoxes/UnAuthorisedAccess'

const AddRoom = () => {

  const location = useLocation();
  const [Data,setData] = useState([]);


  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  const [roomType, setRoomType] = useState('');
  const [roomNo,setRoomNo] = useState(0);
  const navigate = useNavigate(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    

    if(validatevalues()){
      console.log(roomType);
    try {
        const response = await axios.post('http://localhost:8080/user/addRooms', {
          roomType,
          roomNo,
        });
  
      
        console.log(response.data);
       if(response.data=="Room Inserted"){
        // toast("Login Successful");
        toast.success('Room Added', {
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
            if(localStorage.getItem('role')=='manager')
            navigate("/adminhome");
            else if(localStorage.getItem('role')=='customer')
            navigate("/home")
          
          }, 5000);
        
       }
       else{
        toast.error('Insertion Failure', {
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
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/user/getRoomType');
        setData(response.data);
        console.log(Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const validatevalues=()=> {
    if(roomNo==0) {
        toast.error('Room Should be Greater Than Zero', {
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

     return true;
  }
  
  if(localStorage.getItem('role')=='manager'){
  return (
    <>
    <Navbar/>
    <section className="addroom">
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
                <select onChange={(e) => setRoomType(e.target.value)}> 
                <option value="">Select an option</option>
          {Data.map(({roomTypeID,roomType}) => (
            <option key={roomTypeID} value={roomType}>
              {roomType}
            </option>
          ))}
                </select>
                <MdOutlineBedroomParent className="icon"/>
              </div>
            </div>

            <div className="textInput">
              <label htmlFor="city">Room Number</label>
              <div className="input flex">
                <input type="number" placeholder='Enter Room Number here'  value={roomNo} onChange={(e) => setRoomNo(e.target.value)} />
                <MdOutlineBedroomParent className="icon"/>
              </div>
            </div>


            <div className="searchOptions1 flex" onClick={() => {navigate("/bookastay");}}>
              <IoArrowBack className='icon'/>
              <span>Cancel</span>
            </div>

            <div className="searchOptions2 flex" onClick={handleRegister}>
              <GiArchiveRegister className='icon'/>
              <span>Add Room</span>
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

export default AddRoom