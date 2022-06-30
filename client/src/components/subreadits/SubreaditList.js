import { Link } from 'react-router-dom';

const SubreaditList = ({ subreadits }) => {
  return (
    <>
      { subreadits.map ( s =>
        <ul>
          <li>
            <Link to={`/subreadits/${s.id}`}>
            <h5>r/{s.title}</h5>
            <h6>About this sub! - {s.description}</h6>
            <h6>Creator: {s.owner}</h6>
            </Link>
          </li>
        </ul>)}
    </>
  )
}

export default SubreaditList;