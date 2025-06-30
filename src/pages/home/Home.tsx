import { use, useContext, useEffect } from "react"
import { Header } from "../../components/header/Header"
import { useNavigate } from "react-router-dom"
import { apiController } from "../../controller/api.controller"
import { Feed } from "../../components/feed/Feed"
import style from "../style.module.css"
import { Iconify } from "../../components/iconify/Iconify"
import { MainContext } from "../../context/MainContext"
export const Home=()=>{
    const navigate = useNavigate()
    const {  user, posts}= useContext(MainContext)
    const validateUser=async(token:string)=>{
        try {
            const res = await apiController.get("usuarios/retrieve",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            if(res.data){
                localStorage.setItem("user",JSON.stringify(res.data))
            }
        } catch (error) {
            console.log(error,"eror")
            localStorage.removeItem("token")
            localStorage.removeItem("user")
             navigate("/login")
        }
    }
    const update=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("update",e.target.files)
        const reader = new FileReader()
        const file = e.target.files![0]
        reader.readAsText(file)
        reader.onload=(even)=>{
            console.log("reader",even.target!.result)
        }
        
    }
    useEffect(()=>{
        console.log("use effect")
        const token = localStorage.getItem("token")
        if(!token){
            //navigate("/login")
        }else{
            //validateUser(token)
        }
        console.log(posts,"posts do contexto")
    },[])
    
    return <>
    <Header/>
    
    <main className={style.main}>
    
        <section className={style.profile}>
            <p>Meu perfil</p>
            
        </section>
        <Feed/>
    </main>
    </>
}