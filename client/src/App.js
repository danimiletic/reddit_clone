import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import FetchUser from './components/auth/FetchUser';
import Navbar from './components/shared/Navbar';
import Home from './components/shared/Home';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => {
  <>
    <Navbar />
      <FetchUser>
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<ProtectedRoute /> }>
              <Route path='/profile' element={<Home />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<Nomatch />} />
          </Routes>
        </>
      </FetchUser>
  </>
}

export default App;
