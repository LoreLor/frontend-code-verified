//hook for verified existing token user
export const useSessionJWT = (key:string): any | boolean => {
    const storedValue = sessionStorage.getItem(key);

    if(!storedValue){
        return false
    }else{
        return storedValue
    }
}