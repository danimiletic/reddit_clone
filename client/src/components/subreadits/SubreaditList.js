

const SubreaditList = ({ subreadits }) => {
  return (
    <>
      { subreadits.map ( s =>
        <ul>
          <li>
            {s.title}
          </li>
        </ul>)}
    </>
  )
}

export default SubreaditList;