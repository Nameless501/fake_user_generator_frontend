import { Container, Navbar } from 'react-bootstrap';
import { SiTask } from 'react-icons/si';

function Header() {
    return (
        <Navbar expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="d-inline-block">
                    <SiTask /> Task 5
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
