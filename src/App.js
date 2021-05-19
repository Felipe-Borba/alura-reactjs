import { Container, Typography } from '@material-ui/core';
import './App.css';
import SubscribeForm from './components/SubscribeForm/SubscribeForm.jsx';
import 'fontsource-roboto';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h2' align='center'>Registration</Typography>
      <SubscribeForm submitForm={dispatchForm} checkCpf={checkCpf}/>
    </Container>
  );
}

function dispatchForm(data) {
  console.log(data);
}

function checkCpf(cpf) {
  if (cpf.length !== 11) {
    return { status: false, text: 'CPF must have 11 digits.' }
  } else {
    return { status: true, text: '' }
  }
}

export default App;
