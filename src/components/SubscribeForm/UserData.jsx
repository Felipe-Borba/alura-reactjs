import { Button, TextField } from '@material-ui/core'
import React from 'react'

function UserData({ nextStep }) {

    return (
        <form onSubmit={event => {
            event.preventDefault();
            nextStep();
        }}>
            <TextField
                id='email'
                label='email'
                type='email'
                variant='outlined'
                margin='normal'
                fullWidth
            //require //TODO uncomment 
            />

            <TextField
                id='password'
                label='password'
                type='password'
                variant='outlined'
                margin='normal'
                fullWidth
            //require //TODO uncomment
            />

            <Button type='submit' variant="contained" color="primary" >
                Submit
            </Button>

        </form>
    )
}

export default UserData
