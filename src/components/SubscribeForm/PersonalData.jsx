import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import RegisterContext from '../../context/RegisterContext';
import useError from '../../hooks/useError';


function PersonalData({ nextStep }) {
    const [firstName, setFirstName] = useState();
    const [secondName, setSecondName] = useState();
    const [cpf, setCpf] = useState();
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(true);
    const validation = useContext(RegisterContext);
    const [error, UpdateError, verifyAnyError] = useError(validation);

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (verifyAnyError()) {
                nextStep({ firstName, secondName, cpf, promotions, news, error });
            }
        }}>
            <TextField
                id='firstName'
                label='First name'
                variant='outlined'
                fullWidth
                required
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
                required
                name={cpf}  //TODO Why I need this?
                onChange={event => setCpf(event.target.value)}
                error={!error.cpf.status}
                helperText={error.cpf.text}
                onBlur={UpdateError}
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
                Next
            </Button>

        </form>
    );
}

export default PersonalData;
