import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SubreaditForm from './SubreaditForm';
import { SubreaditConsumer } from '../../providers/SubreaditProvider';
import Posts from '../posts/Posts';

const SubreaditShow = ({ updateSubreadit, deleteSubreadit }) => {
  const params = useParams();
  const [subreadit, setSubreadit] = useState({ title: '', description: '', owner: '' })
  const [editing, setEdit] = useState(false);

  useEffect( () => {
    axios.get(`/api/subreadits/${params.subreaditId}`)
      .then( res => setSubreadit(res.data))
      .catch( err => console.log(err))
  }, [])

  const { title, description, owner, id } = subreadit
  return (
    <>
    { editing ? 
      <>
        <SubreaditForm
          {...subreadit}
          updateSubreadit={updateSubreadit}
        />
        <button onClick={() => setEdit(false)}> Cancel</button>
      </>
      :
      <>
      <h3>r/{title}</h3>
      <h5>{description}</h5>
      <h5>Creator: {owner}</h5>
      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={() => deleteSubreadit(id)}> Delete</button>
      </>
      }
      <Posts subreaditId={id} />
    </>
  )
}

const ConnectedSubreaditShow = (props) => (
  <SubreaditConsumer>
    { value => <SubreaditShow {...props} {...value}/>}
  </SubreaditConsumer>
)

export default ConnectedSubreaditShow;