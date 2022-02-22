import { Link } from 'react-router-dom';

const Nomatch = ({ }) => {
  return (
    <>
      <h1>Error 404 page not found</h1>
      <Link to ="/">
        Return to Home
      </Link>
    </>
  )
}

export default Nomatch;