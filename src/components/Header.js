import { Navbar, Container, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <Navbar dark sticky="top" expand="md">
            <Container>
                <NavbarBrand href='/'>
                    Race Finder
                </NavbarBrand>
            </Container>
        </Navbar>
    )
}

export default Header;