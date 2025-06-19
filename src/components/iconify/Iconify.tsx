import {Icon} from "@iconify/react"
interface IconifyProps {
    icon:string,
    color?:string,
    className?:string
}
export const Iconify=({icon,color,className}:IconifyProps)=>{
    return <Icon className={className} icon={icon} width={24} height={24} color={color??"#000"}/>
}