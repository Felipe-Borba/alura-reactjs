import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useState } from 'react';


function SubscribeForm() {
    const [firstName, setFirstName] = useState();
    const [secondName, setSecondName] = useState();

    return (
        <form onSubmit={event => {console.log(firstName,secondName)}}>
            <TextField
                id='firstName'
                label='First name'
                variant='outlined'
                fullWidth
                margin='normal'
                name={firstName}
                onChange={event => setFirstName(event.target.value)}
            />

            <TextField
                id='secondName'
                label='Second name'
                variant='outlined'
                fullWidth
                margin='normal'
                name={secondName}
                onChange={event => setSecondName(event.target.value)}           
            />

            <TextField
                id='cpf'
                label='CPF'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <FormControlLabel label='Promotions' control={
                <Switch name='Promotions' defaultChecked color='primary' />
            } />

            <FormControlLabel label='News' control={
                <Switch name='News' defaultChecked color='primary' />
            } />

            <Button type='submit' variant="contained" color="primary">
                Submit
            </Button>

        </form>
    );
}

export default SubscribeForm;
