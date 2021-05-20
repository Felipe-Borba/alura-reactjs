import { Button, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import RegisterContext from '../../context/RegisterContext';
import useError from '../../hooks/useError';

function UserData({ nextStep }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validation = useContext(RegisterContext);
    const [error, UpdateError, verifyAnyError] =useError(validation);

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (verifyAnyError()) {
                nextStep({ email, password });
            }
        }}>
            <TextField
                id='email'
                label='email'
                type='email'
                variant='outlined'
                margin='normal'
                fullWidth
                required
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
                required
                value={password}
                onChange={event => setPassword(event.target.value)}
                onBlur={UpdateError}
                error={!error.password.status}
                helperText={error.password.text}
            />

            <Button type='submit' variant="contained" color="primary" >
                Next
            </Button>

        </form>
    )
}

export default UserData
