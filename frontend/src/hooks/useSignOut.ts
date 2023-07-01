
import { useAppDispatch } from "../redux/store"
import { AuthSlice } from "../redux/features/authSlice"

export const useSignOut = () => {
    const dispatch = useAppDispatch()

    const signOut = () => {
        localStorage.removeItem("token")
        dispatch(AuthSlice.actions.setSignedIn(false))
    }


    return {
        signOut
    }
}