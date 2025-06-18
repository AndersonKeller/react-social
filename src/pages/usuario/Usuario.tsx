import { useParams } from "react-router-dom"
import { Feed } from "../../components/feed/Feed"
import { Header } from "../../components/header/Header"
import style from "../style.module.css"
export const Usuario=()=>{
    const params = useParams()

    return <>
    <Header/>
    
    <main className={style.main}>
        <section className={style.profile}>
            <p>{params.id}</p>
        </section>
        <Feed idUsuario={params.id}/>
    </main>
    </>
}
