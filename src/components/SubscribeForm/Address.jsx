import { Button, TextField } from '@material-ui/core'
import React from 'react'

function Address({submitForm}) {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            submitForm({debug:'test'});
        }}>
            <TextField
                id='cep'
                label='cep'
                type='number'
                variant='outlined'
                margin='normal'
            />

            <TextField
                id='address'
                label='address'
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <TextField
                id='number'
                label='number'
                type='number'
                variant='outlined'
                margin='normal'
            />

            <TextField
                id='state'
                label='state'
                type='text'
                variant='outlined'
                margin='normal'
            />

            <TextField
                id='city'
                label='city'
                type='text'
                variant='outlined'
                margin='normal'
            />

            <Button type='submit' variant="contained" color="primary" fullWidth >
                Finalize / Submit
            </Button>
        </form>
    )
}

export default Address
