import { StreamingPlatform } from "@backend/types/streamer.type"
import style from "./style.module.scss"
import { usePlatformBadge } from "./usePlatformBadge"

type props = {
    name: StreamingPlatform
}

const PlatformBadge = (props:props) => {
    const {selected, handlePlatformSelect} = usePlatformBadge()

    return(
        <div className={style.platformBadge} onClick={() => handlePlatformSelect(props.name)} data-selected={selected}>
            <span className={style.label}>{props.name}</span>
        </div>
    )
}

export default PlatformBadge