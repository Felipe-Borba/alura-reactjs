import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Address from './Address';
import PersonalData from './PersonalData';
import UserData from './UserData';


function SubscribeForm({ submitForm }) {
    const [currentStep, setCurrentStep] = useState(0);

    function currentForm(currentStep) {
        switch (currentStep) {
            case 0:
                return <UserData />;
    
            case 1:
                return <PersonalData submitForm={submitForm} />;
    
            case 2:
                return <Address />;
    
            default:
                return <Typography>Select form error</Typography>;
        }
    }

    return (
        <>
            {currentForm(currentStep)}
        </>
    );
}

export default SubscribeForm;
