import Menu from "./Sidebar/Menu";
import { Icon } from "../Icons";
import Playlists from "./Sidebar/Playlists";
import DownloadApp from "./Sidebar/DownloadApp";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";

function Sidebar() {
  const sidebar = useSelector((state) => state.sidebar);

  return (
    <aside className="w-60 pt-6 flex flex-col flex-shrink-0 bg-black">
      <a className="mb-7 px-6">
        <img src="/src/assets/logo.svg" alt="" className="h-9" />
      </a>

      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <a
              href=""
              className="py-2 px-6 items-center flex text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href=""
              className="py-2 px-6 items-center flex text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 to-blue-300 text-white rounded-sm opacity-60 group-hover:opacity-100">
                <Icon name="heart" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <Playlists />

      <DownloadApp />

      {sidebar && <SidebarCover />}
    </aside>
  );
}

export default Sidebar;
