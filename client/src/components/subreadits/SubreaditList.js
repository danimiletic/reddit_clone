

const SubreaditList = ({ subreadits }) => {
  return (
    <>
      { subreadits.map ( s =>
        <ul>
          <li>
            {s.title}
            {s.description}
            {s.owner}
          </li>
        </ul>)}
    </>
  )
}

export default SubreaditList;