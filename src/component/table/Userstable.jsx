import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
export default function BasicTable() {

  const userdata=useSelector(state=>state.user.users)
  return (
    <TableContainer sx={{marginTop:2}} component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>sr no</TableCell> */}
            <TableCell align="right">USERID</TableCell>
            <TableCell align="right">USERNAME</TableCell>
            <TableCell align="right">EMAIL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userdata.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row._id}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}