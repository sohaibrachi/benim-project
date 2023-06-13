import React, { useState } from 'react'
import Logo from "../../assets/benim.png";
import { Link } from "react-router-dom"
import "./Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import {ShoppingCart} from "phosphor-react"

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cart"> <ShoppingCart size={32} />
         </Link>


        </div>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/reservation">Reserv</Link>
        <Link to="/cart"> <ShoppingCart size={32} />
         </Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar