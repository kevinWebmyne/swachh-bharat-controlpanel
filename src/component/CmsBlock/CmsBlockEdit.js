import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import { Toolbar, Typography } from "@mui/material";
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Sidebar from '../Sidebar';
const drawerWidth = 240;

const CmsBlockEdit = () => {
    const auth = localStorage.getItem('user');

    const { id } = useParams();

    const [title, SetTitle] = useState('');
    const [description, SetDescription] = useState('')
    const[identifier, SetIdentifier] = useState('')
    const [image, setImage] = useState('');
    const [status, SetStatus] = useState('')

    console.log(image);
    const navigate = useNavigate();
    useEffect(() => {

        const getSingleProductData = async () => {
            const { data } = await axios.get(`http://localhost:3001/api/cms/${id}`, 
            {
                headers: { authorization: "Bearer " + auth },
            })
            console.log(data.data.status)
            SetTitle(data.data.title)
            SetDescription(data.data.description)
            setImage(data.data.image)
            SetStatus(data.data.status)
            SetIdentifier(data.data.identifier)


        }
        getSingleProductData()

    }, [id])

    const Submit = async (e) => {

        e.preventDefault()

        // update by put request

        const formdata = new FormData()
        formdata.append('image', image);
        formdata.append('title', title);
        formdata.append('identifier',identifier)
        formdata.append('description', description);
        formdata.append('status', status);

        // console.log(formdata);
        await axios.put(`http://localhost:3001/api/cms/${id}`, formdata,
            {
                headers: { authorization: "Bearer " + auth },
            }
        ).then(result => {
            console.log(result);
            if (result.status === 200) {
                console.log(result.status);
                navigate('/sliderView')
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
                            Edit Cms Block
                        </Typography>
                    </div>
                    <br />
                    <hr />
                    <div style={{ display: 'inline-flex', paddingTop: 60, paddingLeft: 60 }}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                        Cms Block Identifier:
                        </Typography>

                        <input type='text' onChange={(e) => { SetIdentifier(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }} value={identifier}  />

                    </div>
                    <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                        Cms Block Title::
                        </Typography>

                        <input type='text' onChange={(e) => { SetTitle(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }} value={title} placeholder='State Title' />
                    </div>
                    <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                        Cms Block Descripation::
                        </Typography>

                        <input type='text' onChange={(e) => { SetDescription(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }} value={description} placeholder='State Title' />
                    </div>

                    <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}> 
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Image :
                        </Typography>
                        <input  style={{ fontSize: 15, marginLeft: 50 }} type='file'  onChange={(e) =>{setImage(e.target.files[0])}} />

                        <img alt='images' src={`http://localhost:3001/uploads/${image}`} height={50} width={90} />

                    </div>

                    <div style={{ display: 'inline-flex', paddingTop: 60, paddingLeft: 60 }}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Status :
                        </Typography>
                        <select className="form-select" value={status} onChange={(e) => { SetStatus(e.target.value) }} placeholder="Status" style={{ marginLeft: 50, height: 35, width: 300, textAlign: 'center' }}>
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

export default CmsBlockEdit;