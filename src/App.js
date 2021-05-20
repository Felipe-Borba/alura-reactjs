import { Container, Typography } from '@material-ui/core';
import './App.css';
import SubscribeForm from './components/SubscribeForm/SubscribeForm.jsx';
import 'fontsource-roboto';
import { checkCpf, checkPassword } from "./models/subscribe";
import RegisterContext from './context/RegisterContext';

function App() {
  return (
    <Container component='article' maxWidth='sm'>

      <Typography variant='h2' align='center'>Registration</Typography>

      <RegisterContext.Provider value={{ cpf: checkCpf, password: checkPassword }}>
        <SubscribeForm submitForm={dispatchForm} />
      </RegisterContext.Provider>
    </Container>
  );
}

function dispatchForm(data) {
  console.log(data);
}

export default App;
