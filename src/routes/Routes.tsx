import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Login } from "../pages/login/Login"
import { Cadastro } from "../pages/cadastro/Cadastro"
import { Usuario } from "../pages/usuario/Usuario"


export function MainRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/usuario/:id" element={<Usuario/>} />
    </Routes>
}