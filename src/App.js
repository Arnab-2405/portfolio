import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Loading from "./components/Loading";
import Intro from "./components/Intro";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading></Loading>}></Route>
          <Route path="/Landing" element={<Landing></Landing>}></Route>
          <Route path="/Intro" element={<Intro></Intro>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
