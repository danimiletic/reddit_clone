import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PostPage from './components/shared/PostPage';
import Nomatch from './components/shared/Nomatch';
import FetchUser from './components/auth/FetchUser';
import Navbar from './components/shared/Navbar';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/shared/Profile';
import Subreadits from './components/subreadits/Subreadits';
import SubreaditShow from './components/subreadits/SubreaditShow';


const App = () => (
  <>
    <Navbar />
      <FetchUser>
        <>
          <Routes>
            <Route path='/' element={<PostPage />} />
            <Route path='/' element={<ProtectedRoute /> }>
              <Route path='/profile' element={<Profile />} />
              <Route path='/subreadits' element={<Subreadits />} />
              <Route path='/subreadits/:subreaditId' element={<SubreaditShow />}/>
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<Nomatch />} />
          </Routes>
        </>
      </FetchUser>
  </>
)

export default App;
