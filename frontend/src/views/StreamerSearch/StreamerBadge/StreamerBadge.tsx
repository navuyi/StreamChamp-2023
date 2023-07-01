import style from "./style.module.scss"
import picture from "../../../assets/icons/piture.png"
import Votes, { voteProps } from "../Votes/Votes"

interface props extends voteProps{
    nickname: string
}

const StreamerBadge = (props:props) => {

    const handleClick = () => {
        // TODO redirect to details page
    }

    return(
        <div className={style.streamerBadge}  onClick={handleClick}>
            <img className={style.profilePicture} src={picture}  alt=""/>
            <div className={style.wrapper}>
                <span className={style.nickname}>{props.nickname}</span>
                <Votes streamerID={props.streamerID} upvotes={props.upvotes} downvotes={props.downvotes} value={props.value}/>
            </div>
        </div>
    )
}


export default StreamerBadge