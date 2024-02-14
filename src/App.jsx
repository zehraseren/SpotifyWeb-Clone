import "./App.css";
import Content from "./components/Content";
import PlayerBar from "./components/PlayerBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <PlayerBar />
    </>
  );
}

export default App;
