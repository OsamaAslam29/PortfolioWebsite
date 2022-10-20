import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='nav_container'>
      <div className="logo">Sufyan</div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
        <a href="#">Contact Me</a>
      </div>
    </div>
  )
}

export default Navbar
