import React from 'react'
import {Link} from 'react-router-dom'
import "../home/Home.css"
import BannerImage from "../../assets/couvertur.jpg"
function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage })` }}>
      <div className='headerContainer' >
        
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home