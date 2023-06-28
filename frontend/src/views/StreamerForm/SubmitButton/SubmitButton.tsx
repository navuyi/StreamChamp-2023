import style from "./style.module.scss"

type props = {
    handleSubmit : () => Promise<void>
}

const SubmitButton = (props:props) => {

    return(
        <button className={style.submitButton}>
            Submit
        </button>
    )
}


export default SubmitButton