import { AxiosResponse } from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import Editor from '../components/editor/Editor';
import { useSessionJWT } from '../hooks/useSessionJWT';
import { getKatasById } from '../services/katasServices';




const KatasDetailPage = () => {
  const [kata, setKata]: any= useState([])
  console.log(kata)
  
  //find id from params
  const { id } = useParams();
  
  //variable to navigate between router's stacks
  const navigate = useNavigate();

  //get token
  let token = useSessionJWT('sessionJWT')

  const detail = async(token:string,id:string) => {
    const response:any  = await getKatasById(token, id)
    setKata(response)
  }
 

  useEffect(() => {
    if(!token){
      return navigate('/login');
    }else{
      if(id){
       detail(token, id)
      }     
      else{
        return navigate('/katas');
      }
  }
}, [token]);

const handleClick: any = ()=> {
  navigate('/katas')
}

  return (
    <div>
      <h1>Katas Detail Code: {id}</h1>
      { kata ? 
        <div>
          <h2>Nombre: {kata.name}</h2>
          <h2>Creator: {kata.creator}</h2>
          <h2>Description: {kata.description}</h2> 
          <h2>Level: {kata.level}</h2>
          <h2>Ranking: {kata.stars}</h2>
          <h2>Participants: {kata.participants}</h2>
          <h2>Intents: {kata.intents}</h2>
          <h2>Solution: {kata.solution}</h2>
      
      </div>
      
        : <p>'Kata Not Found'</p>
      }

      <button onClick={handleClick}>KATAS</button>
      </div>
  )
}

export default KatasDetailPage
