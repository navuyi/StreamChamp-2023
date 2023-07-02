import style from "./style.module.scss"
import img from "../../assets/icons/piture.png"
import { useStreamerDetails } from "./useStreamerDetails"
import { useAppSelector } from "../../redux/store"
import Votes from "../StreamerSearch/Votes/Votes"

const StreamerDetails = () => {
    const {list} = useAppSelector(state => state.streamers)
    const {index} = useStreamerDetails()

    return(
        <div className={style.streamerDetails}>
            {
                index != null ? 
                <div className={style.container}>
                    <section className={style.section}>
                        <img src={img} alt="" />
                    </section>
                    <section>
                        <Votes upvotes={list[index].upvotes} downvotes={list[index].downvotes} value={list[index].voteValue} streamerID={list[index].id}/>
                    </section>
                    <section className={style.section}>
                        <header>{list[index].nickname}</header>
                        <p>{list[index].description}</p>
                    </section>
                </div> : null
            }
        </div>
    )
}

export default StreamerDetails