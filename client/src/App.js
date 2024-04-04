import React from 'react';
import './App.css';
import {Router,Routes,Route} from 'react-router-dom'


import Landingpage from './Components/GuestPanel/LandingPage/Landingpage';
import Login from './Components/GuestPanel/Login/Login'
import SignUp from './Components/GuestPanel/SignUp/SignUp';
import OtpPage from './Components/GuestPanel/OtpPage/OtpPage';
import ForgotPass from './Components/GuestPanel/ForgotPass/ForgotPass';
import ForgotPassOtpPage from './Components/GuestPanel/ForgotPass/OtpPage'
import UpdatePassword from './Components/GuestPanel/ForgotPass/UpdatePassword';
import SearchHotels from './Components/GuestPanel/SearchHotels/SearchHotels';

import Success from './Components/DailogBoxes/Success';
import Failed from './Components/DailogBoxes/Failed';
import LoginFailed from './Components/DailogBoxes/LoginFailed';
import CityNotFound from './Components/DailogBoxes/CityNotFound';
import BackendSettingsPage from './Components/Backend/BackendSettingsPage';

import BVR from './Components/CustomerPanel/BVR/BVR';
import BookStay from './Components/CustomerPanel/Book-A-Stay/BookStay';
import Bookastayform from './Components/CustomerPanel/BookAStayForm/bookastayform'; 
import Paymentpage from './Components/CustomerPanel/Payment/Payment'
import ViewBooking from './Components/CustomerPanel/Booking/ViewBooking'

import Home from './Components/AdminPanel/AdminHome/Home';
import AddCategory from './Components/AdminPanel/AddCategory/AddCategory';
import AddRoom from './Components/AdminPanel/AddRoom/AddRoom';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Landingpage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/otp" element={<OtpPage/>} />
      <Route path="/success" element={<Success/>}/>
      <Route path="/failure" element={<Failed/>}/>
      <Route path="/loginfailed" element={<LoginFailed/>}/>
      <Route path="/forgotpass" element={<ForgotPass/>}/>
      <Route path="/forgotpassotp" element={<ForgotPassOtpPage/>}/>
      <Route path="/updatepass" element={<UpdatePassword/>}/>
      <Route path="/city404" element={<CityNotFound/>}/>
      <Route path="/searchhotels/:destination" element={<SearchHotels/>}/>
      <Route path='/bookastay' element={<BookStay/>}/>
      <Route path='/bookastayform' element={<Bookastayform/>}/>
      <Route path="/adminhome" element={<Home/>}/>
      <Route path='/addcat' element={<AddCategory/>}/>
      <Route path='/addroom' element={<AddRoom/>}/>
      <Route path="/pay" element={<Paymentpage/>}/>
      <Route path="/viewbookings" element={<ViewBooking/>}/>
      <Route path="/backendsetup" element={<BackendSettingsPage/>}/>
      {/* <Route path="/searchhotels" element={<SearchHotels/>}/> */}
      <Route path="/home" element={<BVR/>}/>
      </Routes>
  );
}

export default App;
