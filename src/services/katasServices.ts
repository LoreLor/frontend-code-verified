import axios from '../utils/config/axios.config';


export const getKatas = async(token:string, page?:number, limit?:number) => {
    
    const data = await axios.get('/katas', {
        headers:{
            'x-access-token': token
        },
        params: {
            page,
            limit
        }
    })
    return data
};

export const getKatasById = async(token:string, id:string) =>{
    try{
        const {data} = await axios.get(`/katas/${id}`, {
            headers:{
                'x-access-token': token
            }
        })
        return data;

    }catch(error){
        console.log(error)
    }
}