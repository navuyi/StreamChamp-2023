import { Routes, BrowserRouter , Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import StreamerForm from "./views/StreamerForm/StreamerForm";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <> 
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<StreamerForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;