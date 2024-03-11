import React from 'react';
import {useNavigate} from "react-router-dom";
import navbar from '../css/navbar.css'
const Navbar = () => {
  const navigate = useNavigate();
  const goPage = (page) => {
    navigate(page);
  }
  return (
    <div className='navbar-container'>
      네비게이션      
    </div>
  );
};

export default Navbar;