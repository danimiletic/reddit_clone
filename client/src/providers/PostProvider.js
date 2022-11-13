import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PostContext = React.createContext();
export const PostConsumer = PostContext.Consumer;

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  const navigate = useNavigate()

  const getAllPosts = (subreaditId) => {
    axios.get(`/api/subreadits/${subreaditId}/posts`)
      .then( res => setPosts(res.data))
      .catch( err => console.log(err))
  }

  const addPost = (subreaditId, post) => {
    axios.post(`/api/subreadits/${subreaditId}/posts`, { post } )
    .then( res => setPosts([...posts, res.data]))
    .catch( err => console.log(err))
  }

  const updatePost = (subreaditId, id, post) => {
    axios.put(`/api/subreadits/${subreaditId}/posts/${id}`, { post })
      .then( res => {
        const newUpdatedPosts = posts.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p 
        })
        setPosts(newUpdatedPosts)
        navigate(`/subreadits/${subreaditId}`)
      })
      .catch( err => console.log(err))
  }

  const deletePost = (subreaditId, id) => {
    axios.delete(`/api/subreadits/${subreaditId}/posts/${id}`)
      .then( res => {
        setPosts(posts.filter( p => p.id !== id))
        alert(res.data.message)
        navigate('/subreadits')
      })
      .catch( err => console.log(err))
  }

  return (
    <PostContext.Provider value={{
      posts, 
      getAllPosts: getAllPosts,
      addPost: addPost,
      updatePost: updatePost,
      deletePost: deletePost,
    }}>
      { children }
    </PostContext.Provider>
  )
}

export default PostProvider;