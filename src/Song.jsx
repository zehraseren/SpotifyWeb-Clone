/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Icon } from "./Icons";

function Song({ item }) {
  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-lg";
      default:
        return "rounded";
    }
  };

  return (
    <div>
      <NavLink
        className="bg-footer p-4 rounded hover:bg-active group"
        to="/"
        key={item.id}
      >
        <div className="pt-[100%] relative mb-4">
          <img
            className={`absolute inset-0 object-cover w-full h-full ${imageStyle(
              item
            )}`}
            src={item.img}
            alt=""
          />
          <button className="w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center hidden group-hover:flex group-focus:flex">
            <Icon name="play" size={16} />
          </button>
        </div>
        <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
          {item.title}
        </h6>
        <p className="line-clamp-2 text-link text-sm mt-1">
          {item.description}
        </p>
      </NavLink>
    </div>
  );
}

export default Song;
