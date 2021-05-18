import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React from 'react';


function SubscribeForm() {
    return (
        <form>
            <TextField id='firstName' label='First name' variant='outlined' fullWidth margin='normal' />

            <TextField id='secondName' label='Second name' variant='outlined' fullWidth margin='normal' />

            <TextField id='cpf' label='CPF' variant='outlined' fullWidth margin='normal' />

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
