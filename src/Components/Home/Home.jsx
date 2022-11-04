import React from 'react'
import Flip from 'react-reveal/Flip';
import './Home.scss'
import { Button } from '@mui/material';
import CV from "../../Assets/cv.pdf"

const Home = () => {
    return (
        <div className='home_container'>
            <div className="bio_data">
                <h5>Hi, my name is</h5>
                <Flip top>
                <h1 className='name'>Abu Sufyan</h1>
                </Flip>
                <h1 className='bio'>I build things for the web.</h1>
                <p>
                    I'm MERN Stack Developer with over 1 year experience. I'm writing reusable, testable, and efficient code and developing full stack web applications.
                </p>
                <div className="home_btns">
                    <Button className="touch" variant="outlined">Get in touch</Button>

                    <Button className="touch" onClick={()=> window.location.href = CV} variant="Download">Download CV</Button>

                </div>
            </div>
            <div className="bio_animation">
                <iframe title="background-3d" src="https://my.spline.design/awesomefolio-0c39efc3de701ba97be395cc128e4e2f/" frameBorder="0" height="100%" className="jss83"></iframe>
                <div className="black_box"></div>
            </div>
        </div>
    )
}

export default Home
