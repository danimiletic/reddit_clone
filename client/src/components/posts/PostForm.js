import { useState, useEffect } from 'react';

const PostForm = ({ id, addPost, setAdd, updatePost, setEdit, subreaditId, post_title, user_name, image, post_content, url }) => {
  const [post, setPost] = useState({ post_title: '', user_name: '', image: '', post_content: '', url: '' })

  useEffect ( () => {
    if (id) {
      setPost({ post_title, user_name, post_content, image, url});
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePost(subreaditId, id, post)
      setEdit(false)
    } else {
      addPost(subreaditId, post)
      setAdd(false)
    }
    setPost({ post_title: '', user_name: '', post_content: '', image: '', url: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='user_name'
          name='user_name'
          value={post.user_name}
          placeholder='user name'
          onChange={(e) => setPost({ ...post, user_name: e.target.value })}
        />
        <input 
          type='post_title'
          name='post_title'
          value={post.post_title}
          placeholder='title'
          onChange={(e) => setPost({ ...post, post_title: e.target.value })}
          required
        />
        <input
          type='post_content'
          name='post_content'
          value={post.post_content}
          placeholder='content'
          onChange={(e) => setPost({ ...post, post_content: e.target.value })}
          required
        />
        <input
          type='img'
          name='image'
          value={post.image}
          placeholder='add image'
          onChange={(e) => setPost({ ...post, image: e.target.value })}
        />
        <input
          type='url'
          name='url'
          value={post.url}
          placeholder='add link'
          onChange={(e) => setPost({ ...post, url: e.target.value })}
        />
        <button type='submite'>Submit</button>
      </form>
    </>
  )
}

export default PostForm;

// import { useState, useEffect } from 'react';

// const PostForm = ({ id, addPost, setAdd, updatePost, setEdit, subreaditId, postTitle, userName, image, postContent, url }) => {
//   const [post, setPost] = useState({ postTitle: '', userName: '', image: '', postContent: '', url: '' })

//   useEffect ( () => {
//     if (id) {
//       setPost({ postTitle, userName, postContent, image, url});
//     }
//   }, [])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (id) {
//       updatePost(subreaditId, id, post)
//       setEdit(false)
//     } else {
//       addPost(subreaditId, post)
//       // setAdd(false)
//     }
//     setPost({ postTitle: '', userName: '', postContent: '', image: '', url: '' })
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type='text'
//           name='userName'
//           value={post.userName}
//           placeholder='user name'
//           onChange={(e) => setPost({ ...post, userName: e.target.value })}
//         />
//         <input 
//           type='text'
//           name='postTitle'
//           value={post.postTitle}
//           placeholder='title'
//           onChange={(e) => setPost({ ...post, postTitle: e.target.value })}
//           required
//         />
//         <input
//           type='text'
//           name='postContent'
//           value={post.postContent}
//           placeholder='content'
//           onChange={(e) => setPost({ ...post, postContent: e.target.value })}
//           required
//         />
//         <input
//           type='text'
//           name='image'
//           value={post.image}
//           placeholder='add image'
//           onChange={(e) => setPost({ ...post, image: e.target.value })}
//         />
//         <input
//           type='text'
//           name='url'
//           value={post.url}
//           placeholder='add link'
//           onChange={(e) => setPost({ ...post, url: e.target.value })}
//         />
//         <button type='submite'>Submit</button>
//       </form>
//     </>
//   )
// }

// export default PostForm;