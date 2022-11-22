import React, {useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import Editor from '../components/editor/Editor';

const KatasDetailPage = () => {
  //find id from params
  const { id }= useParams();
 
  //variable to navigate between router's stacks
  const navigate = useNavigate();


  return (
    <div>
      <h1>Katas Detail: {id}</h1>
      
    </div>
  )
}

export default KatasDetailPage
