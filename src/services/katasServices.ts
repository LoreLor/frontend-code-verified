import { AxiosRequestConfig } from 'axios'
import axios from '../utils/config/axios.config'

export const getKatas = async(token:string, page?:number, limit?:number ) => {
    try{
        const options : AxiosRequestConfig = {
            headers:{
                'x-access-token': token
            },
            params: {
                page,
                limit,
            }
        }
        
        const {data} = await axios.get('/katas', options)
        return data

    }catch(error){
        console.log(error)
    }
}