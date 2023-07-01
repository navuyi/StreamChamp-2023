import { useAppSelector } from "../../redux/store"
import StreamerBadge from "./StreamerBadge/StreamerBadge"
import StreamerSearchList from "./StreamerSearchList/StreamerSearchList"
import { useRecentStreamers } from "./hooks/useRecentStreamers"
import style from "./style.module.scss"



const StreamerSearch = () => {
    const {recent} = useAppSelector(state => state.streamers)
    const {} = useRecentStreamers()

    return(
        <div className={style.streamerSearch}>
            <div className={style.container}>
                <span className={style.header}>Search streamers</span>
                <div className={style.wrapper}>
                    <span className={style.subHeader}>Recently added</span>
                    <div className={style.recentlyAddedContainer}>
                        {
                            recent.map((item, index) => {
                                return <StreamerBadge key={index} type="recent" 
                                    nickname={item.nickname} upvotes={item.upvotes} 
                                    downvotes={item.downvotes} vote={null} 
                                />
                            })
                        }
                    </div>
                </div>
                <div className={style.wrapper}>
                    <span className={style.subHeader}>Search</span>
                    <StreamerSearchList />
                </div>
            </div>
        </div>
    )
}


export default StreamerSearch