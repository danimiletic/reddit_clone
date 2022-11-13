import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Register = ({ handleRegister }) => {

  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '', fname: '', lname: '', image: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
      if (user.password === user.passwordConfirmation) {
      handleRegister(user)
      setUser({email: '', password: '', passwordConfirmation: '', fname: '', lname: '', image: ''})
    } else {
      alert('Passwords do not match')
    }
  }

  return (
    <>
      <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
            <input
              type="text"
              name="fname"
              value={user.fname}
              onChange={(e) => setUser({...user, fname: e.target.value})}
              required
            />
          <label>Last Name</label>
            <input
              type="text"
              name="lname"
              value={user.lname}
              onChange={(e) => setUser({...user, lname: e.target.value})}
              required
            />
          <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
              required
              autoFocus
            />
          <label>Image</label>
            <input
              type="text"
              name="image"
              value={user.image}
              onChange={(e) => setUser({ ...user, image: e.target.value })}
            />
          <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
              required
            />
          <label>Password Confirmation</label>
            <input
              type="passwordConfirmation"
              name="passwordConfirmation"
              value={user.passwordConfirmation}
              onChange={(e) => setUser({...user, passwordConfirmation: e.target.value})}
              required
            />
          <button type='submit'>Register</button>
        </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedRegister;