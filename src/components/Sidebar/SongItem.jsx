/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function SongItem({ title, more = false, items }) {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight">
          {title}
        </h3>
        {more && (
          <NavLink
            className="text-xs font-semibold uppercase text-link hover:underline"
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <NavLink className="bg-footer p-4 rounded" to="/" key={item.id}>
            <div className="pt-[100%] relative">
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src={item.img}
                alt=""
              />
            </div>
            {item.title}
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default SongItem;
