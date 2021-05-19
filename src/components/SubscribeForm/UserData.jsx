import { Button, TextField } from '@material-ui/core'
import React from 'react'

function UserData() {

    return (
        <div>
            <TextField
                id='email'
                label='email'
                type='email'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                id='password'
                label='password'
                type='password'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <Button id='submit' variant="contained" color="primary" >
                Submit
            </Button>

        </div>
    )
}

export default UserData
