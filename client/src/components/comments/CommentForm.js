import { useState, useEffect } from 'react';

const CommentForm = ({id, postId, setAdd, addComment}) => {

  const [comment, setComment] = useState({user_handle: '', user_comment: ''})

  useEffect(() => {
    if(id) {
      setComment({user_handle, user_comment})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(postId, id, comment)
      setEdit(false)
    }
    else {
      addComment(postId, comment)
      setAdd(false)
    }
    setComment({user_handle: '', user_comment: ''})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='user_handle'
          value={user_handle}
          placeholder="user name"
          onChange={(e) => setComment({...comment, user_handle: e.target.value})}
        />
        <input 
          type='text'
          name='user_comment'
          value={user_comment}
          placeholder='write comment'
          onChange={(e) => setComment({...comment, user_comment: e.target.value})}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default CommentForm;