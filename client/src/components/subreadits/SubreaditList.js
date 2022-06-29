

const SubreaditList = ({ subreadits }) => {
  return (
    <>
      { subreadits.map ( s =>
        <ul>
          <li>
            {s.title}
            <br />
            {s.description}
            <br />
            {s.owner}
          </li>
        </ul>)}
    </>
  )
}

export default SubreaditList;