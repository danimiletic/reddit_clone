import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links will display when user is logged in 
    if (user) {
      return (
        <>
            <Nav.Link>
              <Link to='/'>
                Posts
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/profile'>
                Profile
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => handleLogout()}>
              <Link to="/">
                Logout
              </Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link to="/subreadits">
                Readit
              </Link>
            </Nav.Link> */}
        </>
      )
    } else {
      // links will display when user is logged out
      return (
        <>
          <Nav.Link>
            <Link to='/login'>
              Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/register'>
              Register
            </Link>
          </Nav.Link>
        </>
      )
    }
  }
  return (
    <>
          {/* these links show up with or without user being logged in */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/subreadits">
              Readit
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            { rightNavItems() }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}


const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedNavbar;