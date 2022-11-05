import React from 'react'
import './Navbar.scss'
import Fade from 'react-reveal/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

const Navbar = () => {

  const [state, setState] = React.useState({

    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 265 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='main'>
        <div className="logo">
          <h1>Sufyan</h1>
        </div>
        <div className="nav">
          <div className="mobile_icon" to="/Home">
            <HomeOutlinedIcon className='icon_size' />
            <div>Home</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <PermIdentityOutlinedIcon className='icon_size' />
            <div style={{paddingTop:"6px"}}>About</div>
          </div>  
          <div className="mobile_icon" to="/Home">
            <SettingsOutlinedIcon className='icon_size' />
            <div>Services</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <PostAddOutlinedIcon className='icon_size' />
            <div>Projects</div>
          </div>
          <div className="mobile_icon" to="/Home">
            <AddIcCallOutlinedIcon className='icon_size'/>
            <div>Contact Me</div>
          </div>
        </div>
      </div>

    </Box>
  );

  return (
    <Fade top>
      <div className='nav_container'>
        <div className="logo">
          <h1>Sufyan</h1>
        </div>
        <div className="menu_list">
          <div className="web_menu">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Contact Me</a>
          </div>
          <div className="mobile_menu">
            <div className='ham_none'>
              {['left'].map((anchor) => (
                <React.Fragment key={anchor}>

                  <div className="menu">
                    <MenuIcon onClick={toggleDrawer(anchor, true)} style={{fontSize:"35px"}} />
                  </div>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>


          </div>
        </div>
      </div>


    </Fade>
  )
}

export default Navbar
