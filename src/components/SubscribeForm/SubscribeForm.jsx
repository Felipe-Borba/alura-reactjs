import React, { useState } from 'react';
import Address from './Address';
import PersonalData from './PersonalData';
import UserData from './UserData';


function SubscribeForm({ submitForm }) {
    const [currentStep, setCurrentStep] = useState(0);
    const pages = [<UserData nextStep={nextStep} />, <PersonalData nextStep={nextStep} />, <Address submitForm={submitForm} />];

    function nextStep() {
        setCurrentStep(currentStep + 1);
    }

    return (
        <>
            {pages[currentStep]}
        </>
    );
}

export default SubscribeForm;
