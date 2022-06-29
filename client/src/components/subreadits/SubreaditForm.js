import { useState, useEffect } from 'react'

const SubreaditForm = ({ addSubreadit, updateSubreadit, id, title, description, owner }) => {
  const [subreadit, setSubreadit] = useState({ title: '', description: '', owner: '' })

  useEffect( () => {
    if (id) {
      setSubreadit({ title, description, owner })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateSubreadit(id, subreadit)
    } else {
      addSubreadit(subreadit)
    }
    setSubreadit(({ title: '', description: '', owner: '' }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Subreadit Title</label>
        <input 
          type="text"
          name="title"
          value={subreadit.title}
          onChange={(e) => setSubreadit({ ...subreadit, title: e.target.value})}
        />
        <label>Subreadit Description</label>
        <input 
          type="text"
          name="description"
          value={subreadit.description}
          onChange={(e) => setSubreadit({ ...subreadit, description: e.target.value })}
        />
        <label>Name of Creator</label>
        <input 
          type="text"
          name="owner"
          value={subreadit.owner}
          onChange={(e) => setSubreadit({ ...subreadit, owner: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SubreaditForm;