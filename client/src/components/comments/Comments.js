import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CommentConsumer } from '../../providers/CommentProvider';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comments = (getAllComments, addComment, comments) => {

  const [adding, setAdd] = useState(false);

  const params = useParams()

  useEffect( () => {
    getAllComments(params.postId)
  }, [])

  return (
    <>
      <h2>Comments</h2>
      { adding ? 
      <>
        <CommentForm 
          addComment={addComment}
          setAdd={setAdd}
          postId={params.postId}
        />
        <button onClick={( setAdd(false))}>Cancel</button>
      </>
      :
        <button onClick={() => setAdd(true)}>Comment</button>
      }
      <CommentList comments={comments} postId={params.postId}/>
    </>
  )
}

const ConnectedComments =(props) => (
  <CommentConsumer>
    { value => <Comments {...props} {...value}/>}
  </CommentConsumer>
)

export default ConnectedComments;