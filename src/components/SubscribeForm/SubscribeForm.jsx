import React, { useState } from 'react';
import Address from './Address';
import PersonalData from './PersonalData';
import UserData from './UserData';


function SubscribeForm({ submitForm }) {


    return (
        <>
            <PersonalData submitForm={submitForm} />
            <UserData />
            <Address />
        </>
    );
}

export default SubscribeForm;
