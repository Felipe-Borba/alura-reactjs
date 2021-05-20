import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Address from './Address';
import PersonalData from './PersonalData';
import UserData from './UserData';


function SubscribeForm({ submitForm, validation }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const pages = [
        <UserData nextStep={collectData} />,
        <PersonalData nextStep={collectData} />,
        <Address nextStep={collectData} />,
        <Typography variant='h5'>thanks for subscribing</Typography>
    ];

    useEffect(() => {
        if (currentStep === pages.length - 1) {
            submitForm(formData);
        }
    });

    function collectData(data) {
        setFormData({ ...formData, ...data });
        nextStep();
    }

    function nextStep() {
        setCurrentStep(currentStep + 1);
    }

    return (
        <>
            <Stepper activeStep={currentStep}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Personal info</StepLabel></Step>
                <Step><StepLabel>Address</StepLabel></Step>
                <Step><StepLabel>Final</StepLabel></Step>
            </Stepper>
            {pages[currentStep]}
        </>
    );
}

export default SubscribeForm;
