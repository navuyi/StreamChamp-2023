import { css } from "@emotion/react"
import { Colors, Fonts } from "../../config/style"

export const styles = {
    container: css({
        width: "100%",
        padding: "1em 0",
        display: "flex",
        flexDirection: "row", alignItems: "center", justifyContent: "left",
        backgroundColor: Colors.primary
    }),
    header: css({
        fontSize: "20px",
        color: Colors.white,
        fontFamily: Fonts.PoppinsLight
    })
}