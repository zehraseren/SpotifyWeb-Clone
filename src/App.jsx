import "./App.css";
import Content from "./components/Content";
import PlayerBar from "./components/PlayerBar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <PlayerBar />
    </Router>
  );
}

export default App;
