import React, {useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom';

import Editor from '../components/editor/Editor';
import { useSessionJWT } from '../hooks/useSessionJWT';
import { getKatasById } from '../services/katasServices';




const KatasDetailPage = () => {
    const [kata, setKata]: any= useState([]);
    const [showSolution, setShowSolution] = useState(false)
    
    //find id from params
    const { id } = useParams();
    
    //variable to navigate between router's stacks
    const navigate = useNavigate();

    //get token
    let token = useSessionJWT('sessionJWT')

    //traigo el detalle y seteo el estado
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
      }, [id, navigate, token]);

    

    return (
      <div>
        <h1>Katas Detail Code: {id}</h1>
       
        { kata ? 
          <div>
            <h3>Nombre: <strong>{kata.name}</strong></h3>
            <h3>Creator: {kata.creator}</h3>
            <h3>Description: {kata.description}</h3> 
            <h3>Level: {kata.level}</h3>
            <h3>Ranking: {kata.stars}</h3>
            <h3>Participants: {kata.participants}</h3>
            <h3>Intents: {kata.intents}</h3>

            {/* boton que muestra o no la solucion */}
            <button onClick={()=> setShowSolution(!showSolution)}>{showSolution? 'Show Solution':'Hide Solution'}</button>

            { showSolution ?  <Editor>{kata.solution}</Editor>: null }
          </div>
          : 
          <p>'Kata Not Found'</p>
        }
      </div>
    )
}

export default KatasDetailPage
