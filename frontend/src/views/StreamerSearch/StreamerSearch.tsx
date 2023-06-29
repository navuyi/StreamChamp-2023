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
                        <StreamerBadge type="recent" nickname="xqcDramaHelloWorld" upvotes={12} downvotes={1} vote={"downvote"}/>
                        <StreamerBadge type="recent" nickname="xqc" upvotes={22} downvotes={12} vote={null}/>
                        <StreamerBadge type="recent" nickname="forsen" upvotes={52} downvotes={31} vote={"upvote"}/>
                        <StreamerBadge type="recent" nickname="xqc" upvotes={22} downvotes={12} vote={null}/>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <span className={style.subHeader}>Search</span>
                </div>
            </div>
        </div>
    )
}


export default StreamerSearch