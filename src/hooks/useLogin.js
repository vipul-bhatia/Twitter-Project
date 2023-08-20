import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin =(email, password)=>{
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const[isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    
    const login = async (email, password)=>{
        setError(null)
        setIsPending(true)

        try{
           const res =  await projectAuth.signInWithEmailAndPassword(email,password)

            dispatch({type:'LOGIN',payload: res.user})

            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
        }
        catch(err){
            if(!isCancelled){
                setIsPending(false)
                setError(err.message)
                console.log(err.message)
            }
        }
    }
    useEffect(()=>{
        return ()=> setIsCancelled(true)
    },[])

    return {error, isPending, login}
}