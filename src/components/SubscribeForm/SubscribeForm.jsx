import { Button } from '@material-ui/core';
import React from 'react';


function SubscribeForm() {
    return (
        <form>
            <label>First name</label>
            <input type='text' />

            <label>Second name</label>
            <input type='text' />

            <label>CPF</label>
            <input type='text' />

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
