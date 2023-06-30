import TextInput from "../../components/TextInput/TextInput"
import style from "./style.module.scss"


const SignUp = () => {
    return(
        <div className={style.signUp}>
            <div className={style.container}>
                <header className={style.header}>Create an user account on <span>StreamChamp</span></header>
                <section className={style.section}>
                    <TextInput label="First Name" value="" _key="" handleChange={() => {}}/>
                    <TextInput label="Last Name" value="" _key="" handleChange={() => {}}/>
                    <TextInput label="Email" value="" _key="" handleChange={() => {}}/>
                    <TextInput label="Password" value="" _key="" handleChange={() => {}}/>
                    <TextInput label="Repeat password" value="" _key="" handleChange={() => {}}/>
                </section>
                <button className={style.button}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp