import { useState } from 'react';

export default function useError(validation) {
    const [error, setError] = useState(createInitialSate(validation));

    function UpdateError(event) {
        const { id, value } = event.target;
        let newSate = { ...error };
        newSate[id] = validation[id](value);
        setError(newSate);
    }

    function verifyAnyError() {
        for (let field in error) {
            if (!error[field].status) {
                return false;
            }
        }
        return true;
    }

    return [error, UpdateError, verifyAnyError];
}

function createInitialSate(validation) {
    const initialState = {};
    for (let field in validation) {
        initialState[field] = { status: true, text: '' };
    }
    return initialState;
}
