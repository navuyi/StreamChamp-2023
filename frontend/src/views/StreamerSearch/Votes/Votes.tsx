
import style from "./style.module.scss"
import {ReactComponent as UpvoteArrow} from "../../../assets/icons/upvote.svg"
import {ReactComponent as DownvoteArrow} from "../../../assets/icons/downvote.svg"

export interface voteProps {
    upvotes: number
    downvotes: number
    vote: "upvote" | "downvote" | null
}

const Votes = (props:voteProps) => {
    return(
        <div className={style.votes}>
            <div className={style.votesSubcontainer}>
                
                <UpvoteArrow className={style.arrow} data-active={props.vote === "upvote" ? true : false} />
                <span className={style.counter}>{props.upvotes}</span>
            </div>
            <div className={style.votesSubcontainer}>
                <span className={style.counter}>{props.downvotes}</span>
                <DownvoteArrow className={style.arrow} data-active={props.vote === "downvote" ? true : false} />
            </div>
        </div>
    )
}


export default Votes