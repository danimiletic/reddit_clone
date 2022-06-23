import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Profile = ({ fname, lname, email, image }) => {

  return (
    <>
        <img src={image}/>
        <h2>Email: {email}</h2>
        <h2>first name: {fname}</h2>
        <h2>last name: {lname}</h2>
    </>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value.user} />}
  </AuthConsumer>
)

export default ConnectedProfile;