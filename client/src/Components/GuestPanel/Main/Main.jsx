import React,{useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboard} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desTitle: 'The Plaza',
    location: 'Chennai',
    grade: 'Cultural Relax',
    fees: "₹1800",
    description:'The 100-year-old Plaza Hotel in Chennai City is a unique blend of personalized service and historically significant architecture.'
  },
  {
    id:2,
    imgSrc: "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    desTitle: 'Belmond',
    location: 'Vijayawada',
    grade: 'High Class',
    fees: "₹2850",
    description:'Belmond Ltd. is a hospitality and leisure company that operates luxury hotels, train services and river cruises worldwide'
  },
  {
    id:3,
    imgSrc: "https://images.unsplash.com/photo-1570213489059-0aac6626cade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desTitle: 'Mandarin Oriental',
    location: 'Hyderabad',
    grade: 'Cultural Authenticity',
    fees: "₹1900",
    description:'Over the past 50 years, Mandarin Oriental has grown from a well-respected Asian hotel company into a global brand'
  },{
    id:4,
    imgSrc: "https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desTitle: 'Grand Hotel Tremezzo',
    location: 'Mumbai',
    grade: 'Luxury',
    fees: "₹3500",
    description:'Grand Hotel Tremezzo is a classic five-star hotel in Italy tucked away on Lake Como shores.'
  },{
    id:5,
    imgSrc: "https://lh3.googleusercontent.com/p/AF1QipNGPB0v5ZVYpDDDdhV2iWY1Wf_DMwa1Ir6SOroQ=w574-h384-n-k-rw-no-v1",
    desTitle: 'Rambagh Palace',
    location: 'Jaipur',
    grade: 'Royal',
    fees: "₹5780",
    description:'In an ornate converted palace dating from 1835, this opulent hotel is 4 km from both Gandhinagar Jaipur train station, and art and history exhibits at the Albert Hall Museum.'
  },{
    id:6,
    imgSrc: "https://lh3.googleusercontent.com/proxy/zoIkTYvvFB_iEEG4hXl_SD7deEvdQ-NF7uIEZSIWiKwB7tc5E4KD50BEw3Ou20yAgtDZ4yMKyooUo3S4uwNCd6lndNrzlZA0AZp4IPLge8m9EtZoRN0l1Wk6AT7ahUkLpYqUrx0stzdAFOeH78NXM184lOFelWQ=w574-h384-n-k-rw-no-v1",
    desTitle: 'CloudBerry Hotel',
    location: 'Kanyakumari',
    grade: 'Deluxe',
    fees: "₹1500",
    description:'Amenities include 2 upscale restaurants and a bar with lake views; private outdoor lakeside dining is available. Theres also a gym, a spa and an outdoor pool, plus a business centre, meeting rooms and event space.'
  }
]


const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited Hotels
        </h3>
      </div>

      <div className="secContent grid">

      {
        Data.map(({id,imgSrc,desTitle,location,grade,fees,description}) =>{
            return(
              <div key={id}
              data-aos="fade-up"
               className="singleDestination">
                 <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle}/>
                 </div>
                 <div className="cardInfo">
                  <h4 className="destTitle">
                    {desTitle}
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
                      {grade}
                        <small>
                          +1
                        </small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
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

export default Main