import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Loading from "./components/Loading";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      {/* <Landing></Landing> */}
      {/* <Loading></Loading> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Loading}></Route>
          <Route path="/Landing" Component={Landing}></Route>
          <Route path="/Intro" Component={Intro}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
