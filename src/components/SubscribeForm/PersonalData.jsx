import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import RegisterContext from '../../context/RegisterContext';


function PersonalData({ nextStep }) {
    const [firstName, setFirstName] = useState();
    const [secondName, setSecondName] = useState();
    const [cpf, setCpf] = useState();
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(true);
    const [error, setError] = useState({ cpf: { status: true, text: '' } });
    const validation = useContext(RegisterContext);

    function check(event) {
        const { id, value } = event.target;
        let newSate = { ...error };
        newSate[id] = validation[id](value);
        setError(newSate);
    }

    function verify() {
        for (let field in error) {
            if (!error[field].status) {
                return false;
            }
        }
        return true;
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (verify()) {
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
                onBlur={check}
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
