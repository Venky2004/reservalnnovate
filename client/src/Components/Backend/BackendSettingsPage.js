import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BackendSettingsPage = () => {
  const navigate = useNavigate();
  const [backendUrlStored, setBackendUrlStored] = useState(localStorage.getItem('backendUrl') || 'http://localhost:31415/');
  const [backendUrlDisplayed, setBackendUrlDisplayed] = useState(backendUrlStored);
  // State to manage the input value
  const [inputValue, setInputValue] = useState(backendUrlStored);

  // Update local storage whenever backendUrlDisplayed changes
  useEffect(() => {
    localStorage.setItem('backendUrl', backendUrlDisplayed);
  }, [backendUrlDisplayed]);

  const handleBackendUrlChange = (event) => {
    let newUrl = event.target.value;
    setInputValue(newUrl);
    setBackendUrlDisplayed(newUrl);
  };

  const checkConnectionStatus = async () => {
    try {
      const response = await axios.get(`${backendUrlDisplayed}/user/check-connection`);
      console.log(response);
      if (response.status === 200) {
        toast.success('Connection established successfully!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setBackendUrlStored(backendUrlDisplayed);
      } else {
        toast.error('Failed to establish connection!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error('Failed to establish connection!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="backend-settings-container">
      <h2>Backend URL Settings</h2>
      <p>Present Backend URL: {backendUrlStored}</p>
      <label htmlFor="backend-url">Enter New Backend URL:</label>
      <input
        type="text"
        id="backend-url"
        value={inputValue}
        onChange={handleBackendUrlChange}
        placeholder="Enter Backend URL"
      />
      <button onClick={checkConnectionStatus}>Check Connection</button>
      <ToastContainer />
    </div>
  );
};

export default BackendSettingsPage;
