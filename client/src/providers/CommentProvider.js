import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CommentContext = React.createContext();
export const CommentConsumer = CommentContext.Consumer;

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([])

  const navigate = useNavigate()

  const getAllComments = (postId) => {
    axios.get(`/api/posts/${postId}/comments`)
      .then( res => setComments(res.data))
      .catch( err => console.log(err))
  }

  const addComment = (postId, comment) => {
    axios.post(`/api/posts/${postId}/comments`, { comment } )
      .then( res => setComments([...comments, res.data]))
      .catch ( err => console.log(err))
  }

  const updateComment = (postId, id, comment) => {
    axios.put(`/api/posts/${postId}/comments/${id}`, { comment })
      .then( res => {
        const newUpdatedComments = comments.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setComments(newUpdatedComments)
        navigate(`/posts/${postId}`)
      })
      .catch( err => console.log(err))
  }

  const deleteComment = ( postId, id ) => {
    axios.delete(`/api/posts'${postId}/comments/${id}`)
      .then( res => {
        setComments( comments.filter( c => c.id !== id))
        alert(res.data.message)
        navigate(`/posts`)
      })
      .catch( err => console.log(err))
  }

  return (
    <CommentContext.Provider value={{
      comments,
      getAllComments: getAllComments,
      updateComment: updateComment,
      addComment: addComment,
      deleteComment: deleteComment,
    }}>
      { children }
    </CommentContext.Provider>
  )
}

export default CommentProvider;