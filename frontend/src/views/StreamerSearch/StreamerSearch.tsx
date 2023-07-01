import StreamerSearchList from "./StreamerSearchList/StreamerSearchList"
import style from "./style.module.scss"



const StreamerSearch = () => {
   
    return(
        <div className={style.streamerSearch}>
            <div className={style.container}>
                <span className={style.header}>Search streamers</span>
                <StreamerSearchList />
            </div>
        </div>
    )
}


export default StreamerSearch