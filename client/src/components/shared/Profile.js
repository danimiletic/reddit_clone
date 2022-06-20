import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import ProfileForm from './ProfileForm';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = ({ id, fname, lname, email, image, updateUser }) => {

  const [user, setUser] = useState ({ fname: '', lname: '', email: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/auth/edit`)
      .then( res => setUser(res.data))
      .catch( err => console.log(err))
  }, [])


  return (
    <>
      { editing ?
      <>
        <form
          email={email}
          updateUser={updateUser}
          setEdit={setEdit}
          id={id}
          />
        <button onClick={() => setEdit(false)}>Cancel</button>
        <br />
      </>
        :
      <>
        <img src={image}/>
        <h2>Email: {email}</h2>
        <h2>{fname}</h2>
        <h2>{lname}</h2>
      </>
      }
    </>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value.user} />}
  </AuthConsumer>
)

export default ConnectedProfile;