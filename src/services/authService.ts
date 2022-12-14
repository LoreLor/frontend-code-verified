import axios from '../utils/config/axios.config';


/**
 * Login User Method
 * @param {string} email Email to login a user
 * @param {string} password Password to login a user
 * @returns 
 */
export const login = async(email:string, password:string) => {
    const body = {
        email:email,
        password:password
    }

    const data = await axios.post('/auth/login', body)

    return data;
}


/**
 * Register User Method
 * @param {string} email 
 * @param {string} password 
 * @param {string} name 
 * @param {number} age 
 * @returns 
 */
export const register = async(name:string, email:string, password:string, age:number, katas:string[]) => {
    const body = {
        name:name,
        email:email,
        password:password,
        age:age,
        katas:katas
    }

    const data = await axios.post('/auth/register', body)

    return data;
}

