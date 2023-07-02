import { StreamingPlatform } from "@backend/types/streamer.type"
import style from "./style.module.scss"
import { usePlatformBadge } from "./usePlatformBadge"
import { useAppSelector } from "../../../redux/store"

type props = {
    name: StreamingPlatform
}

const PlatformBadge = (props:props) => {
    const {handlePlatformSelect} = usePlatformBadge()
    const {platform} = useAppSelector(state => state.streamerForm)

    return(
        <div className={style.platformBadge} onClick={() => handlePlatformSelect(props.name)} data-selected={platform.includes(props.name)}>
            <span className={style.label}>{props.name}</span>
        </div>
    )
}

export default PlatformBadge