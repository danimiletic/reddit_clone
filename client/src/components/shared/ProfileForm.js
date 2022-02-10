import { useState, useEffect } from 'react';

const ProfileForm = ({ updateUser, setEdit, fname, lname, email, addUser, id}) => {
  const [user, setUser] = useState({ fname: '', lname: '', email: '' })

  useEffect( () => {
    if (id) {
      setUser({ fname, lname, email })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    }
    setUser({ fname: '', lname: '', email: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input 
          name='First Name'
          value={user.fname}
          onChange={(e) => setUser({...user, fname: e.target.value})}
        />
        <br />
        <label>Last Name:</label>
        <input 
          name='Last Name'
          value={user.lname}
          onChange={(e) => setUser({...user, lname: e.target.value})}
        />
        <br />
        <label>Email:</label>
        <input 
          name='Email'
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
        />
      </form>
    </>
  )
}

export default ProfileForm;