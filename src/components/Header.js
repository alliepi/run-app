import { Navbar, Container, NavbarBrand } from 'reactstrap';
import RaceDiscoverLogo from '../app/assets/img/RaceDiscoverLogo.png'
const Header = () => {
    return (
        <Navbar dark sticky="top" expand="md">
            <Container>
                <NavbarBrand href='/'>
                    <img src={RaceDiscoverLogo} alt='Race Discover Logo' />
                </NavbarBrand>
            </Container>
        </Navbar>
    )
}

export default Header;