import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { GrTasks } from "react-icons/gr";
import { MdGroups } from "react-icons/md";
import Sidebar from './Sidebar';
const drawerWidth = 240;


export default function Home() {
  return (
    <div>
      <Sidebar />  
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        style={{ marginLeft: 250 }}
      >


        <Toolbar />
        <Typography style={{ fontSize: 25 }} >
          Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1 }} style={{ marginTop: 70 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  >

            <Grid style={{ backgroundColor: '#ecf0f5', width: 360, height: 125 }}>
              <Typography style={{ fontSize: 35, marginLeft: 10 }}>
                8
              </Typography>
              <Typography className='Icon' style={{ fontSize: 50, marginRight: 30, marginTop: -40 }}><GrTasks /></Typography>
              <Typography style={{ fontSize: 15, marginLeft: 10, marginTop: 10 }}>
                Total Programmes
              </Typography>

              <hr />
              <Typography style={{ fontSize: 15, textAlign: 'center' }}>
                More Info <BsFillArrowRightCircleFill style={{ marginTop: 1 }} />
              </Typography>
            </Grid>
            <Grid style={{ backgroundColor: '#ecf0f5', marginLeft: 10, width: 360, height: 125 }} >

              <Typography style={{ fontSize: 35, marginLeft: 10 }}>
                78
              </Typography>
              <Typography className='Icon' style={{ fontSize: 50, marginRight: 30, marginTop: -40 }}><MdGroups /></Typography>
              <Typography style={{ fontSize: 15, marginLeft: 10, marginTop: 10 }}>
                Total Donors
              </Typography>

              <hr />
              <Typography style={{ fontSize: 15, textAlign: 'center' }}>
                More Info <BsFillArrowRightCircleFill style={{ marginTop: 1 }} />
              </Typography>

            </Grid>
            <Grid style={{ backgroundColor: '#ecf0f5', marginLeft: 10, width: 360, height: 125 }}>

            <Typography style={{ fontSize: 35, marginLeft: 10 }}>
                24
              </Typography>
              <Typography className='Icon' style={{ fontSize: 50, marginRight: 30, marginTop: -40 }}><MdGroups /></Typography>
              <Typography style={{ fontSize: 15, marginLeft: 10, marginTop: 10 }}>
                Total Take a Pledge
              </Typography>

              <hr />
              <Typography style={{ fontSize: 15, textAlign: 'center' }}>
                More Info <BsFillArrowRightCircleFill style={{ marginTop: 1 }} />
              </Typography>

            </Grid>
            <Grid style={{ backgroundColor: '#ecf0f5', marginTop: 20, width: 360, height: 125 }}>

            <Typography style={{ fontSize: 35, marginLeft: 10 }}>
                6
              </Typography>
              <Typography className='Icon' style={{ fontSize: 50, marginRight: 30, marginTop: -40 }}><MdGroups /></Typography>
              <Typography style={{ fontSize: 15, marginLeft: 10, marginTop: 10 }}>
                Total OurImpact
              </Typography>

              <hr />
              <Typography style={{ fontSize: 15, textAlign: 'center' }}>
                More Info <BsFillArrowRightCircleFill style={{ marginTop: 1 }} />
              </Typography>

            </Grid>
            <Grid style={{ backgroundColor: '#ecf0f5', marginTop: 20, marginLeft: 10, width: 360, height: 125 }} >

            <Typography style={{ fontSize: 35, marginLeft: 10 }}>
                10
              </Typography>
              <Typography className='Icon' style={{ fontSize: 50, marginRight: 30, marginTop: -40 }}><MdGroups /></Typography>
              <Typography style={{ fontSize: 15, marginLeft: 10, marginTop: 10 }}>
                Total Joined Volunteers
              </Typography>

              <hr />
              <Typography style={{ fontSize: 15, textAlign: 'center' }}>
                More Info <BsFillArrowRightCircleFill style={{ marginTop: 1 }} />
              </Typography>

            </Grid>
            <Grid style={{ backgroundColor: '#ecf0f5', marginTop: 20, marginLeft: 10, width: 360, height: 125 }}>

            <Typography style={{ fontSize: 35, marginLeft: 10 }}>
                34
              </Typography>
              <Typography className='Icon' style={{ fontSize: 50, marginRight: 30, marginTop: -40 }}><MdGroups /></Typography>
              <Typography style={{ fontSize: 15, marginLeft: 10, marginTop: 10 }}>
                Total Apply Volunteers
              </Typography>

              <hr />
              <Typography style={{ fontSize: 15, textAlign: 'center' }}>
                More Info <BsFillArrowRightCircleFill style={{ marginTop: 1 }} />
              </Typography>
              
            </Grid>
          </Grid>
        </Box>
      </Box>
     
    </div>

  );
}