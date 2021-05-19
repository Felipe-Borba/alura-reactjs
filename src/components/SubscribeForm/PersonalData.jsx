import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useState } from 'react';


function PersonalData({ nextStep }) {
    const [firstName, setFirstName] = useState();
    const [secondName, setSecondName] = useState();
    const [cpf, setCpf] = useState();
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(true);
    const [error, setError] = useState({ cpf: { status: true, text: '' } });

    const checkCpf = (cpf) => {
        if (cpf.length !== 11) {
            setError({ cpf: { status: false, text: 'CPF must have 11 digits.' } });
        } else {
            setError({ cpf: { status: true, text: '' } });
        }
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();
            nextStep();
        }}>
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
                name={cpf}
                onChange={event => setCpf(event.target.value)}
                error={!error.cpf.status}
                helperText={error.cpf.text}
                onBlur={event => checkCpf(event.target.value)}
            />

            <FormControlLabel label='Promotions' control={
                <Switch
                    name='Promotions'
                    color='primary'
                    onChange={event => setPromotions(event.target.checked)}
                    checked={promotions}
                />
            } />

            <FormControlLabel label='News' control={
                <Switch
                    name='News'
                    color='primary'
                    onChange={event => setNews(event.target.checked)}
                    checked={news}
                />
            } />

            <Button type='submit' variant="contained" color="primary" >
                Submit
            </Button>

        </form>
    );
}

export default PersonalData;
