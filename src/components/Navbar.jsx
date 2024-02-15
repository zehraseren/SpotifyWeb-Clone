import Navigation from "./Navbar/Navigation";
import Profile from "./Navbar/Profile";

function Navbar() {
  return (
    <div className="h-[3.75rem] flex items-center justify-between px-2">
      <Navigation />
      <Profile />
    </div>
  );
}

export default Navbar;
