import TextInput from "../../components/TextInput/TextInput"
import style from "./style.module.scss"
import { useSignUp } from "./useSignUp"


const SignUp = () => {
    const {form, handleFormFieldChange, handleSubmit} = useSignUp()

    return(
        <div className={style.signUp}>
            <div className={style.container}>
                <header className={style.header}>Create an user account on <span>StreamChamp</span></header>
                <section className={style.section}>
                    <TextInput label="First Name" value={form.firstName} _key="firstName" handleChange={handleFormFieldChange}/>
                    <TextInput label="Last Name" value={form.lastName} _key="lastName" handleChange={handleFormFieldChange}/>
                    <TextInput label="Email" value={form.email} _key="email" handleChange={handleFormFieldChange}/>
                    <TextInput label="Password" type="password" value={form.password} _key="password" handleChange={handleFormFieldChange}/>
                    <TextInput label="Repeat password" type="password" value={form.passwordRepeat} _key="passwordRepeat" handleChange={handleFormFieldChange}/>
                </section>
                <button className={style.button} onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp