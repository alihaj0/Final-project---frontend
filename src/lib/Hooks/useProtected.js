import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useProtected(){
    const navigate =useNavigate();
    useEffect(() => {
        const token= getAccessToken();
        if(!token){
            navigate('/signin');
        }
        
    }, []);
}