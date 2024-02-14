import Menu from "./Sidebar/Menu";

function Sidebar() {
  return (
    <div className="w-60 py-6 flex flex-col">
      <a className="mb-7 px-6">
        <img src="/src/assets/logo.svg" alt="" className="h-9" />
      </a>
      <Menu />
    </div>
  );
}

export default Sidebar;
