import {CreateStreamerRequestBody} from "@backend/types/streamer.type"
import { Action, createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

export interface StreamerFormState extends CreateStreamerRequestBody {}
export type StreamerFormTextAttributes = "description"|"firstName"|"lastName"|"nickname"

export const initialState : StreamerFormState = {
    nickname: "",
    firstName: "",
    lastName: "",
    description: "",
    platform: []
}

export const StreamerFormSlice = createSlice({
    name: "StreamerForm",
    initialState,
    reducers: {
        setTextProperty: (state, action: PayloadAction<{key:string, value:string}>) => {
            const { key, value } = action.payload;
            state[key as StreamerFormTextAttributes] = value
        },
        setDefault: () => {
            return initialState
        },
        setNickname: (state, action: PayloadAction<{value: string}>) => {
            state.nickname = action.payload.value
        },
        setFirstName: (state, action: PayloadAction<{value:string}>) => {
            state.firstName = action.payload.value
        },
        setLastName : (state, action: PayloadAction<{value:string}>) => {
            state.lastName = action.payload.value
        },
        setDescription : (state, action: PayloadAction<{value:string}>) => {
            state.description = action.payload.value
        },
        setPlatform : (state, action: PayloadAction<{value:string[]}>) => {
            state.platform = action.payload.value
        }
    }
})

export default StreamerFormSlice.reducer
export const {setTextProperty,setNickname,setDescription,setLastName,setPlatform,setFirstName, setDefault}=StreamerFormSlice.actions
