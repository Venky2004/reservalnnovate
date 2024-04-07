import React,{useEffect,useState} from 'react'
import './payment.css'
import video from '../../Assets/video.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../NavBarHotel/NavBarHotel'

import {FaRupeeSign} from 'react-icons/fa'
import qrcode from '../../Assets/upi_qrcode.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {TbLogin2} from 'react-icons/tb'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const navigate = useNavigate();
  const serverurl = localStorage.getItem("backendUrl")

  const [status,setStatus] = useState("Yes")
  const [referenceId, setRefid] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validatevalues()){
      try {
        console.log(status,referenceId,price);
        const response = await axios.post(`${serverurl}/user/payments`, {
        status,referenceId,price
        });
  
      
        console.log(response.data);
        if(response.data=="Room Booking Successfully.Please contact manager for Room Details"){
          navigate("/viewbookings");
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
        
        console.error('Registered failed', error);
      }
    }
  };

  const validatevalues=()=> {
    return true;
  }
  
 
  return (
    <>
    <Navbar/>
    <section className="payment">
      {/* <div className="overlay"></div> */}
        <video src={video} muted autoPlay loop type="video/mp4"></video>
    <div className="secContent container">
        <div data-aos="fade-up" className="singleDestination">
    
                    <h4 className="destTitle">Scan <AiOutlineArrowRight className='icon'/> Pay <AiOutlineArrowRight className='icon'/> Verify
                    </h4>
                    <div className="imageDiv">
                        <img src={qrcode} alt="Payment QR"/>
                    </div>
                 <div className="cardInfo">
                    <div className="desc">
                        Scan the QR pay Minimum 10% percent of the Total Price
                        <br/>
                        Submit the Reference id
                     </div>
                      <br/>
                    <div className="payDetail">
                        <div className="textInput">
                             <div className="input flex">
                                    <input type="text" placeholder='Enter the Refrence ID here'  value={referenceId} onChange={(e) => setRefid(e.target.value)} />
                                     <FaRupeeSign className="icon"/>
                            </div>
                        </div>
                        <br/>
                      <div className="textInput">
                        <div className="input flex">
                          <input type="number" placeholder='Enter the Amount here'  value={price} onChange={(e) => setPrice(e.target.value)} />
                          <FaRupeeSign className="icon"/>
                        </div>
                      </div>

            <div className="searchOptions flex" onClick={handleSubmit}>
              <TbLogin2 className='icon'/>
              <span>Submit</span>
            </div>
                  </div>

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

export default Payment