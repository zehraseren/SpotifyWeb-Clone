/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Icon } from "../Icons";
import { secondsToTime } from "../utils";
import CustomRange from "./CustomRange";

function FullScreenPlayer({ toggle, state, controls, volumeIcon }) {
  const { current } = useSelector((state) => state.player);

  return (
    <div
      className="h-full relative"
      onClick={controls[state?.playing ? "pause" : "play"]}
    >
      <div
        className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30"
        style={{ backgroundImage: `url(${current.img})` }}
      />
      <div className="absolute top-8 left-8 gap-x-4 text-white flex items-center opacity-70">
        <Icon name="logo" size={34} />
        <div className="text-xs">
          <p style={{ fontSize: 11 }}>PLAYLIST OYNATILIYOR</p>
          <h3 className="font-semibold mt-0.5">{current.title}</h3>
        </div>
      </div>
      <div className="absolute bottom-36 left-8 gap-x-5 flex items-center">
        <img className="w-24 h-24 object-cover" src={current.img} alt="" />
        <div className="self-end">
          <h3 className="text-3xl font-bold">{current.title}</h3>
          <p className="text-sm font-medium opacity-50">
            {current.description}
          </p>
        </div>
      </div>
      <div
        className="w-full absolute px-8 bottom-4 flex flex-col items-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-full flex items-center mb-1.5 gap-x-2">
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="shuffle" size={24} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerPrev" size={24} />
          </button>
          <button
            className="w-16 h-16 flex items-center justify-center text-black bg-white rounded-full hover:scale-[1.06]"
            onClick={controls[state?.playing ? "pause" : "play"]}
          >
            <Icon name={state?.playing ? "pause" : "play"} size={24} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerNext" size={24} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="repeat" size={24} />
          </button>
        </div>
        <div className="flex items-center absolute bottom-3 right-6 gap-x-3">
          <button
            onClick={controls[state.muted ? "unmute" : "mute"]}
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
          >
            <Icon size={16} name={volumeIcon} />
          </button>
          <div className="w-[5.813rem] max-w-full">
            <CustomRange
              step={0.01}
              min={0}
              max={1}
              value={state.muted ? 0 : state?.volume}
              onChange={(value) => {
                controls.unmute(), controls.volume(value);
              }}
            />
          </div>
          <button
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
            onClick={toggle}
          >
            <Icon size={24} name="fullScreenOff" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FullScreenPlayer;
