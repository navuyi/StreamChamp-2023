import { css, keyframes } from "@emotion/react"
import { Colors, Fonts } from "../../config/style"

import icon from "../../assets/icons/logo.png"


const spin = keyframes({
    "0%": {
        rotate: "45deg"
    },
    "100%":{
        rotate: "405deg"
    }
})

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
        fontFamily: Fonts.PoppinsRegular,
        marginLeft: "2em"
    }),
    button: css({
        width: 32,
        height: 32,
        backgroundImage: `url(${icon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        rotate: "45deg",
        marginLeft: "2em",
        cursor: "pointer",

        ":hover": {
            animation: `${spin} 1s ease forwards`
            
        }
    })
}

