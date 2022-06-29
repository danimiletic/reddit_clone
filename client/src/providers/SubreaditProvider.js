import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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


  return (
    <SubreaditContext.Provider value={{
      subreadits, 
      getAllSubreadits: getAllSubreadits,
      addSubreadit: addSubreadit,
    }}>
      { children }
    </SubreaditContext.Provider>
  )
}

export default SubreaditProvider;