import { StreamingPlatform } from "@backend/types/streamer.type"
import PlatformBadge from "../PlatformBadge/PlatformBadge"
import style from "./style.module.scss"

const PlatformPicker = () => {

    const platforms : StreamingPlatform[] = ["Kick", "Rumble", "TikTok", "Twitch", "YouTube"]

    return(
        <div className={style.platformPicker}>
            <span className={style.header}>Select streaming platform</span>
            <div className={style.container}>
                {
                    platforms.map((item, index) => {
                        return <PlatformBadge name={item} key={index}/>
                    })
                }
            </div>
        </div>
    )
}


export default PlatformPicker