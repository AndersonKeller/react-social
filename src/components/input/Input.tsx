import style from "./style.module.css"
interface InputProps {
    label: string
    type:"text"|"password",
    placeholder:string
    errorMsg?:string
    register:{}
}
export const Input = ({label,type,placeholder,errorMsg,register}:InputProps)=>{
    return <fieldset>
        <label htmlFor={label}>{label}</label>
        <input {...register} placeholder={placeholder} type={type} id={label}/>
         {errorMsg ? 
                <span className={style.error}>{errorMsg}</span>
                : <span className={style.error}></span> }
    </fieldset>
}