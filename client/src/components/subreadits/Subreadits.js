import { useEffect } from 'react';
import { SubreaditConsumer } from '../../providers/SubreaditProvider';
import SubreaditList from './SubreaditList';

const Subreadits = ({ subreadits, getAllSubreadits }) => {

  useEffect( () => {
    getAllSubreadits()
  }, [])

  return (
    <>
      <h2>All Subreadits</h2>
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