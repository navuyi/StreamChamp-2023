
import style from "./style.module.scss"
import {ReactComponent as UpvoteArrow} from "../../../assets/icons/upvote.svg"
import {ReactComponent as DownvoteArrow} from "../../../assets/icons/downvote.svg"
import { parseVoteCount } from "../../../utils/parseVotesCount"
import { useVote } from "./useVote"

export interface voteProps {
    upvotes: number
    downvotes: number
    value: number | null
    streamerID: number
}

const Votes = (props:voteProps) => {
    const {handleVote} = useVote()

    return(
        <div className={style.votes}>
            <div className={style.votesSubcontainer}>
                <UpvoteArrow className={style.arrow} data-active={props.value === 1 ? true : false} onClick={(e)=>handleVote(e, props.streamerID, props.value, 1)} />
                <span className={style.counter}>{parseVoteCount(props.upvotes)}</span>
            </div>
            <div className={style.votesSubcontainer}>
                <span className={style.counter}>{parseVoteCount(props.downvotes)}</span>
                <DownvoteArrow className={style.arrow} data-active={props.value === -1 ? true : false} onClick={(e)=>handleVote(e, props.streamerID,props.value, -1)} />
            </div>
        </div>
    )
}


export default Votes