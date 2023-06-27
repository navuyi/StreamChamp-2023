import Navbar from "../../components/Navbar/Navbar"
import style from "./style.module.scss"


const Landing = () => {

  return(
    <div className={style.landing}> 
      <Navbar />
      <div className={style.container}>
        <header className={style.header}>Welcome to <span>StreamChamp</span> - a streamer spotlight application </header>
        <span className={style.text}>
          Lorem ipsum dolor sit amet consectetur. Sit felis convallis ante velit faucibus ut. Eros placerat pellentesque mi in proin. Tellus vel a purus ornare cursus. Dolor id pharetra neque convallis sit eu. Ligula aliquam nec at aliquam nulla ut.
        </span>
        <span className={style.text}>
          Feugiat euismod purus. Lorem ipsum dolor sit amet consectetur. Bibendum ornare feugiat leo pretium. Porta tortor lectus lacus eget suspendisse eget purus cursus risus. Cras eleifend tristique tempor arcu sed natoque. Vel cras ante interdum sed neque pellentesque nisi ullamcorper neque. 
        </span>
      </div>
    </div>
  )
}


export default Landing