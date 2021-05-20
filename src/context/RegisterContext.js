import React from 'react';
import { checkCpf, checkPassword } from '../models/subscribe';

const RegisterContext = React.createContext({ cpf: checkCpf, password: checkPassword });

export default RegisterContext;