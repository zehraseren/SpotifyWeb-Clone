import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";
import Collection from "../views/Collection";

function Content() {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </main>
  );
}

export default Content;
