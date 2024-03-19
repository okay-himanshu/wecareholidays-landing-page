import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Navbar } from "../components";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
