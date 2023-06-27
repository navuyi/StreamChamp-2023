import { css } from "@emotion/react"

export const Colors = {
    primary: "#6C5DD3",
    secondary: "#FFCE73",
    white: "#FFFFFF",
    dark: "#1B1D21"
}

// Note - font-faces are defined in src/index.css
export const Fonts = {
    PoppinsLight: "poppins-light",
    PoppinsMedium: "poppins-medium",
    PoppinsRegular: "poppins-regular",
    PoppinsBold: "poppins-bold",
}

export const fullViewport = css({
    width: "100%",
    minHeight: "100vh",
    margin: 0,
    backgroundColor: Colors.dark,
    fontSize: "16px"
})


