import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../media/images/hamburger.png'
import "../../media/css/style.css"
import "../policyDocs/policyDocs"
//import PolicyDocs from '../policyDocs/policyDocs';
import axios from 'axios';


const Navbar = () => {
  const navigate =useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };



    const handlepdf=async()=>{
      try {
        
        const response = await axios.get('http://localhost:8000/PolicyDocs');
        // console.log("resskhfjkwdbfhrw",response.data.result)
        navigate('/policy', { state:{ props: response.data.result} });
      } catch (error) {
        console.error('Error fetching policy data:', error);
    
      
      
    };
  
  }


  
  return (
    <div className='navbar'>
      <img
        src={icon}
        alt='hamburgerIcon'
        className='hamburgerIcon'
        onClick={toggleNavbar}
      />
      <ul className={`navbarItems ${showNavbar ? 'show' : ''}`}>
        <li>
          <Link className='navbarLinks' to='/home'>
            Home
          </Link>{' '}
        </li>
        <li>
          <Link className='navbarLinks' to ='/policy'>Profile Section</Link>{' '}
        </li>
        <li className='navbarLinks' onClick={handlepdf}>
            Policy Docs
        </li>
        <li>
          <Link className='navbarLinks'>Attendance</Link>{' '}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;