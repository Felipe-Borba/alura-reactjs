import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

function UserData({ nextStep, validation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ password: { status: true, text: '' } });

    function check(event) {
        const { id, value } = event.target;
        let newSate = { ...error };
        newSate[id] = validation[id](value);
        setError(newSate);
    }

    function verify() {
        for (let field in error) {
            if (!error[field].status) {
                return false;
            }
        }
        return true;
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (verify()) {
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
                //required //TODO uncomment 
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
                onBlur={check}
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
