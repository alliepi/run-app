import { Navbar, Container, NavbarBrand } from 'reactstrap';
import './App.css';

const App = () => {

  return (

    <div className="App">
      <Navbar dark sticky="top" expand="md">
        <Container>
          <NavbarBrand href='/'>
            Race Finder
          </NavbarBrand>
        </Container>
      </Navbar>
      Find your next race here!
    </div>
  );
}


export default App;
