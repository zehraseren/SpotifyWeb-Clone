import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../stores/playerStore";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
