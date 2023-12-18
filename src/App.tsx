import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar/Navbar";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:profileId" element={<></>} />
          <Route path="/create" element={<></>} />
          <Route path="/explore" element={<></>}>
            <Route path="projects/:projectId" element={<></>} />
            <Route path="hypercerts/:hypercertId" element={<></>} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
