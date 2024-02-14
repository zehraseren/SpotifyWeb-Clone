import { Icon } from "../../Icons";

function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <a
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-white rounded hover:text-white px-4 bg-active"
            href=""
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
            href=""
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
            href=""
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplık
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
