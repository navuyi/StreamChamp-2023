import Select from "../../../components/Select/Select"
import TextInput from "../../../components/TextInput/TextInput"
import StreamerBadge from "../StreamerBadge/StreamerBadge"
import style from "./style.module.scss"
import { useAppSelector } from "../../../redux/store"
import { useStreamerList } from "../hooks/useStreamerList"

const StreamerSearchList = () => {
    const {list} = useAppSelector(state => state.streamers)
    const {currentPage, lastPage, handlePageChange} = useStreamerList()

    return(
        <div className={style.streamerSearchList}>
            <section className={style.controlSection}>
                {
                    /*
                    <div className={style.controlWrapper}>
                    <TextInput label="Filter" _key="search" handleChange={() => {}} value=""/>
                    </div>
                    <div className={style.controlWrapper}>
                        <Select label="Sort" _key="sort" value="" options={[["By upvotes", "upvotes"], ["By downvotes", "downvotes"], ["Creation date", "created"]]}/>
                    </div>
                    */
                }
            </section>
            <section className={style.listSection}>
               {
                list.map((s, index) => {
                    return <StreamerBadge key={index} upvotes={s.upvotes} downvotes={s.downvotes} vote={null} nickname={s.nickname} type="list"/>
                })
               }
            </section>
            <section className={style.listNavigation}>
                <button disabled={currentPage===1} onClick={()=>handlePageChange("prev")}>Previous</button>
                <span>{currentPage} out of {lastPage}</span>
                <button disabled={currentPage===lastPage} onClick={()=>handlePageChange("next")}>Next</button>
            </section>
        </div>
    )
}


export default StreamerSearchList