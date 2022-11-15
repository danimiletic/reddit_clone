import { Link } from 'react-router-dom';

  const CommentList = (postId, comments) => {
    return(
      <>
        { comments.map( c => 
          <Link to={`/${postId}/comments/${c.id}`}>
            <p>{c.user_comment}</p>
          </Link>)}
      </>
    )
  }

export default CommentList;