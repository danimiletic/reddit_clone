import { Link } from 'react-router-dom';

const PostList = ({ posts, subreaditId }) => {
  return (
    <>
    {
      posts === undefined || posts.length < 0 ?
      <h2>Feels a bit empty. Create a post!</h2>
      :
        posts.map( p => 
          <Link to={`/${subreaditId}/posts/${p.id}`}>
            <p>{p.post_title}</p>
          </Link>
        )
      }
    </>
  )
}

export default PostList;

// import { Link } from 'react-router-dom';

// const PostList = ({ posts, subreaditId }) => {
//   return (
//     <>
//       { posts.map( p => 
//           <Link to={`/${subreaditId}/posts/${p.id}`}>
//           <p>{p.postTitle}</p>
//           </Link>
//       )}
//     </>
//   )
// }

// export default PostList;

