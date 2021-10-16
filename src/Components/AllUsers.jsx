import React from 'react'
import { Table, TableRow, TableHead, TableCell, TableBody, TableContainer,Paper,makeStyles, IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getUsers,deleteUser } from '../Services/api';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  table:{
    width: "80%",
    margin: "80px 00 00 100px",
    
  },
  thead:{
    '& > *':{
    background: "rgb(247, 153, 30)",
    color: "rgb(58, 36, 7)",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily:"apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    }
 },
   row:{
    '& > *':{
      background:"rgb(222, 222, 228)",
      fontSize: "15px",
      color: "rgb(63, 56, 100)",
      fontWeight: "bold",
      letterSpacing:"5",
      
    }
   }
})
const AllUsers = () => {

  const [users, setusers] = useState([ ]);
  const classes = useStyles();

  useEffect(() => {
    getAllUsers();
  }, [])

    const  getAllUsers = async () => {
     const response= await getUsers();
        console.log(response.data);
        setusers(response.data);
    }

    const deleteUserData = async (id) => {
      await deleteUser(id);
      getAllUsers();
    }

    return(
      <div className={classes.table}>
      <TableContainer component={Paper}>
      <Paper elevation={3}>
      <Table >
        <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Edit   Delete </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {
          users.map(user => (
              <TableRow className={classes.row}>
                  <TableCell> {user.id}</TableCell>
                  <TableCell> {user.name}</TableCell>
                  <TableCell> {user.username}</TableCell>
                  <TableCell> {user.email}</TableCell>
                  <TableCell> {user.phone }</TableCell>
                  <TableCell>
                   <IconButton> <Link to={`/edit/${user.id}`}><EditIcon color="primary" /></Link></IconButton>
                  {/* <IconButton component={Link} to={`/edit/${user.id}`}> <EditIcon variant="contained" color="primary"/></IconButton> */}
                    <IconButton onClick={() => deleteUserData(user.id)}><DeleteIcon color="secondary" /></IconButton>
                  </TableCell>
                 
                </TableRow>
              ))
            }
          </TableBody>
      </Table>
      </Paper>
      </TableContainer>
      </div>
    )
    }   

export default AllUsers
