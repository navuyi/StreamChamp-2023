import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"


export type modalType = "info" | "signin" | null
export type modalComponentProps = {
    header: string
    text: string
}

export interface modal {
    type: modalType
    visible: boolean
    header: string
    text: string
}

const initialState : modal = {
    type: null,
    visible: true,
    header: "This is a test modal",
    text: "Sint sunt reprehenderit ad dolore tempor. Reprehenderit officia cupidatat eu cillum."
}

export const ModalSlice = createSlice({
    name: "Modal",
    initialState,
    reducers: {
        setModal: (state, action: PayloadAction<modal>) => {
            state.header = action.payload.header
            state.text = action.payload.text
            state.type = action.payload.type
            state.visible = action.payload.visible
        },
        setModalType: (state, action: PayloadAction<modalType>) => {
            state.type = action.payload
        },
        setModalVisible: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload
        },
        setModalHeader: (state, action: PayloadAction<string>) => {
            state.header = action.payload
        },
        setModalText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
})


export default ModalSlice.reducer
export const {setModalVisible, setModalHeader, setModalText, setModalType, setModal} = ModalSlice.actions

