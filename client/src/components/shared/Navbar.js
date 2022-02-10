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
}