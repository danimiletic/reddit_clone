import { CommentConsumer } from '../../providers/CommentProvider';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'
import CommentForm from './CommentForm';

const CommentShow = (updateComment, deleteComment) => {
  const params = useParams()
  const [comment, setComment] = useState({user_handle: '', user_comment:''})
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    axios.get(`/api/posts/${params.postId}/comments/${params.commentId}`)
    .then( res => setComment(res.data))
    .catch( err => console.log(err))
  }, [])

  const { user_handle, user_comment } = comment
  return (
    <>
      { editing ?
        <>
          <CommentForm 
          {...comment}
          updateComment={updateComment}
          postId={params.postId}/>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <h3>{user_handle}</h3>
          <h3>{user_comment}</h3>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteComment(params.postId, params.commentId)}>Delete</button>
        </>
      }
    </>
  )
}

const ConnectedCommentShow = (props) => (
  <CommentConsumer>
    { value => <CommentShow {...props} {...value}/>}
  </CommentConsumer>
)

export default ConnectedCommentShow;

