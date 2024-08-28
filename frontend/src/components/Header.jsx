import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Jorge Castro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-links-header">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-links-header">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/skill" className="nav-links-header">
                Skills
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" className="nav-links-header">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/education" className="nav-links-header">
                Education
              </Nav.Link>
              <Nav.Link as={Link} to="/experience" className="nav-links-header">
                Experience
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-links-header">
                Contact Me
              </Nav.Link>
              <Nav.Link
                href="/jorge_resume1.pdf"
                className="nav-links-header"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
