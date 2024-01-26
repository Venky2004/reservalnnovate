import React,{useEffect, useState} from 'react'

import './home.css'
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {FcSearch} from 'react-icons/fc'
import {FiInstagram} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import Slider from '@mui/material/Slider'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  const navigate = useNavigate(false);
  const [price, setPrice] = React.useState(0);
  const [destination,setDestination] = useState('');
  const [date,setDate] = useState('');

  const handlePriceChange = (event, newPrice) => {
      setPrice(newPrice);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
      navigate(`/searchhotels/${destination}`);
  };
 
  return (
    <section className="home">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-up" className="smallText">
            Our packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search your Hotel
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">

            <div className="destinationInput">
              <label htmlFor="city">Location</label>
              <div className="input flex">
                <input type="text" placeholder='Enter the Location here' value={destination} onChange={(e) => setDestination(e.target.value)} />
                <GrLocation className="icon"/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Select your Date</label>
              <div className="input flex"value={date} onChange={(e) => setDate(e.target.value)}>
                <input type="date" />
              </div>
            </div>


            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max price:</label>
                <h3 className="total">${price}</h3>
              </div>
              <div className="input flex">
              <Slider
        value={price}
        min={0}
        max={500}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
              </div>
            </div>

            <div className="searchOptions flex" onClick={handleSearch} >
              <FcSearch className='icon'/>
              <span>Search</span>
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
    </section>
  )
}

export default Home