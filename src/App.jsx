import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Collection from "./components/collection";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar title="My-Photos" />;
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/collection" element={<Collection title="Collection" />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Home />
      <Collection title="Collection" />
      <About contact={<Contact />} />
    </>
  );
}

export default App;
