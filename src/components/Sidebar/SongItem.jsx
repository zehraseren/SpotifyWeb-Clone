/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Song from "../Song";

function SongItem({ title, more = false, items }) {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <NavLink to={more ?? "#"}>
          <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">
            {title}
          </h3>
        </NavLink>
        {more && (
          <NavLink
            className="text-xs font-semibold uppercase text-link hover:underline tracking-wider"
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <Song item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default SongItem;
