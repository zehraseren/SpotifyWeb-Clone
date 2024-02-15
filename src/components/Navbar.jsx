import Navigation from "./Navbar/Navigation";
import { Routes, Route } from "react-router-dom";
import Profile from "./Navbar/Profile";

function Navbar() {
  return (
    <div className="h-[3.75rem] flex items-center justify-between px-2">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<h2>Ana sayfa</h2>} />
        <Route path="/search" element={<h2>Arama</h2>} />
        <Route path="/collection" element={<h2>Kitaplık</h2>} />
      </Routes>
      <Profile />
    </div>
  );
}

export default Navbar;
