import * as React from 'react';
import { styled } from '@mui/material/styles';
import Sidebar from "../Sidebar";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const drawerWidth = 240;
const SliderView = () => {

    const [size, setSize] = useState('10');
    const [items, setItems] = useState([]);
    const handleChange = (event) => {
        setSize(event.target.value);
    };


    const auth = localStorage.getItem('user');
    
    const [page, setPage] = useState(1);
    const pageChange = (event, value) => {
        setPage(value);
    };

    const getProductsData = async () => {
        const { data } = await axios.get(`http://localhost:3001/api/noAuth/slider/?page=${page}&size=${size}`)
        let product = data.data
        console.log(product);
        const results = product.filter((curData) => {
            return curData.is_verified === true;
          })
          console.log(results);
          setItems(results)
    }
    useEffect(() => {

        getProductsData()
        //    setState(data)
    }, [page,size, ])



    const deleteHandle =  (id) => {
        console.log(auth);
        let body = "";
            let text = "Are You Sure To Delete ?";
            if (window.confirm(text) == true) {
                console.log(auth);
                 axios.put(`http://localhost:3001/api/slider/delete/${id}`, body  ,{
                    headers: {authorization:"Bearer " + auth }
                }
                ).then(result=>{
        
                getProductsData()
            })
            } else {
                getProductsData();
            }
        
        }



    const Root = styled('div')`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #ddd;
  }
`;

    console.log(items);
    return (
        <div>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }} style={{ marginLeft: 250, backgroundColor: '#ecf0f5' }}>
                <Toolbar />
                <div style={{ backgroundColor: 'white', height: 1000 }}>
                    <div style={{ backgroundColor: 'white', display: 'inline-flex', marginTop: 15 }}>
                        <Typography style={{ fontSize: 25, marginLeft: 10 }} >
                            Slider List
                        </Typography>
                        <Link to={'/sliderAdd'}>     
                        <button style={{ color: 'black',height:30, backgroundColor: 'lightgreen', borderStyle: 'none', marginLeft: 830, width: 100 }}> Add Slider</button>
                        </Link>
                    </div>
                    <br />
                    <hr />

                    <div style={{ display: 'inline-flex', marginLeft: 10, marginTop: 20, width: 1000 }}>


                        <Typography style={{ fontSize: 15 }}  >
                            Show
                        </Typography>

                        <Select
                            style={{ width: 60, height: 22, marginLeft: 5 }}
                            value={size}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>25</MenuItem>
                            <MenuItem value={30}>50</MenuItem>
                        </Select>
                        <InputLabel style={{ fontSize: 15, marginLeft: 5 }}>Entries</InputLabel>
                        <InputLabel style={{ fontSize: 15, marginLeft: 637 }}>Search:</InputLabel>
                        <input style={{ width: 150, marginLeft: 5 }} />
                    </div>

                 
 <Root sx={{marginLeft:2, marginRight:2, paddingTop:3 }}>
<table aria-label="custom pagination table">
                        <tbody>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>

                            {
                                items.map((product, t) =>
                                    <tr key={t}>
                                        <td>{t + 1}</td>
                                        <td>{product.sliderTitle}</td>
                                        <td>{product.description}</td>
                                        <td><img alt='images' src={`http://localhost:3001/uploads/${product.image}`} height={50} width={90} /></td>
                                        <td>{product.status}</td>
                                         <td>
                  <Link to={`/slider/${product._id}`}>
                    <EditIcon style={{marginLeft:10}} />
                  </Link>

                  <DeleteIcon onClick={() => deleteHandle(`${product._id}`)} style={{marginLeft:20}} />
                  
                </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    </Root>
                </div>
            </Box>
            
            <div style={{ marginLeft: 250, backgroundColor: '#ecf0f5' }}>
                <Stack spacing={2}>
                    <Pagination count={10} page={page} onChange={pageChange} />
                </Stack>
            </div>
        </div>
    )
}

export default SliderView;