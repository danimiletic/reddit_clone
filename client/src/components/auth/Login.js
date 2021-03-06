import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Login = ({ handleLogin }) => {

  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user)
    setUser({ email: '', password: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
        type='email'
        name='email'
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        required
        autoFocus
        />
        <input
        type='password'
        name='password'
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;