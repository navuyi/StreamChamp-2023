import { IStreamer } from "@backend/database/models/Streamer"
import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"


export interface streamer extends IStreamer {
    vote: "upvote" | "downvote" | null
}

export interface streamers {
    recent: streamer[],
    list: streamer[]
}

const initialState : streamers = {
    recent: [],
    list: []
}

export const StreamersSlice = createSlice({
    name: "Streamers",
    initialState,
    reducers: {
        setRecent: (state, action: PayloadAction<IStreamer[]>) => {
            state.recent = action.payload
        },
        setList: (state, action: PayloadAction<IStreamer[]>) => {
            state.list = action.payload
        }
    }
})

export default StreamersSlice.reducer
export const {setRecent, setList} = StreamersSlice.actions