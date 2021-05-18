import { Container } from '@material-ui/core';
import './App.css';
import SubscribeForm from './components/SubscribeForm/SubscribeForm.jsx';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <SubscribeForm />
    </Container>
  );
}

export default App;
