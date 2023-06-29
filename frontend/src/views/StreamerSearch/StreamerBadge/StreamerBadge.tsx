import style from "./style.module.scss"
import picture from "../../../assets/icons/piture.png"
import Votes, { voteProps } from "../Votes/Votes"

interface props extends voteProps{
    type: "recent" | "list"
    nickname: string
    upvotes: number
    downvotes: number
}

const StreamerBadge = (props:props) => {

    const handleClick = () => {
        console.log("Badge clicked")
    }

    return(
        <div className={style.streamerBadge} data-type={props.type} onClick={handleClick}>
            <img className={style.profilePicture} src={picture}  alt=""/>
            <div className={style.wrapper}>
                <span className={style.nickname}>{props.nickname}</span>
                <Votes upvotes={props.upvotes} downvotes={props.downvotes} vote={props.vote}/>
            </div>
        </div>
    )
}


export default StreamerBadge