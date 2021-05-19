import React, { useState } from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';


function SubscribeForm({ submitForm }) {


    return (
        <>
            <PersonalData submitForm={submitForm} />
            <UserData />
        </>
    );
}

export default SubscribeForm;
