import { redirect } from "react-router-dom";
import { getAccessToken } from "../lib/utils";

export function userLoader(){
    console.log("userLoader function")
    const token= getAccessToken();
    if(!token){
        redirect('/signin');
    } 
    return null;
    //To Do : Load User Data from API and return it.
}