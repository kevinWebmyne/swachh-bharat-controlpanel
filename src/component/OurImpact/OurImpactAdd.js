import Sidebar from '../Sidebar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Toolbar, Typography } from "@mui/material";
const drawerWidth = 240;
const OurImpactAdd = () => {
    const [title, SetTitle] = useState('');
    const [description, SetDescription] = useState('')
    const [image, setImage] = useState({
        file: [],
        filepreview: null,
      });
    const [status, SetStatus] = useState('')
    const navigate = useNavigate();






    const handleInputChange = (event) => {
        // console.log(event.target.files[0]);
        setImage({
          ...image,
          file: event.target.files[0],
          filepreview: URL.createObjectURL(event.target.files[0]),
        });
      }










    const Submit = async (e) => {

        const auth = localStorage.getItem('user');
console.log(auth);

e.preventDefault()

// update by put request

const formdata = new FormData()
formdata.append('image', image.file);
formdata.append('title', title);
formdata.append('description', description);
formdata.append('status', status);

// console.log(formdata);
await axios.post(`http://localhost:3001/api/impact/`, formdata,
    {
        headers: { authorization: "Bearer " + auth },
    }
).then(result => {
    console.log(result);
    if (result.status === 200) {
        console.log(result.status);
        navigate('/ourImpactView')
    } else {
        const err = result.err_msg;
        alert(err);
    }


})
   }

    return (
        <div>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }} style={{ marginLeft: 250, backgroundColor: '#ecf0f5' }}>
            <Toolbar />
            <div style={{ backgroundColor: 'white', height: 1000 }}>
                <div style={{ backgroundColor: 'white', display: 'inline-flex', marginTop: 15 }}>
                    <Typography style={{ fontSize: 25, marginLeft: 10, color: 'skyBlue' }} >
                        Add Ourimpact
                    </Typography>
                </div>
                <br />
                <hr />
                <div style={{ display: 'inline-flex', paddingTop: 60, paddingLeft: 60 }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                        Title:
                    </Typography>

                    <input type='text' onChange={(e) => { SetTitle(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }}  placeholder=' Title' />

                </div>



                <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}> 
                <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                        Image :
                    </Typography>
                    <input  style={{ fontSize: 15, marginLeft: 50 }} type='file'  onChange={handleInputChange} />
                    <div className='image-preview'> 
          {image.filepreview !== null ? 
        <img className="previewimg"  src={image.filepreview} height={200} width={200} alt="UploadImage" />
      : null}
      </div>

                </div>

                <div style={{ display: 'inline-flex', paddingTop: 60, paddingLeft: 60 }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                        Status :
                    </Typography>
                    <select className="form-select"  onChange={(e) => { SetStatus(e.target.value) }} placeholder="Status" style={{ marginLeft: 50, height: 35, width: 300, textAlign: 'center' }}>
                        <option>-- Select Status --</option>
                        <option>Active</option>
                        <option>InActive</option>

                    </select>

                </div>

                <div style={{ paddingLeft: 270, paddingTop: 20 }}>
                    <Stack spacing={2} direction="row">
                        <Button onClick={Submit} variant="contained">Update</Button>
                    </Stack>
                </div>
            </div>
        </Box>
    </div>
    )
}

export default OurImpactAdd;