import style from "./style.module.scss"

type props = {
    handleSubmit : () => Promise<void>
}

const SubmitButton = (props:props) => {

    return(
        <button className={style.submitButton} onClick={props.handleSubmit}>
            Submit
        </button>
    )
}


export default SubmitButton