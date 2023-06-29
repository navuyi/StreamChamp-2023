import Select from "../../../components/Select/Select"
import TextInput from "../../../components/TextInput/TextInput"
import StreamerBadge from "../StreamerBadge/StreamerBadge"
import style from "./style.module.scss"


const StreamerSearchList = () => {


    return(
        <div className={style.streamerSearchList}>
            <section className={style.controlSection}>
                <div className={style.controlWrapper}>
                    <TextInput label="Filter" _key="search" handleChange={() => {}} value=""/>
                </div>
                <div className={style.controlWrapper}>
                    <Select label="Sort" _key="sort" value="" options={[["By upvotes", "upvotes"], ["By downvotes", "downvotes"], ["Creation date", "created"]]}/>
                </div>
            </section>
            <section className={style.listSection}>
               <StreamerBadge upvotes={10} downvotes={12} vote={"upvote"} nickname="forsen" type="list"/>
               <StreamerBadge upvotes={10} downvotes={12} vote={"upvote"} nickname="forsen" type="list"/>
               <StreamerBadge upvotes={10} downvotes={12} vote={"upvote"} nickname="forsen" type="list"/>
               <StreamerBadge upvotes={10} downvotes={12} vote={"upvote"} nickname="forsen" type="list"/>
            </section>
        </div>
    )
}


export default StreamerSearchList