import Navigation from "./Navbar/Navigation";
import { useResolvedPath } from "react-router-dom";
import Profile from "./Navbar/Profile";
import Search from "./Navbar/Search";

function Navbar() {
  const searchRoute = useResolvedPath("/search");
  return (
    <div className="h-[3.75rem] flex items-center justify-between px-2">
      <Navigation />
      {searchRoute && <Search />}
      <Profile />
    </div>
  );
}

export default Navbar;
