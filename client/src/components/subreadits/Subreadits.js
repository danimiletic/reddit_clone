import { useEffect, useState } from 'react';
import { SubreaditConsumer } from '../../providers/SubreaditProvider';
import SubreaditList from './SubreaditList';
import SubreaditForm from './SubreaditForm';

const Subreadits = ({ subreadits, getAllSubreadits, addSubreadit }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllSubreadits()
  }, [])

  return (
    <>
      <h2>All Subreadits</h2>
      { adding ? 
        <>
          <SubreaditForm addSubreadit={addSubreadit}/>
          <button onClick={() => setAdding(false)}>cancel</button>
        </>
        :
        <button onClick={() => setAdding(true)}>Create Subreadit</button>
      }
      <SubreaditList subreadits={subreadits} />
    </>
  )
}

const ConnectedSubreadits = (props) => (
  <SubreaditConsumer>
    { value => <Subreadits {...props} {...value} />}
  </SubreaditConsumer>
)

export default ConnectedSubreadits;