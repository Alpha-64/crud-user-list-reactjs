import {React, useEffect, useState } from 'react'
import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography } from '@material-ui/core';
import  { editUser,  getUsers }  from '../Services/api'
import { useHistory, useParams } from 'react-router';

const useStyle = makeStyles({
    container:{
        width:"50%",
        margin:'5% 0 0 20%',
        '& > *':{
            marginTop:20
        }
    }
});

const initialValues = {
    name: '',
    username: '',
    email:'',
    phone: ''
}

const UserEdit = () => {
    const [user, setuser] = useState(initialValues);
    const { name, username, email, phone }  = user;
    const classes = useStyle();
    const { id } = useParams() 
    let history  = useHistory()

    useEffect(() => {
       loadUserData();
    }, [])

    const loadUserData = async () => {
      const response= await getUsers(id);
      setuser(response.data)
    }

    const onValueChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        
    }
    const editUserDetails = async() =>{
        const response = await editUser(id, user);
       history.push('/all')
    }

  
    return (
        <>
         <FormGroup   className={classes.container}>
            <Typography component="h2" variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel variant="outlined">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel variant="filled">User Name</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name='username' value={username}  />
            </FormControl>
            <FormControl>
                <InputLabel variant="outlined">Email</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <FormControl>
                <InputLabel variant="outlined">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => editUserDetails() } >Update User</Button>
         </FormGroup>

        </>
    )
}

export default UserEdit