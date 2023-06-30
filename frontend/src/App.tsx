import { Routes, BrowserRouter , Route} from "react-router-dom";
import Landing from "./views/Landing/Landing";
import StreamerForm from "./views/StreamerForm/StreamerForm";
import Navbar from "./components/Navbar/Navbar";
import StreamerSearch from "./views/StreamerSearch/StreamerSearch";
import StreamerDetails from "./views/StreamerDetails/StreamerDetails";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
const App = () => {

  
  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/streamer/create" element={<StreamerForm />} />
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