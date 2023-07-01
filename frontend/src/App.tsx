import { Routes, BrowserRouter , Route} from "react-router-dom";
import Landing from "./views/Landing/Landing";
import StreamerForm from "./views/StreamerForm/StreamerForm";
import Navbar from "./components/Navbar/Navbar";
import StreamerSearch from "./views/StreamerSearch/StreamerSearch";
import StreamerDetails from "./views/StreamerDetails/StreamerDetails";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store";
import { AuthSlice, setSignedIn } from "./redux/features/authSlice";
import ProtectedRoute from "./utils/ProtectedRoute";
import Modal from "./components/Modal";
const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token) dispatch(setSignedIn(false));
    else dispatch(AuthSlice.actions.setSignedIn(true))
  }, [])

  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Modal />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/streamer/create" element={<ProtectedRoute path="/streamer/create" component={StreamerForm}/>} />
          <Route path="/streamer/search" element={<StreamerSearch />} />
          <Route path="/streamer/:id" element={<StreamerDetails />} />

          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;