import { useEffect, useState } from 'react';
import { PostConsumer } from '../../providers/PostProvider';
import { useParams } from 'react-router-dom';
import PostForm from './PostForm';
import PostList from './PostList';

const Posts = ({ getAllPosts, posts, addPost }) => {
  const [adding, setAdd] = useState(false);

  const params = useParams()

  useEffect( () => {
    getAllPosts(params.subreaditId)
  }, [])

  return (
    <>
      <h3>All Posts</h3>
      { adding ?
      <>
        <PostForm 
          addPost={addPost}
          subreaditId={params.subreaditId}
          setAdd={setAdd}
        />
        <button onClick={() => setAdd(false)}>Cancel</button>
      </>
      :
      <button onClick={() => setAdd(true)}>Create Post</button>
      }
      <PostList posts={posts} subreaditId={params.subreaditId}/>
    </>
  )
}

const ConnectedPosts = (props) => (
  <PostConsumer>
    { value => <Posts {...props} {...value} />}
  </PostConsumer>
)

export default ConnectedPosts;