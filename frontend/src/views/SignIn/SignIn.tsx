import TextInput from "../../components/TextInput/TextInput"
import style from "./style.module.scss"
import { useSignIn } from "./useSignIn"


const SignIn = () => {
    const {credentials, handleCredentialsChange, handleSubmit} = useSignIn()


    return(
        <div className={style.signIn}>
            <div className={style.container}>
                <header>Sign in to <span>StreamChamp</span></header>
                <section>
                    <TextInput label="Email" value={credentials.email} _key="email" handleChange={handleCredentialsChange}/>
                    <TextInput label="Password" type="password" value={credentials.password} _key="password" handleChange={handleCredentialsChange}/>
                </section>
                <button onClick={handleSubmit}> Submit </button>
            </div>
        </div>
    )
}

export default SignIn