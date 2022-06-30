import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export const SubreaditContext = React.createContext();
export const SubreaditConsumer = SubreaditContext.Consumer;

const SubreaditProvider = ({ children }) => {
  const [subreadits, setSubreadits] = useState([])

  // const navigate = useNavigate()

  const getAllSubreadits = () => {
    axios.get('/api/subreadits')
      .then( res => setSubreadits(res.data))
      .catch( err => console.log(err) )
  }

  const addSubreadit = (subreadit) => {
    axios.post('/api/subreadits', { subreadit })
      .then( res => setSubreadits([...subreadits, res.data]))
      .catch( err => console.log(err) )
  }

  const updateSubreadit = (id, subreadit) => {
    axios.put(`/api/subreadits/${id}`, { subreadit })
     .then( res => {
       const newUpdatedSubreadit = subreadits.map( s => {
         if (s.id === id) {
           return res.data
         }
         return s
       })
       setSubreadits(newUpdatedSubreadit)
       Navigate('/subreadits')
     })
     .catch( err => console.log(err) )
  }

  const deleteSubreadit = (id) => {
    axios.delete(`/api/subreadits/${id}`)
      .then( res => {
        setSubreadits(subreadits.filter( s => s.id !== id))
        alert(res.data.message)
        Navigate('/subreadits')
      })
      .catch( err => console.log(err) )
  }
  return (
    <SubreaditContext.Provider value={{
      subreadits, 
      getAllSubreadits: getAllSubreadits,
      addSubreadit: addSubreadit,
      updateSubreadit: updateSubreadit,
      deleteSubreadit: deleteSubreadit,
    }}>
      { children }
    </SubreaditContext.Provider>
  )
}

export default SubreaditProvider;