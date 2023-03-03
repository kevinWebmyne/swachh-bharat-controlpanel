import Sidebar from '../Sidebar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Toolbar, Typography } from "@mui/material";
const drawerWidth = 240;
const LanguageAdd = () => {

    const auth = localStorage.getItem('user');
    console.log(auth);
    

    const [languageCode, SetLanguageCode] = useState('');
    const [languageName, SetLanguageName] = useState('')
    const [status, SetStatus] = useState('')
    const navigate = useNavigate();

    const Submit = async (e) => {

        e.preventDefault()
       
        // update by put request

        const data = {
            languageCode: languageCode,
            languageName: languageName,
            status: status
        }

        await axios.post(`http://localhost:3001/api/language/`, data, {
            headers: {authorization:"Bearer " + auth},
        }).then(result => {
            console.log(result);
            if (result.status === 200) {
              console.log(result.status);
              navigate('/languageView')
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
                            Add Language 
                        </Typography>
                    </div>
                    <br />
                    <hr />
                    <div style={{ display: 'inline-flex', paddingTop: 60, paddingLeft: 60 }}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Language Code:
                        </Typography>

                        <select className="form-select" value={languageCode} onChange={(e)=>{SetLanguageCode(e.target.value)}} placeholder="Country" style={{ marginLeft: 50, height: 35, width: 300, textAlign: 'center' }}>
                        <option value="">-Select Language Code-</option>
                      <option value="gu">gu (Gujarati)</option>
                      <option value="hi">hi (Hindi)</option>
                      <option value="en">en (English)</option>
                      <option value="mr">mr (Marathi)</option>
                      <option value="pa">pa (Punjabi)</option>
                      <option value="bn">bn (Bengali)</option>
                      <option value="kn">kn (Kannada)</option>
                      <option value="ml">ml (Malayalam)</option>
                      <option value="sd">sd (Sindhi)</option>
                      <option value="ta">ta (Tamil)</option>
                      <option value="te">te (Telugu)</option>
					  <option value="other">Other</option>

                        </select>
                    </div>

                    <div style={{paddingLeft: 60, paddingTop:20, display:'flex'}}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Language Name: 
                        </Typography>

                        <input  type='text'  onChange={(e)=>{SetLanguageName(e.target.value)}} style={{ marginLeft: 45, height: 35, width: 300, textAlign: 'center' }} value={languageName} placeholder='State Title'/>
                    </div>

                    <div style={{ display: 'inline-flex', paddingTop: 20, paddingLeft: 60 }}>
                        <Typography style={{ fontSize: 18, marginLeft: 10 }} >
                            Status:
                        </Typography>

                        <select className="form-select" value={status} onChange={(e)=>{SetStatus(e.target.value)}} placeholder="Country" style={{ marginLeft: 125, height: 35, width: 300, textAlign: 'center' }}>
                            <option>Active</option>
                            <option>Inactive</option>

                        </select>
                    </div>

                    <div style={{paddingLeft: 270 ,   paddingTop:20}}>
<Stack spacing={2} direction="row">
      <Button onClick={Submit} variant="contained">Add</Button>
    </Stack>
</div>
                </div>
            </Box>
        </div>
    )
}

export default LanguageAdd;