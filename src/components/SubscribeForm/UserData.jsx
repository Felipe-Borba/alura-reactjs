import { Button, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import RegisterContext from '../../context/RegisterContext';

function UserData({ nextStep }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ password: { status: true, text: '' } });
    const validation = useContext(RegisterContext);

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
