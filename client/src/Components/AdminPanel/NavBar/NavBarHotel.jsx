import {React,useState} from 'react'
import './navbar.css'
import {FaHotel} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
const NavBarHotel = () => {

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

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className="logoDiv">
          <a href="#"  onClick={() => {navigate("/adminhome");}} className="logo flex">
            <h1> <FaHotel className="icon"/>  BVR ADMIN PANEL</h1>
          </a>
        </div>

      <div className={active}>
        <ul className="navLists flex">
          <li className="navItem">
            <a href="#" onClick={() => {navigate("/adminhome");}} className="navLink">Home</a>
          </li>
          <li className="navItem">
            <a href="#" onClick={() => {navigate("/addroom");}} className="navLink">Add Room</a>
          </li>
          <li className="navItem">
            <a href="#"  onClick={() => {navigate("/addcat");}} className="navLink">Add Category</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Approval Requests</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Bookings</a>
          </li>
          <button className='btn'>
            <a href="">LogOut</a>
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

export default NavBarHotel