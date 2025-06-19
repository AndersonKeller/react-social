import { Link } from "react-router-dom"
import { Iconify } from "../iconify/Iconify"
import style from "./style.module.css"

export const Header =()=>{
    return <header className={style.header}>
        <fieldset className={style.fieldset}>
            <Iconify icon="iconamoon:search-duotone" className={style.icon} />
            <input type="text" placeholder="escreva aqui alguma coisa" />
        </fieldset>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to="/login">Login</Link>
         <Link to="/cadastro">Cadastro</Link>
        </nav>
    </header>
}