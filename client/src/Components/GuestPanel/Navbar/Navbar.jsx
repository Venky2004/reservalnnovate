import {React,useState} from 'react'
import './navbar.css'
import {FaHotel} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom/dist'
const Navbar = () => {

  const [active,setActive]=useState('navBar')
  // Function to toggle navbar
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }
  // Function to remove navBar
  const removeNav=()=>{
    setActive('navBar')
  }

  const navigate = useNavigate(false);


  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  function scrollToElement(elementId) {
    const middleOfPage = document.body.offsetHeight / 4;
    window.scroll({
      top: middleOfPage,
      left: 0, 
      behavior: 'smooth',
    });

  }

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className="logoDiv">
          <a href="#" onClick={() => {navigate("/");}} className="logo flex">
            <h1> <FaHotel className="icon"/> Reservalnnovate</h1>
          </a>
        </div>

      <div className={active}>
        <ul className="navLists flex">
          <li className="navItem">
            <a href="" onClick={() => {navigate("/");}} className="navLink">Home</a>
          </li>
          <li className="navItem">
           
            <a  href="#" onClick={handleScroll} className="navLink">About</a>
            
          </li>
          <li className="navItem">
            <a href="#" onClick={scrollToElement} className="navLink">Hotels</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Contact us</a>
          </li>
          <button className='btn' onClick={() => {navigate("/login");}}>
            <a href="">Book Now</a>
          </button>
        </ul>

        <div onClick={removeNav} className="closeNavbar">
          <AiFillCloseCircle className="icon"/>
        </div>
      </div>

      <div onClick={showNav}  className="toggleNavbar">
        <TbGridDots className="icon"/>
      </div>

      </header>

    </section>
  )
}

export default Navbar