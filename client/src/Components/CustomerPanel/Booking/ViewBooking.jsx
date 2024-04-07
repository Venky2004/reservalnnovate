import React,{useEffect,useState} from 'react'
import './Viewbooking.css'
import video from '../../Assets/video.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../NavBarHotel/NavBarHotel'

import {FaRupeeSign} from 'react-icons/fa'
import qrcode from '../../Assets/upi_qrcode.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {TbLogin2} from 'react-icons/tb'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
const ViewBooking = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const navigate = useNavigate();
  const [Data,setData]=useState([]);
  const serverurl =localStorage.getItem("backendUrl");

  const [refrenceID, setRefrenceid] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${serverurl}/user/bookingHistory`);
        setData(response.data);
        console.log(Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  
 
  return (
    <>
    <Navbar/>
    <section className="viewbooking">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
        <div className="secContent">
          <div className="tableStyle">
          <table>
    <thead>
    <tr className="table100-head">
    <th className="column1">S.No</th>
    <th className="column2">Booking ID</th>
    <th className="column3">Room Type</th>
    <th className="column4">Status</th>
    <th className="column5">Room No</th>
    <th className="column6">Person Count</th>
    <th className="column7">Check In Date</th>
    <th className="column8">Check Out Date</th>
    <th className="column9">Price per day</th>
    <th className="column10">Total Cost</th>
    <th className="column11">Paid Amount</th>
    <th className="column12">Paid Status</th>
    <th className="column13">Reference Ids</th>
    <th className="column14">Actions</th>
    </tr>
    </thead>
    <tbody>
    {
        Data.map(({bookingId,roomType,checkInDate,checkOutDate,status,roomNo,price,totalCost,paidStatus,personCount,paidAmount,referalids}) =>{
            return(
              <tr>
    <td className="column1"></td>
    <td className="column2">{bookingId}</td>
    <td className="column3">{roomType}</td>
    <td className="column4">{status}</td>
    <td className="column5">{roomNo}</td>
    <td className="column6">{personCount}</td>
    <td className="column7">{checkInDate}</td>
    <td className="column8">{checkOutDate}</td>
    <td className="column9">{price}</td>
    <td className="column10">{totalCost}</td>
    <td className="column11">{paidAmount}</td>
    <td className="column12">{paidStatus}</td>
    <td className="column13">{referalids}</td>


    <td class="column8">&nbsp;&nbsp;&nbsp; <button><i class="fa-solid fa-check"></i></button>&nbsp;&nbsp;&nbsp;</td>
    </tr>
            )
        })
      }
    </tbody>
    </table>
          </div>
        </div>
    </section>
    </>
  )
}

export default ViewBooking