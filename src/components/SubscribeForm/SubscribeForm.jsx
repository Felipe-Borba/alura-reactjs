import React, { useEffect, useState } from 'react';
import Address from './Address';
import PersonalData from './PersonalData';
import UserData from './UserData';


function SubscribeForm({ submitForm }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const pages = [
        <UserData nextStep={collectData} />,
        <PersonalData nextStep={collectData} />,
        <Address nextStep={collectData} />
    ];
    
    useEffect(() => {
        console.log(formData);
    });

    function collectData(data) {
        setFormData({...formData, ...data});
        nextStep();
    }

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
