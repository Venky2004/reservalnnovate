import React,{useEffect, useState} from 'react'
import './bookastay.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineBookmarkAlt} from 'react-icons/hi'
import { useParams } from 'react-router-dom';
import Aos from 'aos'
import axios from 'axios'
import 'aos/dist/aos.css'
import Navbar from '../NavBarHotel/NavBarHotel';
import bookastayform from '../BookAStayForm/bookastayform';
import { useNavigate } from 'react-router-dom';
import UnAuthorisedAccess from '../../DailogBoxes/UnAuthorisedAccess'



const Data = [
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


const BookStay = (props) => {

    const [Data,setData] = useState([]);

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  const navigate = useNavigate();
  const { destination } = useParams();
  const serverurl = localStorage.getItem("backendUrl")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${serverurl}/user/getRoomType`);
        setData(response.data);
        console.log(Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  if(localStorage.getItem('role')=='customer'){
  return (
    <>
    <Navbar/>
    <section className="bookastay container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Available Rooms in BVR
        </h3>
      </div>

      <div className="secContent grid">
      
      {
        Data.map(({roomTypeID,roomType,pictureURL,totalCapacity,roomCapacity,availability,description,price}) =>{
            return(
              <div key={roomTypeID}
              data-aos="fade-up"
               className="singleDestination">
                 <div className="imageDiv">
                  <img src={pictureURL} alt={roomType}/>
                 </div>
                 <div className="cardInfo">
                  <h4 className="destTitle">
                    {roomType}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">
                   BVR Hotels Vijayawada
                    </span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                      {/* {grade} */}
                      Room Capacity:{roomCapacity}
                        {/* <small>
                          +1
                        </small> */}
                      </span>
                    </div>
                    <div className="price">
                      <h5>₹ {price} per Day</h5>
                    </div>
                  </div>
                  <div className="desc">
                    {description}
                  </div>

                  <button className='btn flex' onClick={ () => {
    const myProp ={
      RoomType:roomType,Price:price,RoomCapacity:roomCapacity
    };
    navigate('/bookastayform', { state: { myProp } });
  }}>
                    Book <HiOutlineBookmarkAlt className="icon"/>
                  </button>

                 </div>
              </div>
            )
        })
      }

      </div>
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

export default BookStay