import { configureStore } from "@reduxjs/toolkit";
import { StreamerFormSlice } from "./features/streamerFormSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        streamerForm: StreamerFormSlice.reducer
    }
})

export const useAppDispatch : () => typeof store.dispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector