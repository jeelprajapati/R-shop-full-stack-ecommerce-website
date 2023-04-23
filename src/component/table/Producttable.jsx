import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import axios from 'axios';


export default function BasicTable({setType,setItem,setId}) {
   
   const productitem=useSelector(state=>state.products.products)

   const handleDelete=async(e)=>{
    const res=await axios.delete(`http://localhost:8000/product/${e}`,{
      headers:{'token':localStorage.getItem('token')}
    });
    console.log(res);  
   }
  return (
    <TableContainer sx={{marginTop:1}} component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">TITLE</TableCell>
            <TableCell align="right">IMG</TableCell>
            <TableCell align="right">CATEGORIES</TableCell>
            <TableCell align="right">SUBCAT</TableCell>
            <TableCell align="right">SIZE</TableCell>
            <TableCell align="right">COLOR</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">RATING</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productitem.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.img}</TableCell>
              <TableCell align="right">{row.categories}</TableCell>
              <TableCell align="right">{row.subcat}</TableCell>
              <TableCell align="right">
                <select>
                   {row.size.map((item)=>(<option value={`${item}`}>{item}</option>))}                
                </select>
              </TableCell>
              <TableCell align="right">
                <select>
                   {row.color.map((item)=>(<option value={`${item}`}>{item}</option>))}                
                </select></TableCell>
              <TableCell align="right">{row.price}</TableCell>  
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right"><button style={{margin:'4px',padding:'8px',backgroundColor:'red',color:'white',border:'none',cursor:'pointer'}} onClick={()=>handleDelete(row._id)}>DELETE</button><button onClick={()=>{setId(row);setType('update')}} style={{margin:'4px',padding:'8px',backgroundColor:'blue',color:'white',border:'none',cursor:'pointer'}}>UPDATE</button></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}