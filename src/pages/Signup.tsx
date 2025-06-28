import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";


export function Signup(){
    const Useref = useRef<HTMLInputElement>();
    const Passref = useRef<HTMLInputElement>();

    async function handleSubmit(){

        const username = Useref.current?.value;
        const password = Passref.current?.value;
        await axios.post(BACKEND_URL+"/signup",{
            username,password
        })
        alert("Signup Successful")
    }


    return <div className="h-screen w-screen bg-gray-600 flex justify-center items-center">
        <div className="bg-white  rounded-xl border  min-w-32 p-6 ">
            <Input reference={Useref}  placeholder="Username"/>
            <Input reference={Passref} placeholder="password"/>
            <div className="flex justify-center pt-4">
            <Button onClick={handleSubmit} loading={false} variant="primary" text="Signup" fullWidth={true}/>
            </div>
        </div>
    </div>
}