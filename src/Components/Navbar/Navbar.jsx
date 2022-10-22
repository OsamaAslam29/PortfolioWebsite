import React from 'react'
import './Navbar.scss'
import Fade from 'react-reveal/Fade';

const Navbar = () => {
  return (
    <Fade top>
      <div className='nav_container'>
        <div className="logo">
          <h1>Sufyan</h1>
        </div>
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Experience</a>
          <a href="#">Projects</a>
          <a href="#">Contact Me</a>
        </div>
      </div>
    </Fade>
  )
}

export default Navbar
