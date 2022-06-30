import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Card } from 'react-bootstrap';
import Moment from 'react-moment';

const Profile = ({ fname, lname, email, image, created_at }) => {

  return (
    // <>
    //     <img src={image}/>
    //     <h2>Email: {email}</h2>
    //     <h2>first name: {fname}</h2>
    //     <h2>last name: {lname}</h2>
    // </>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{fname} {lname}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
        <Moment format="MM/DD/YY">
          {created_at}
        </Moment>
      </Card.Body>
    </Card>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value.user} />}
  </AuthConsumer>
)

export default ConnectedProfile;