import { configureStore } from "@reduxjs/toolkit";
import user from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    user,
  },
});

export default store;
