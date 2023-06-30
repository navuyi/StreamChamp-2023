import { configureStore } from "@reduxjs/toolkit";
import { StreamerFormSlice } from "./features/streamerFormSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { StreamerSearchParamsSlice } from "./features/streamerSearchParams";
import { AuthSlice } from "./features/authSlice";
import { ModalSlice } from "./features/modalSlice";

export const store = configureStore({
    reducer: {
        streamerForm: StreamerFormSlice.reducer,
        searchParams: StreamerSearchParamsSlice.reducer,
        auth: AuthSlice.reducer,
        modal: ModalSlice.reducer
    }
})

export const useAppDispatch : () => typeof store.dispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector