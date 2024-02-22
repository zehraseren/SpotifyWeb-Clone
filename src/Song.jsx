/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Icon } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "./stores/playerSlice";

function Song({ item }) {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

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

  const updateCurrent = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else dispatch(setCurrent(item));
  };

  const isCurrentItem = current?.id === item.id && playing;

  return (
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
        <button
          onClick={updateCurrent}
          className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center group-hover:flex group-focus:flex ${
            !isCurrentItem ? "hidden" : "flex"
          }`}
        >
          <Icon name={isCurrentItem ? "pause" : "play"} size={16} />
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item.title}
      </h6>
      <p className="line-clamp-2 text-link text-sm mt-1">{item.description}</p>
    </NavLink>
  );
}

export default Song;
