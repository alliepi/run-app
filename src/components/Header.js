import { Navbar, Nav, NavbarBrand, Collapse, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import RaceDiscoverLogo from '../app/assets/img/RaceDiscoverLogo.png'
const Header = () => {
    return (
        <div>
            <Navbar
                expand="md"
                light
                sticky
                container="fluid"
            >
                <NavbarBrand href="/">
                    <img src={RaceDiscoverLogo} alt='Race Discover Logo' />
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/components/">
                                Components
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://runsignup.com">
                                RunSignup
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;

