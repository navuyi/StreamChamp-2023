import TextInput from "../../components/TextInput/TextInput"
import style from "./style.module.scss"


const SignIn = () => {
    return(
        <div className={style.signIn}>
            <div className={style.container}>
                <header>Sign in to <span>StreamChamp</span></header>
                <section>
                    <TextInput label="Email" value="" _key="email" handleChange={() => {}}/>
                    <TextInput label="Password" value="" _key="password" handleChange={() => {}}/>
                </section>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default SignIn