import { Button, TextField } from '@material-ui/core';
import React from 'react';


function SubscribeForm() {
    return (
        <form>
            <TextField id='firstName' label='First name' variant='outlined' fullWidth/>

            <TextField id='secondName' label='Second name' variant='outlined' fullWidth/>

            <TextField id='cpf' label='CPF' variant='outlined' fullWidth/>

            <label>Promotions</label>
            <input type='checkbox' />

            <label>News</label>
            <input type='checkbox' />

            <Button type='submit' variant="contained" color="primary">
                Submit
            </Button>

        </form>
    );
}

export default SubscribeForm;
