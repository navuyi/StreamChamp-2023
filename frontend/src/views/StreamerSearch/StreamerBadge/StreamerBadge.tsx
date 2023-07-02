import style from "./style.module.scss"
import picture from "../../../assets/icons/piture.png"
import Votes, { voteProps } from "../Votes/Votes"
import { useNavigate } from "react-router"

interface props extends voteProps{
    nickname: string
    new?: boolean
}

const StreamerBadge = (props:props) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/streamer/${props.streamerID}`)
    }

    return(
        <div className={style.streamerBadge}  onClick={handleClick} data-new={props.new}>
            <img className={style.profilePicture} src={picture}  alt=""/>
            <div className={style.wrapper}>
                <span className={style.nickname}>{props.nickname}</span>
                <Votes streamerID={props.streamerID} upvotes={props.upvotes} downvotes={props.downvotes} value={props.value}/>
            </div>
        </div>
    )
}


export default StreamerBadge