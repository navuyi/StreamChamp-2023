import { configureStore } from "@reduxjs/toolkit";
import { StreamerFormSlice } from "./features/streamerFormSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AuthSlice } from "./features/authSlice";
import { ModalSlice } from "./features/modalSlice";
import { StreamersSlice } from "./features/streamersSlice";

export const store = configureStore({
    reducer: {
        streamerForm: StreamerFormSlice.reducer,
        auth: AuthSlice.reducer,
        modal: ModalSlice.reducer,
        streamers: StreamersSlice.reducer
    }
})

export const useAppDispatch : () => typeof store.dispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector