import style from "./style.module.scss"
import picture from "../../../assets/icons/piture.png"

type props = {
    type: "recent" | "item"
    nickname: string
    upvotes: number
    downvotes: number
}

const StreamerBadge = (props:props) => {


    return(
        <div className={style.streamerBadge} data-type={props.type}>
            <img className={style.profilePicture} src={picture}  alt=""/>
            <div className={style.wrapper}>
                <span className={style.nickname}>{props.nickname}</span>
                <div className={style.votesContainer}>
                    <div className={style.votesSubContainer}>
                        <button>Up</button>
                        <span className={style.counter}>{props.upvotes}</span>
                    </div>
                    <div className={style.votesSubContainer}>
                        <span className={style.counter}>{props.downvotes}</span>
                        <button>Down</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default StreamerBadge