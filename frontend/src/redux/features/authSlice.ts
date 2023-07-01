import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"



export interface auth {
    signedIn: boolean
}

const initialState : auth = {
    signedIn: true
}

export const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setSignedIn: (state, action: PayloadAction<boolean>) => {
            state.signedIn = action.payload
        }
    }
})


export default AuthSlice.reducer
export const {setSignedIn} = AuthSlice.actions