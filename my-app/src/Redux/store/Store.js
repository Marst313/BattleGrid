import { configureStore } from "@reduxjs/toolkit";
import user from "../features/users/userSlice";
import tourney from "@/Redux/features/tourney/tourneySlice";

const store = configureStore({
  reducer: {
    user,
    tourney,
  },
});

export default store;
