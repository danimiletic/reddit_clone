import { Link } from 'react-router-dom';

const PostList = ({ posts, subreaditId }) => {
  return (
    <>
      { posts.map( p => 
      <ul>
        <li>
          <Link to={`/${subreaditId}/posts/${p.id}`}>
          {p.postTitle}
          </Link>
        </li>
      </ul>
      )}
    </>
  )
}