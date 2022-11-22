import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSessionJWT } from '../hooks/useSessionJWT';
import { getKatas } from '../services/katasServices';
import { Kata } from '../utils/types/Kata.types';


const KatasPage = () => {
    //state of components
    const [katas, setKatas] = useState([]);
    const [, setTotalPages] = useState(1);
    const [, setCurrentPage] = useState(1);

    //para verificar que el usuario esta autenticado
    let token = useSessionJWT('sessionJWT');
    const navigate = useNavigate();

    useEffect(() => {
      if(!token){
        navigate('/login')
      }else{
        getKatas(token).then((response:AxiosResponse) => {
          if(response.status === 200){
            console.table(response.data);
            let { katas, totalPages, currentPage} = response.data;
            setKatas(katas);
            setTotalPages(totalPages);
            setCurrentPage(currentPage);
          }else{
            throw new Error(`Error obtaining katas: ${response.data}`)
        }
    }).catch((error) => console.error(`[Get All Katas Error] ${error}`))


      
      }
    },[token])



    const handleClick = (id: number) =>{
      navigate(`/katas/${id}`)
    }



    return (
      <div>
        <h1>Katas Pages</h1>
        <div>

        { katas.length > 0 ? 
                    <div style={{display:'grid',justifyContent:'center'}}>
                        {/* TODO: Export to isolated Component */}
                        { katas.map((kata: Kata) => 
                            (
                              <div key={kata._id} style={{margin:'5px', cursor:'pointer'}}>
                                  <h3 onClick={() => handleClick(kata._id)}>Name: {kata.name}</h3>
                                  <h4>Description: {kata.description}</h4>
                                  <h5>Creator: {kata.creator}</h5>
                                  <p>Rating: {kata.stars}</p>
                                  <br/>
                              </div>
                            )
                        )}
                    </div>
                :
                    <div>
                        <h5>
                            No katas found
                        </h5>
                    </div>
            }
        </div>
      </div>
    )
}

export default KatasPage
