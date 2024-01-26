import React,{useEffect} from 'react'
import './footer.css'
import video from '../Assets/video.mp4'
import {FiSend} from 'react-icons/fi'
import {FaHotel, FaTripadvisor} from 'react-icons/fa'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FiChevronRight } from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4" ></video>
      </div>
      
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>ENJOY YOUR STAY</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button  data-aos="fade-up" className='btn flex' type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex ">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <FaHotel className="icon"/>  BVR
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
            BVR Hotels offers upscale 5-star accommodations with an array of amenities, including an outdoor swimming pool, fitness center, shared lounge, and terrace. The hotel provides exceptional services, including 24-hour room service, a responsive front desk, and currency exchange. Rooms are well-appointed with air conditioning, flat-screen TVs, private bathrooms, and some featuring fully equipped kitchens. Guests can enjoy a continental, Italian, or American breakfast, and dine at the hotel's restaurant offering American, British, and Indian cuisine.</div>
            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon"/>
              <AiOutlineYoutube className="icon"/>
              <AiOutlineInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>
          <div data-aos="fade-up" className="footerLinks grid">
            {/* Group one */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR Agency
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Tourism
              </li>

            </div>
            {/* Group Two */}
            <div  data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                Customer Service
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/> Customer Service
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> FAQs
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> Contact Us
              </li>
              </div> 
            {/* Group three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                Explore More
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon" /><a href='https://www.tripadvisor.in/'>Travel Advisors</a>
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/> <a href='https://business.booking.com/'>Corporate Travel</a>
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/><a href='https://www.hyatt.com/en-US/info/hyatt-residences'> Residences</a>
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/><a href='https://in.hotels.com/go'> Guides</a>
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>Best Hotel Website</small>
            <small>COPYRIGHTS RESERVED</small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer