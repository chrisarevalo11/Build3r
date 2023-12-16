import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>}>
            <Route path=":profileId" element={<></>} />
          </Route>
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
