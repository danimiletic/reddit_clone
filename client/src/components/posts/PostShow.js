import { PostConsumer } from '../../providers/PostProvider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostForm from './PostForm';

const PostShow = ({ updatePost, deletePost }) => {
  const params = useParams()
  const [post, setPost] = useState({ post_title: '', post_content: '', user_name: '', image: '', url: ''})
  const [editing, setEdit] = useState(false)

  useEffect(() => {
    axios.get(`/api/subreadits/${params.subreaditId}/posts/${params.postId}`)
    .then( res => setPost(res.data))
    .catch( err => console.log(err))
  },[])

  const { post_title, post_content, user_name, image, url } = post
  return (
    <>
      { editing ? 
        <>
          <PostForm 
          {...post} 
          updatePost={updatePost}
          subreaditId={params.subreaditId}/>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>    
      :
        <>
          <h2>{user_name}</h2>
          <h3>{post_title}</h3>
          <h3>{post_content}</h3>
          <image src={image}/>
          <h4>{url}</h4>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deletePost(params.subreaditId, params.postId)}>Delete</button>
        </>
      }
    </>
  )
}

const ConnectedPostShow = (props) => (
  <PostConsumer>
    { value => <PostShow {...props} {...value} />}
  </PostConsumer>
)

export default ConnectedPostShow;

// import { PostConsumer } from '../../providers/PostProvider';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import PostForm from './PostForm';
// import Posts from './Posts';

// const PostShow = ({ updatePost, deletePost, id }) => {
//   const params = useParams()
//   const [post, setPost] = useState({ postTitle: '', postContent: '', userName: '', image: '', url: ''})
//   const [editing, setEdit] = useState(false)

//   useEffect(() => {
//     axios.get(`/api/subreadits/${params.subreaditId}/posts/${params.postId}`)
//     .then( res => setPost(res.data))
//     .catch( err => console.log(err))
//   },[])

//   const { postTitle, postContent, userName, image, url } = post
//   return (
//     <>
//       { editing ? 
//         <>
//           <PostForm {...post} updatePost={updatePost}/>
//           <button onClick={() => setEdit(false)}>Cancel</button>
//         </>    
//       :
//       <>
//         <h2>{userName}</h2>
//         <h3>{postTitle}</h3>
//         <h3>{postContent}</h3>
//         <image src={image}/>
//         <h4>{url}</h4>
//         <button onClick={() => setEdit(true)}>Edit</button>
//         <button onClick={() => deletePost(id)}>Delete</button>
//       </>
//       }
//       <Posts subreaditId={id}/>
//     </>
//   )
// }

// const ConnectedPostShow = (props) => (
//   <PostConsumer>
//     { value => <PostShow {...props} {...value} />}
//   </PostConsumer>
// )

// export default ConnectedPostShow;