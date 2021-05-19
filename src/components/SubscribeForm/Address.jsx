import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

function Address({ nextStep }) {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    return (
        <form onSubmit={event => {
            event.preventDefault();
            nextStep({ cep, address, number, state, city });
        }}>
            <TextField
                id='cep'
                label='cep'
                type='number'
                variant='outlined'
                margin='normal'
                value={cep}
                onChange={event => setCep(event.target.value)}
            />

            <TextField
                id='address'
                label='address'
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth
                value={address}
                onChange={event => setAddress(event.target.value)}
            />

            <TextField
                id='number'
                label='number'
                type='number'
                variant='outlined'
                margin='normal'
                value={number}
                onChange={event => setNumber(event.target.value)}
            />

            <TextField
                id='state'
                label='state'
                type='text'
                variant='outlined'
                margin='normal'
                value={state}
                onChange={event => setState(event.target.value)}
            />

            <TextField
                id='city'
                label='city'
                type='text'
                variant='outlined'
                margin='normal'
                value={city}
                onChange={event => setCity(event.target.value)}
            />

            <Button type='submit' variant="contained" color="primary" fullWidth >
                Finalize / Submit
            </Button>
        </form>
    )
}

export default Address
