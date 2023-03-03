import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import { Toolbar, Typography } from "@mui/material";
import {  useParams } from 'react-router'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Sidebar from '../Sidebar';
const drawerWidth = 240;







const StateEdit = () =>{
    const auth = localStorage.getItem('user');
console.log(auth);

    const { id } = useParams();

    const [country, SetCountry] = useState('');
    const [state, SetState] = useState('')
    console.log('country' , country);
    console.log('state' , state);

    const navigate = useNavigate();
    useEffect(() => {

        const getSingleProductData = async () => {
            const { data } = await axios.get(`http://localhost:3001/api/noAuth/state/${id}`)
            console.log(data.data.country)
            SetCountry(data.data.country)
            SetState(data.data.stateTitle)
    
        
        }
        getSingleProductData()
    
    },[id])



    const Submit = async (e) => {

        e.preventDefault()
       
        // update by put request

        const data = {
            country: country,
            stateTitle: state,
        }

        await axios.put(`http://localhost:3001/api/state/${id}`, data ,
        {
            headers: {authorization:"Bearer " + auth},
        }
        ).then(result => {
            console.log(result);
            if (result.status === 200) {
              console.log(result.status);
              navigate('/stateview')
            } else {
              const err = result.err_msg;
              alert(err);
            }
    
    
        })
   }


    return(
        <div>
            <Sidebar />

            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }} style={{ marginLeft: 250, backgroundColor: '#ecf0f5' }}>
                <Toolbar />
                <div style={{ backgroundColor: 'white', height: 1000 }}>
                    <div style={{ backgroundColor: 'white', display: 'inline-flex', marginTop: 15 }}>
                        <Typography style={{ fontSize: 25, marginLeft: 10, color: 'skyBlue' }} >
                            Add State
                        </Typography>
                    </div>
                    <br />
                    <hr />
                    <div style={{ display: 'inline-flex', paddingTop: 60, paddingLeft: 60 }}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Country:
                        </Typography>

                        <select className="form-select" value={country} onChange={(e)=>{SetCountry(e.target.value)}} placeholder="Country" style={{ marginLeft: 50, height: 35, width: 300, textAlign: 'center' }}>
                            <option>-- Select Country --</option>
                            <option>India</option>
                            <option>London</option>

                        </select>
                    </div>

                    <div style={{paddingLeft: 60, paddingTop:20, display:'flex'}}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            StateTitle: 
                        </Typography>

                        <input  type='text'  onChange={(e)=>{SetState(e.target.value)}} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }} value={state} placeholder='State Title'/>
                    </div>
<div style={{paddingLeft: 270 ,   paddingTop:20}}>
<Stack spacing={2} direction="row">
      <Button onClick={Submit} variant="contained">Update</Button>
    </Stack>
</div>
                </div>
            </Box>
        </div>
    )
}

export default StateEdit;