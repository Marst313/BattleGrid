const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  role: "",
  email: "",
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setProfile: (state, { payload }) => {
      state.role = payload.role;
      state.email = payload.email;
      state.name = payload.name;
    },
  },

  extraReducers: () => {},
});

export const { setProfile } = userSlice.actions;

export default userSlice.reducer;
