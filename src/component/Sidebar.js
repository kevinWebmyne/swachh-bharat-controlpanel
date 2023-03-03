import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { GiAppleMaggot } from "react-icons/gi";
import {Link , useNavigate } from 'react-router-dom'
const drawerWidth = 240;
const Sidebar = () => {


  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/')
}



    return(
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              SwachhBharat
            </Typography>
           <Link to={'/home'}> <Typography variant="h6" noWrap component="div" style={{ marginLeft: 940, fontSize: 15 }}>
              Dashboard
            </Typography> </Link>
            <Link to={'/userView'}>   <Typography variant="h6" noWrap component="div" style={{ marginLeft: 30, fontSize: 15 }}>
              Profile
            </Typography>  </Link>
            <Link onClick={logout} to="/">    <Typography variant="h6" noWrap component="div" style={{ marginLeft: 30, fontSize: 15 }}>
              Logout
            </Typography> </Link>
          </Toolbar> 
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}

        >
          <div style={{ backgroundColor: 'white' }}>

            <Toolbar style={{ marginTop: 10 }} />
            <Typography style={{ fontSize: 17, textAlign: 'center' }}>
              Master
            </Typography>
            <Box sx={{ overflow: 'auto' }}>
              <List>
                <ul className='Silder-ul' >
                  <li> <GiAppleMaggot style={{marginRight:5}} />State
                    <ul>
                        <Link to='/stateView'><li>View All</li> </Link>
                      <Link to='/stateAdd'><li>Add New</li></Link>
                    </ul>
                  </li>

                  <li> Language
                    <ul>
                    <Link to='/languageView'><li>View All</li> </Link>
                      <Link to='/languageAdd'><li>Add New</li></Link>
                    </ul>
                  </li>
                  <li> Country
                    <ul>
                    <Link to='/countryView'><li>View All</li> </Link>
                      <Link to='/countryAdd'><li>Add New</li></Link>
                    </ul>
                  </li>
                  <li> Pages
                    <ul>
                    <Link to='/pageView'><li>View All</li> </Link>
                    </ul>
                  </li>
                  <li> Volunteer
                    <ul>
                      <Link to='/volunteerDataView'><li>View All</li></Link>
                      <Link to='/volunteerDataAdd'><li>Add New</li></Link>
                    </ul>
                  </li>
                  <li> Slider
                    <ul>
                    <Link to='/sliderView'><li>View All</li></Link>
                      <Link to='/sliderAdd'><li>Add New</li></Link>
                    </ul>
                  </li>
                  <li>  Ourimpact
                    <ul>
                    <Link to='/ourImpactView'><li>View All</li></Link>
                      <Link to='/ourImpactAdd'><li>Add New</li></Link>
                    </ul>
                  </li>
                  <li> Takeapledge
                    <ul>
                    <Link to='/pledgeView'> <li>View All</li> </Link>
                    </ul>
                  </li>
                  <li> Programmes
                    <ul>
                    <Link to='/programmesView'><li>View All</li></Link>
                      <Link to='/programmesAdd'><li>Add New</li></Link>
                    </ul>
                  </li>
                  <li> Donation
                    <ul>
                    <Link to='/donorView'> <li>View All</li> </Link>
                    </ul>
                  </li>
<li> Registervolunteer
                    <ul>
                    <Link to='/registerVolunteerView'> <li>View All</li> </Link>
                    </ul>

                  </li>
                </ul>
              </List>
              <Divider />
              <Typography style={{ marginTop: 10, marginBottom: -10, textAlign: 'center', fontSize: 17 }}>
                Setup
              </Typography>
              <List>
                <ul className='Silder-ul' >
                  <li> Cmsblock
                    <ul>
                      <Link to='/cmsView'> <li>View All</li> </Link>
                    </ul>
                  </li>
                  <li> Contacts
                    <ul>
                     <Link to='/contactView'> <li>View All</li> </Link>
                    </ul>
                  </li>
                  <li> Admin
                    <ul>
                    <Link to='/userView'><li>View All</li></Link>
                      <Link to='/userAdd'><li>Add New</li></Link>
                    </ul>
                  </li>
                </ul>
              </List>
            </Box>
          </div>
        </Drawer>

      </Box>

    )
}


export default Sidebar;