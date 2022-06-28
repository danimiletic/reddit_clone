import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import FetchUser from './components/auth/FetchUser';
import Navbar from './components/shared/Navbar';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/shared/Profile';
import Subreadits from './components/subreadits/Subreadits';


const App = () => (
  <>
    <Navbar />
      <FetchUser>
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<ProtectedRoute /> }>
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='/subreadits' element={<Subreadits />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<Nomatch />} />
          </Routes>
        </>
      </FetchUser>
  </>
)

export default App;
