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







const PageEdit = () =>{
    const auth = localStorage.getItem('user');
console.log(auth);

    const { id } = useParams();

    const [pageTitle, SetPageTitle] = useState('');
    const [pageDescription, SetPageDescription] = useState('')
    const [status, setStatus] = useState('')

    const navigate = useNavigate();
    useEffect(() => {

        const getSingleProductData = async () => {
            const { data } = await axios.get(`http://localhost:3001/api/noAuth/page/${id}`)
            console.log(data.data.country)
            SetPageTitle(data.data.pageTitle)
            SetPageDescription(data.data.description)
            setStatus(data.data.status)
        
        }
        getSingleProductData()
    
    },[id])



    const Submit = async (e) => {

        e.preventDefault()
       
        // update by put request

        const data = {
            pageTitle: pageTitle,
            description: pageDescription,
            status:  status
        }

        await axios.put(`http://localhost:3001/api/page/${id}`, data ,
        {
            headers: {authorization:"Bearer " + auth},
        }
        ).then(result => {
            console.log(result);
            if (result.status === 200) {
              console.log(result.status);
              navigate('/pageview')
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
                            Edit Page
                        </Typography>
                    </div>
                    <br />
                    <hr />
                    <div style={{ display: 'inline-flex', paddingTop: 60, paddingLeft: 60 }}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Page Title :
                        </Typography>
                        <input  type='text'  onChange={(e)=>{SetPageTitle(e.target.value)}} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }} value={pageTitle} placeholder='Page Title'/>
                       

                    </div>

                    <div style={{ display: 'flex', paddingTop: 60, paddingLeft: 60 }}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Page Description :
                        </Typography>
                        
                        <input  type='text'  onChange={(e)=>{SetPageDescription(e.target.value)}} style={{ marginLeft: 40, height: 100, width: 300,  overflow:'scroll', textAlign: 'justify' }} value={pageDescription} placeholder='Page Description'/>
                        

                    </div>
                    <div style={{ display: 'inline-flex', paddingTop: 60, paddingLeft: 60 }}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Status :
                        </Typography>
                        <select className="form-select" value={status} onChange={(e)=>{setStatus(e.target.value)}} placeholder="Status" style={{ marginLeft: 50, height: 35, width: 300, textAlign: 'center' }}>
                            <option>-- Select Status --</option>
                            <option>Active</option>
                            <option>InActive</option>

                        </select>

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

export default PageEdit;