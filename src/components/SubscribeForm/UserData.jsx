import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

function UserData({ nextStep }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={event => {
            event.preventDefault();
            nextStep({ email, password });
        }}>
            <TextField
                id='email'
                label='email'
                type='email'
                variant='outlined'
                margin='normal'
                fullWidth
                //require //TODO uncomment 
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <TextField
                id='password'
                label='password'
                type='password'
                variant='outlined'
                margin='normal'
                fullWidth
                //require //TODO uncomment
                value={password}
                onChange={event => setPassword(event.target.value)}
            />

            <Button type='submit' variant="contained" color="primary" >
                Submit
            </Button>

        </form>
    )
}

export default UserData
