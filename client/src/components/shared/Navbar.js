import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links will display when user is logged in 
    if (user) {
      return (
        <>
          <ul>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/profile'>
                Profile
              </Link>
            </li>
            <li onClick={ () => handleLogout() }>
              <Link to="/">
                Logout
              </Link>
            </li>
          </ul>
        </>
      )
    } else {
      // links will display when user is logged out
      return (
        <>
          <ul>
            <li>
              <Link to='/login'>
                Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                Register
              </Link>
            </li>
          </ul>
        </>
      )
    }
  }
  return (
    <>
      <nav>
        <ul>
          {/* these links show up with or without user being logged in */}
          <Link to="/">
            <li>
              Reddit
            </li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}


const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedNavbar;