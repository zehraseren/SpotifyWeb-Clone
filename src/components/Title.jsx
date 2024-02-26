/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Title({ title, more = false }) {
  return (
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
  );
}

export default Title;
