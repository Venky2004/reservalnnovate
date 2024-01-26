import React,{useEffect} from 'react'
import './BVR_Amenities.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: "https://img.freepik.com/free-photo/arrangement-with-white-bottle-towels-bed_23-2148296023.jpg?w=900&t=st=1697303579~exp=1697304179~hmac=e0075cdb7d9a248e18c6166337dcad8faa54af96ebd86a23e2ecdbf55c175ae8",
    desTitle: 'SPA',
    description:'Our hotel provide spa treatments, massages, and wellness services, allowing guests to indulge in relaxation and self-care.Nestled in serene environments, spas offer a range of therapeutic treatments and services aimed at enhancing physical, mental, and emotional balance'
  },
  {
    id:2,
    imgSrc: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
    desTitle: 'Mini Bar',
    description:'The hotel mini bar, a convenient and indulgent amenity, is a compact oasis of refreshments within the comfort of your room. Stocked with a carefully curated selection of beverages, snacks, and sometimes even local delicacies, the mini bar offers a tempting array of treats for guests to enjoy at any hour. From refreshing sodas and chilled water to gourmet chocolates and savory nibbles, the mini bar caters to diverse tastes, providing a delightful and hassle-free way for guests to unwind and savor a taste of luxury without leaving the cozy confines of their accommodation.'
  },
  {
    id:3,
    imgSrc: "https://images.unsplash.com/photo-1623718649591-311775a30c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:'Surrounded by lush landscaping and comfortable lounge chairs, the pool area offers a perfect retreat from the bustling world outside. Whether you seek a refreshing morning swim to invigorate your senses or a leisurely afternoon bask under the sun, the pool provides a tranquil escape. Families can delight in playful splashes, while fitness enthusiasts can maintain their workout routines with invigorating laps. Poolside attendants ensure guests are well-cared for, offering refreshing beverages and snacks.',
    desTitle: 'Swimming Pool',
},{
    id:4,
    imgSrc: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desTitle: 'Fitness Center',
    description:'The hotel fitness center is a state-of-the-art haven for health enthusiasts and travelers seeking to maintain their wellness routines while away from home. Equipped with a diverse array of modern exercise machines, free weights, and cardiovascular equipment, the fitness center provides a comprehensive workout experience for guests of all fitness levels. With ample natural light and motivating views, the space encourages invigorating workouts, whether its an energetic cardio session, strength training, or rejuvenating yoga practice. '
  },
  {
    id:5,
    imgSrc: "https://images.unsplash.com/photo-1596793503406-d90c450ba1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2042&q=80",
    desTitle: 'Entertainment Center',
    description:'The entertainment center at the hotel is a vibrant hub of excitement and leisure, designed to cater to the diverse tastes and preferences of guests. Boasting a wide array of activities, it offers an immersive experience that ensures guests are entertained throughout their stay. From cutting-edge arcade games and virtual reality simulations to classic board games and consoles, theres something for everyone, whether you are a gaming enthusiast or a family seeking interactive fun. The center often features a mini theater for movie screenings, live sports events, or gaming tournaments, creating a lively atmosphere for socializing and enjoyment.'
  }

]


const BVR_Amenities = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="bvrmain container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Our Amenities
        </h3>
      </div>

      <div className="bvrsecContent grid">

      {
        Data.map(({id,imgSrc,desTitle,description}) =>{
            return(
              <div key={id}
              data-aos="fade-up"
               className="singleDestination">
                 <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle}/>
                 </div>
                 <div className="cardInfo">
                 <span className="continent flex">
                    <h4 className="destTitle">
                    {desTitle}
                  </h4>
                  </span>
                 
                  <div className="desc">
                    {description}
                  </div>

                 </div>
              </div>
            )
        })
      }

      </div>
    </section>
  )
}

export default BVR_Amenities