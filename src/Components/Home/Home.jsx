import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div className='home_container'>
        <div className="bio_data">
            <h5>Hi, my name is</h5>
            <h1>Abu Sufyan</h1>
            <h1 className='bio'>I build things for the web.</h1>
            <p>
                I'm MERN Stack Developer with over 1 year experience. I'm writing reusable, testable, and efficient code and developing full stack web applications. 
            </p>
        </div>
        <div className="bio_animation">
            <iframe title="background-3d" src="https://my.spline.design/awesomefolio-0c39efc3de701ba97be395cc128e4e2f/" frameBorder="0" height="100%" className="jss83"></iframe>
            <div className="black_box"></div>
        </div>
    </div>    
  )
}

export default Home
