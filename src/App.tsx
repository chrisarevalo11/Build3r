import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Create from "./pages/Create";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:profileId" element={<></>} />
          <Route path="/create" element={<Create />} />
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
