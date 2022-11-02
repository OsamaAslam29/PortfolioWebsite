import React from 'react'
import './About.scss'
import me from '../../Assets/me.jpg'
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia delectus sit assumenda culpa perspiciatis odio neque recusandae eius. Asperiores fuga dignissimos omnis tempore nostrum repellendus optio, eos totam natus illum, reiciendis perspiciatis corporis accusantium eligendi esse est rem excepturi perferendis. Dolor deleniti itaque, voluptates vitae cupiditate possimus dolorem nam repellendus!</p>

          <div className="flex_skills">
            <div className="basic_skills">
              <div className="skill_name">
                <div className="skill">HTML</div>
                <Box sx={{ width: '80%' }}>
                  <LinearProgress variant="buffer" value={95} />
                </Box>
              </div>
              <div className="skill_name">
                <div className="skill">CSS/Saas</div>
                <Box sx={{ width: '80%' }}>
                  <LinearProgress variant="buffer" value={90} />
                </Box>
              </div>
              <div className="skill_name">
                <div className="skill">JavaScript</div>
                <Box sx={{ width: '80%' }}>
                  <LinearProgress variant="buffer" value={70} />
                </Box>
              </div>
              <div className="skill_name">
                <div className="skill">React Js</div>
                <Box sx={{ width: '80%' }}>
                  <LinearProgress variant="buffer" value={80} />
                </Box>
              </div>
              <div className="skill_name">
                <div className="skill">Redux/Redux Toolkit</div>
                <Box sx={{ width: '80%' }}>
                  <LinearProgress variant="buffer" value={90} />
                </Box>
              </div>
            </div>
            <div className="skills">
              <div className="skill_name">
                <div className="skill">Bootstrap</div>
                <Box sx={{ width: '80%' }}>
                  <LinearProgress variant="buffer" value={90} />
                </Box>
              </div>
              <div className="skill_name">
                <div className="skill">Material UI</div>
                <Box sx={{ width: '80%' }}>
                  <LinearProgress variant="buffer" value={90} />
                </Box>
              </div>
              <div className="skill_name">
                <div className="skill">Git Hub</div>
                <Box sx={{ width: '80%' }}>
                  <LinearProgress variant="buffer" value={90} />
                </Box>
              </div>
              <div className="skill_name">
                <div className="skill">Bit Bucket</div>
                <Box sx={{ width: '80%' }}>
                  <LinearProgress variant="buffer" value={90} />
                </Box>
              </div>
              <div className="skill_name">
                <div className="skill">Api Integration</div>
                <Box sx={{ width: '80%' }}>
                  <LinearProgress variant="buffer" value={85} />
                </Box>
              </div>
            </div>
          </div>


        </div>
        <div className="image_container">
          <img src={me} alt="" />
        </div>
      </div>

    </div>
  )
}

export default About
