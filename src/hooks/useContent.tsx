import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";



export function useContent(){
    const [contents,setContents] = useState([]);

    useEffect(()=>{
        axios.get(BACKEND_URL+"/get-content",{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }).then((response)=>{

            setContents(response.data.content)
        })
    },[])
    return contents
}