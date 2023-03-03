import Sidebar from '../Sidebar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Toolbar, Typography } from "@mui/material";
const drawerWidth = 240;
const ProgrammesAdd = () => {
    const [programmePlace, SetProgrammePlace] = useState('');
    const [description, SetDescription] = useState('')
    const [whyThisPlace, SetWhyThisPlace] = useState('')
    const [state, SetState] = useState('')
    const [city, SetCity] = useState('')
    const [volunteers, SetVolunteers] = useState('')
    const [peopleBenefited, SetPeopleBenefited] = useState('')
    const [status, SetStatus] = useState('')
    const [areaCover, SetAreaCover] = useState('')
    const [youthsTrained, SetYouthsTrained] = useState('')
    const [image, setImage] = useState({
        file: [],
        filepreview: null,
      });
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
formdata.append('programme_place', programmePlace);
formdata.append('description', description);
formdata.append('why_this_place', whyThisPlace);
formdata.append('state', state);
formdata.append('city', city);
formdata.append('volunteers', volunteers);
formdata.append('people_benefited', peopleBenefited);
formdata.append('area_cover', areaCover);
formdata.append('youths_trained', youthsTrained);
formdata.append('status', status);

// console.log(formdata);
await axios.post(`http://localhost:3001/api/programmes/`, formdata,
    {
        headers: { authorization: "Bearer " + auth },
    }
).then(result => {
    console.log(result);
    if (result.status === 200) {
        console.log(result.status);
        navigate('/programmesView')
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
                        Add Programmes
                    </Typography>
                </div>
                <br />
                <hr />
                <div style={{ display: 'inline-flex', paddingTop: 60, paddingLeft: 60 }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                    Programmes Place:
                    </Typography>

                    <input type='text' onChange={(e) => { SetProgrammePlace(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }} />

                </div>

                <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                        Description:
                    </Typography>

                    <input type='text' onChange={(e) => { SetDescription(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }}  />
                </div>

                <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                    Why this Place?:
                    </Typography>

                    <input type='text' onChange={(e) => { SetWhyThisPlace(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }}  />
                </div>

                <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                        State:
                    </Typography>

                    <input type='text' onChange={(e) => { SetState(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }}  />
                </div>
                <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                        City:
                    </Typography>

                    <input type='text' onChange={(e) => { SetCity(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }}  />
                </div>

                <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                        Volunteers:
                    </Typography>

                    <input type='text' onChange={(e) => { SetVolunteers(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }}  />
                </div>

                <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                    People Benefited:
                    </Typography>

                    <input type='text' onChange={(e) => { SetPeopleBenefited(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }}   />
                </div>

                <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                    Youths Trained: 
                    </Typography>

                    <input type='text' onChange={(e) => { SetYouthsTrained(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }}   />
                </div>


                <div style={{ paddingLeft: 60, paddingTop: 20, display: 'flex' }}>
                    <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                    Area Cover:
                    </Typography>

                    <input type='text' onChange={(e) => { SetAreaCover(e.target.value) }} style={{ marginLeft: 40, height: 35, width: 300, textAlign: 'center' }}  />
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

export default ProgrammesAdd;