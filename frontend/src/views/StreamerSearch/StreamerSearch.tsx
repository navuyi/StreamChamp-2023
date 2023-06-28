import StreamerBadge from "./StreamerBadge/StreamerBadge"
import style from "./style.module.scss"


const StreamerSearch = () => {

    return(
        <div className={style.streamerSearch}>
            <div className={style.container}>
                <span className={style.header}>Search streamers</span>
                <div className={style.wrapper}>
                    <span className={style.subHeader}>Recently added</span>
                    <div className={style.recentlyAddedContainer}>
                        <StreamerBadge type="recent" nickname="xqc" upvotes={12} downvotes={1}/>
                        <StreamerBadge type="recent" nickname="xqc" upvotes={12} downvotes={1}/>
                        <StreamerBadge type="recent" nickname="xqc" upvotes={12} downvotes={1}/>
                        <StreamerBadge type="recent" nickname="xqc" upvotes={12} downvotes={1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default StreamerSearch