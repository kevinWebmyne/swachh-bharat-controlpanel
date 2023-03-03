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







const UserEdit = () =>{
    const auth = localStorage.getItem('user');
console.log(auth);

    const { id } = useParams();

    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [role, SetRole] = useState('')



    const navigate = useNavigate();
    useEffect(() => {

        const getSingleProductData = async () => {
            const { data } = await axios.get(`http://localhost:3001/api/users/${id}`,
            {
                headers: {authorization:"Bearer " + auth},
            })
            console.log(data.data.country)
            SetName(data.data.name)
            SetEmail(data.data.email)
            SetPassword(data.data.password)
            SetRole(data.data.role)
        }
        getSingleProductData()
    
    },[id])



    const Submit = async (e) => {

        e.preventDefault()
       
        // update by put request

        const data = {
            name: name,
            email: email,
            password: password,
            role: role
        }

        await axios.put(`http://localhost:3001/api/users/${id}`, data ,
        {
            headers: {authorization:"Bearer " + auth},
        }
        ).then(result => {
            console.log(result);
            if (result.status === 200) {
              console.log(result.status);
              navigate('/countryView')
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
                            Add User
                        </Typography>
                    </div>
                    <br />
                    <hr />
                    <div style={{ display: 'inline-flex', paddingTop: 60, paddingLeft: 60 }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                             Name:
                        </Typography>

                        <input  type='text' value={name}  onChange={(e)=>{SetName(e.target.value)}} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }} />
                    </div>

                    <div style={{paddingLeft: 60, paddingTop:20, display:'flex'}}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Email:
                        </Typography>

                        <input  type='text' value={email}  onChange={(e)=>{SetEmail(e.target.value)}} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }} />
                    </div>

                    <div style={{paddingLeft: 60, paddingTop:20, display:'flex'}}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Password:
                        </Typography>

                        <input  type='text'  value={password} onChange={(e)=>{SetPassword(e.target.value)}} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }} />
                    </div>



                    <div style={{ display: 'inline-flex', paddingTop: 60, paddingLeft: 60 }}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Role:
                        </Typography>

                        <select className="form-select" value={role} onChange={(e)=>{SetRole(e.target.value)}} placeholder="Country" style={{ marginLeft: 50, height: 35, width: 300, textAlign: 'center' }}>
                            <option>-- Select Role --</option>
                            <option>Admin</option>
                            <option>test Admin</option>

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

export default UserEdit;