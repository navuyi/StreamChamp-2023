import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { GetStreamersSortParameter } from "@backend/types/streamer.type"

export interface StreamerSearchParams {
    search: string
    sort: GetStreamersSortParameter
}

const initialState : StreamerSearchParams = {
    search: "",
    sort: null
}

export const StreamerSearchParamsSlice = createSlice({
    name: "StreamerSearchParams",
    initialState,
    reducers: {
        setSearch : (state, action: PayloadAction<{value: string}>) => {
            state.search = action.payload.value
        },
        setSort : (state, action: PayloadAction<{value: GetStreamersSortParameter}>) => {
            state.sort = action.payload.value
        }
    }
})

export default StreamerSearchParamsSlice.reducer
export const {setSearch, setSort} = StreamerSearchParamsSlice.actions