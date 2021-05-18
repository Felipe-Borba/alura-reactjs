import { Container, Typography } from '@material-ui/core';
import './App.css';
import SubscribeForm from './components/SubscribeForm/SubscribeForm.jsx';
import 'fontsource-roboto';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h2' align='center'>Registration</Typography>
      <SubscribeForm />
    </Container>
  );
}

export default App;
