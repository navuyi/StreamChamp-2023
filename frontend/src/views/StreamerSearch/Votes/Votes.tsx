
import style from "./style.module.scss"
import {ReactComponent as UpvoteArrow} from "../../../assets/icons/upvote.svg"
import {ReactComponent as DownvoteArrow} from "../../../assets/icons/downvote.svg"
import { MouseEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/store"
import modalSlice, { setModal } from "../../../redux/features/modalSlice"

export interface voteProps {
    upvotes: number
    downvotes: number
    vote: "upvote" | "downvote" | null
}

const Votes = (props:voteProps) => {
    const {signedIn} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const handleClick = (e:MouseEvent<SVGSVGElement>) => {
        e.stopPropagation() 
        if(signedIn === false){
            dispatch(setModal({
                header: "Account required",
                text: "This feature is available only to members",
                type: "signin",
                visible: true
            }))
        }else{
            // TODO perform proper logic of vote
        }
    }

    const parseVotes = (value:number) => {
        if (value >= 1000 && value < 1000000) {
            return (value / 1000).toFixed(1) + "k";
          } else if (value >= 1000000) {
            return (value / 1000000).toFixed(1) + "m";
          } else {
            return value.toString();
          }
    }

    return(
        <div className={style.votes}>
            <div className={style.votesSubcontainer}>
                
                <UpvoteArrow className={style.arrow} data-active={props.vote === "upvote" ? true : false} onClick={handleClick} />
                <span className={style.counter}>{parseVotes(props.upvotes)}</span>
            </div>
            <div className={style.votesSubcontainer}>
                <span className={style.counter}>{parseVotes(props.downvotes)}</span>
                <DownvoteArrow className={style.arrow} data-active={props.vote === "downvote" ? true : false} onClick={handleClick} />
            </div>
        </div>
    )
}


export default Votes