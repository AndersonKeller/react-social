import {Icon} from "@iconify-icon/react"
interface IconifyProps {
    icon:string
}
export const Iconify=({icon}:IconifyProps)=>{
    return <Icon icon={icon} width={24} height={24}/>
}