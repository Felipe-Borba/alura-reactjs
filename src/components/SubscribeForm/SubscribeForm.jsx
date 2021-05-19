import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Address from './Address';
import PersonalData from './PersonalData';
import UserData from './UserData';


function SubscribeForm({ submitForm }) {
    const [currentStep, setCurrentStep] = useState(0);

    function nextStep(){
        setCurrentStep(currentStep+1);
    }

    function currentForm(currentStep) {
        switch (currentStep) {
            case 0:
                return <UserData nextStep={nextStep} />;
    
            case 1:
                return <PersonalData nextStep={nextStep} />;
    
            case 2:
                return <Address submitForm={submitForm}/>;
    
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
