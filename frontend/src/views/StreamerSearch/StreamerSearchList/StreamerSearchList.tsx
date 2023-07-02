import StreamerBadge from "../StreamerBadge/StreamerBadge"
import style from "./style.module.scss"
import { useAppSelector } from "../../../redux/store"
import { useStreamerList } from "./useStreamerList"

const StreamerSearchList = () => {
    const {list} = useAppSelector(state => state.streamers)
    const {currentPage, lastPage, handlePageChange} = useStreamerList()

    return(
        <div className={style.streamerSearchList}>
            <section className={style.listSection}>
               {
                list.map((s, index) => {
                    return <StreamerBadge key={index} upvotes={s.upvotes} streamerID={s.id} new={s.new}
                        downvotes={s.downvotes} nickname={s.nickname} value={s.voteValue}
                    />
                })
               }
            </section>
            <section className={style.listNavigation}>
               {
                list.length > 0 ?  
                <>
                    <button disabled={currentPage===1} onClick={()=>handlePageChange("prev")}>Previous</button>
                    <span>{currentPage} out of {lastPage}</span>
                    <button disabled={currentPage===lastPage} onClick={()=>handlePageChange("next")}>Next</button>
                </> : null
               }
            </section>
        </div>
    )
}


export default StreamerSearchList