import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/HomePages/NavBar";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <HashRouter>
      <div
        className="App h-screen w-screen flex flex-col justify-start md:justify-center md:p-10
       bg-gradient-to-tr from-black to-spheronBlue"
      >
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
