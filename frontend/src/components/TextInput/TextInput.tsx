
import style from "./style.module.scss"


type props = {
    label: string
    placeholder?: string
    value: string
    _key: string
    textarea? : boolean
    type?: string
    handleChange: (key:string, value:string) => void
}

const TextInput = (props:props) => {
    return(
        <div className={style.inputContainer}>
            <label className={style.label}>{props.label}</label>
            {props.textarea === true ? 
                <textarea className={style.input} rows={6} placeholder={props.placeholder} value={props.value} onChange={e => props.handleChange(props._key, e.currentTarget.value)}/>
                :<input className={style.input} type={props.type} placeholder={props.placeholder} value={props.value} onChange={e => props.handleChange(props._key, e.currentTarget.value)}/>    
            }
        </div>
    )
}

export default TextInput