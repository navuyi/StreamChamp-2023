import { IStreamer } from "@backend/database/models/Streamer"
import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"


export interface streamer extends IStreamer {
    voteValue: number | null
    new?: boolean
}

export interface streamers {
    list: streamer[]
}

const initialState : streamers = {
    list: []
}

export const StreamersSlice = createSlice({
    name: "Streamers",
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<streamer[]>) => {
            state.list = action.payload
        }
    }
})

export default StreamersSlice.reducer
export const {setList} = StreamersSlice.actions