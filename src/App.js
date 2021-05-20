import { Container, Typography } from '@material-ui/core';
import './App.css';
import SubscribeForm from './components/SubscribeForm/SubscribeForm.jsx';
import 'fontsource-roboto';
import { checkCpf, checkPassword } from "./models/subscribe";

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h2' align='center'>Registration</Typography>
      <SubscribeForm submitForm={dispatchForm} validation={{ cpf: checkCpf, password: checkPassword }} />
    </Container>
  );
}

function dispatchForm(data) {
  console.log(data);
}

export default App;
