import { Routes, BrowserRouter , Route} from "react-router-dom";
import Landing from "./views/Landing/Landing";
import StreamerForm from "./views/StreamerForm/StreamerForm";
import Navbar from "./components/Navbar/Navbar";
import StreamerSearch from "./views/StreamerSearch/StreamerSearch";
const App = () => {

  
  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/streamer/create" element={<StreamerForm />} />
          <Route path="/streamer/search" element={<StreamerSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;