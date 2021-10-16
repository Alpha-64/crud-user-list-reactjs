import React from 'react'
import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography } from '@material-ui/core';
import { useState } from 'react'
import { addUser } from '../Services/api';
import { useHistory } from 'react-router';

const useStyle = makeStyles({
    container:{
        width:"50%",
        margin:'5% 0 0 20%',
        '& > *':{
            marginTop:20,
        }
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      }

});

const initialValues = {
    name: '',
    username: '',
    email:'',
    phone: ''
}

const AddUser = () => {
    const [user, setuser] = useState(initialValues);
    const { name, username, email, phone }  = user;
    const history = useHistory()

    const onValueChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        
    }
    const addUserDetails = async() =>{
         await addUser(user)
         history.push('./all')
    }

    const classes = useStyle();
    return (
        <>
         <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl variant="outlined">
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel>User Name</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name='username' value={username}  />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel>Email</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel>Phone</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name='phone' value={phone} />
            </FormControl>
                <Button className={classes.root}  onClick={() => addUserDetails() }>Add User</Button>
         </FormGroup>

        </>
    )
}

export default AddUser
