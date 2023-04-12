import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
 
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">home</Nav.Link>
            <Nav.Link href="#pricing">lessson</Nav.Link>
            <NavDropdown title="news" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">level 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               level 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">level3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More  </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             About us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;