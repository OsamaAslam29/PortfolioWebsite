import React from 'react'
import './About.scss'
import me from '../../Assets/me.png'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const About = () => {
  return (
    <div className='about_container'>
      <div className="divider_line">
        <div className="left_border"></div>
        <div className="content">About</div>
        <div className="right_border"></div>
      </div>

      <div className="flex_about">
        <div className="skils_container">
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="buffer" value={50} />
          </Box>
        </div>
        <div className="image_container">
          <img src={me} alt="" />
        </div>
      </div>

    </div>
  )
}

export default About
