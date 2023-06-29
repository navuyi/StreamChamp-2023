import StreamerBadge from "./StreamerBadge/StreamerBadge"
import StreamerSearchList from "./StreamerSearchList/StreamerSearchList"
import style from "./style.module.scss"


const StreamerSearch = () => {

    return(
        <div className={style.streamerSearch}>
            <div className={style.container}>
                <span className={style.header}>Search streamers</span>
                <div className={style.wrapper}>
                    <span className={style.subHeader}>Recently added</span>
                    <div className={style.recentlyAddedContainer}>
                        <StreamerBadge type="recent" nickname="horsensen" upvotes={12} downvotes={1} vote={"downvote"}/>
                        <StreamerBadge type="recent" nickname="xqc" upvotes={222} downvotes={12} vote={null}/>
                        <StreamerBadge type="recent" nickname="forsen" upvotes={52} downvotes={331} vote={"upvote"}/>
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