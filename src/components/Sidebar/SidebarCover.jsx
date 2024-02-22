import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../Icons";
import { setSidebar } from "../../stores/playerSlice";

function SidebarCover() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.player.current);

  return (
    <div className="pt-[100%] relative bg-black">
      <img
        className="w-full h-full object-cover absolute top-0 left-0 group"
        src={current.img}
        alt=""
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="2-h h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] -rotate-90 rounded-full absolute top-1 right-1 flex items-center justify-center"
      >
        <Icon name="arrowLeft" size={16} />
      </button>
    </div>
  );
}

export default SidebarCover;
