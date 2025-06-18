import { useState } from "react"
import { Header } from "../../components/header/Header"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Iconify } from "../../components/iconify/Iconify"

export const Login=()=>{
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const navigate = useNavigate()

    const fazerLogin = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const body = {
            password:pass,
            email:email,
        }
       const res = await apiController.post("/login",body)
       console.log(res,"res do axios")
       if(res.data.token){
            toast.success("Sucesso, login")
            localStorage.setItem("token",res.data.token)
            setTimeout(() => {
                navigate("/")
            }, 3000);
       }
        console.log("fazer login", email)
        console.log("fazer login",pass)
    }
    return <>
    <Header/>
    <Iconify icon="arcticons:avatar-world"/>
    <main className={style.main}>
        <form className={style.form} onSubmit={(event)=>fazerLogin(event)}>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input  id="email" type="text" placeholder="escreva seu e-mail"
                 onChange={(e)=>setEmail(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" placeholder="*****"
                 onChange={(e)=>setPass(e.target.value)}
                />

            </fieldset>
            <button type="submit">Login</button>
        </form>
    </main>
    </>
}