const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  role: "",
  email: "",
  name: "",
  filter: {
    sortby: "",
    game: "",
    status: "",
  },
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
    setFilter: (state, { payload }) => {
      console.log(payload);

      state.filter = payload;
    },
  },

  extraReducers: () => {},
});

export const { setProfile, setFilter } = userSlice.actions;

export default userSlice.reducer;
