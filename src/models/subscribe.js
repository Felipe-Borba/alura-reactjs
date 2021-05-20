export function checkCpf(cpf) {
    if (cpf.length !== 11) {
        return { status: false, text: 'CPF must have 11 digits.' };
    } else {
        return { status: true, text: '' };
    }
}

export function checkPassword(password) {
    if (password.length < 4 || password.length > 72) {
        return { status: false, text: 'Password must have at least 4 digits and less then 72' };
    } else {
        return { status: true, text: '' };
    }
}
