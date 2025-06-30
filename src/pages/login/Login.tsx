
import { Header } from "../../components/header/Header"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { createLoginSchema, type iCreateLogin } from "../../schemas/login.schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../components/input/Input"
import { useContext } from "react"
import { MainContext } from "../../context/MainContext"


export const Login=()=>{
    const navigate = useNavigate()
    const { setUser } = useContext(MainContext)
    
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<iCreateLogin>({
        mode:"onBlur",
        resolver: zodResolver(createLoginSchema)
    })

    const fazerLogin = async (loginData:iCreateLogin) => {
        console.log(loginData,"loginData")
       
      try {
         const res = await apiController.post("/login",loginData)
            console.log(res,"res do axios")
       if(res.data.token){
            toast.success("Sucesso, login")
            localStorage.setItem("token",res.data.token)
            setUser(res.data)
            setTimeout(() => {
                navigate("/")
            }, 3000);
       }
      } catch (error:any) {
        console.log(error,"error")
        toast.error(error.response.data.message)
      }
        
    }
    return <>
    <Header/>
    
    <main className={style.main}>
        <form className={style.form} onSubmit={handleSubmit(fazerLogin)}>
            <Input errorMsg={errors.email&&errors.email.message} 
            label="E-mail" type="text" placeholder="escreva seu e-mail" register={register("email")}/>
           
            <Input errorMsg={errors.password&&errors.password.message} 
                label="Senha" type="password" placeholder="****" register={register("password")}
            />
            <button type="submit">Login</button>
        </form>
    </main>
    </>
}