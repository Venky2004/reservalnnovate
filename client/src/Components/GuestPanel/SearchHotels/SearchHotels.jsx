import React,{useEffect, useState} from 'react'
import './searchhotels.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboard} from 'react-icons/hi'

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import Aos from 'aos'
import axios from 'axios'
import 'aos/dist/aos.css'


const SampleData = [
  {
    id:1,
    imgSrc: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desTitle: 'The Plaza',
    location: 'New York',
    grade: 'Cultural Relax',
    fees: "$100",
    description:'The 100-year-old Plaza Hotel in New York City is a unique blend of personalized service and historically significant architecture.'
  },
  {
    id:2,
    imgSrc: "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    desTitle: 'Belmond',
    location: 'New Zealand',
    grade: 'High Class',
    fees: "$120",
    description:'Belmond Ltd. is a hospitality and leisure company that operates luxury hotels, train services and river cruises worldwide'
  },
  {
    id:3,
    imgSrc: "https://images.unsplash.com/photo-1570213489059-0aac6626cade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desTitle: 'Mandarin Oriental',
    location: 'Hong Kong',
    grade: 'Cultural Authenticity',
    fees: "$190",
    description:'Over the past 50 years, Mandarin Oriental has grown from a well-respected Asian hotel company into a global brand'
  },{
    id:4,
    imgSrc: "https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desTitle: 'Grand Hotel Tremezzo',
    location: 'Italy',
    grade: 'Luxury',
    fees: "$300",
    description:'Grand Hotel Tremezzo is a classic five-star hotel in Italy tucked away on Lake Como shores.'
  }
]
const imageUrls = [
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1633944095397-878622ebc01c?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  // Add more image URLs here
];
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomImage() {
  const randomIndex = getRandomIndex(imageUrls);
  return imageUrls[randomIndex];
}


const SearchHotels = (props) => {

  const [infodata,setInfodata] = useState([]);
  const navigate=useNavigate(false);
  const { destination } = useParams();
  const [location,setLocation] = useState(destination);
  useEffect(()=>{
    Aos.init({duration:2000})
    handleLocation();
  },[])

  const handleLocation = async (e) => {
    try {
      console.log(location);
      const response = await axios.post('http://localhost:8080/user/location', {
        location,
      });
      // infodata=Array.from(response.data);
      setInfodata(response.data);
      console.log(infodata);
      if(infodata===null)navigate("/city404");
      
    } catch (error) {
      navigate("/city404");
    }
    
  };
  
   
  return (
    <section className="searchhotel container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Nearby Hotels in {destination}
        </h3>
      </div>
      
      <div className="secContent grid">
      {
        
        infodata.map(({latitude,hotelName,location,description}) =>{
            return(
              <div key={latitude}
              data-aos="fade-up"
               className="singleDestination">
                 <div className="imageDiv">
                  <img src={generateRandomImage()}  alt={hotelName}/>
                 </div>
                 
                 <div className="cardInfo">
                  <h4 className="destTitle">
                    {hotelName}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">
                      {location}
                    </span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                     
                        <small>
                          +1
                        </small>
                      </span>
                    </div>
                    
                  </div>
                  <div className="desc">
                    {description}
                  </div>

                  <button className='btn flex'>
                    Details <HiOutlineClipboard className="icon"/>
                  </button>

                 </div>
              </div>
            )
        })
      }

      </div>
    </section>
  )
}

export default SearchHotels