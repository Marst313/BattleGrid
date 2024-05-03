import { createAxiosInstance, customFetchTourney } from "@/utils/axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  dataTourney: [],
  singleTourney: [],
};

const singleTourThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchTourney.get(`/${data}`);

    console.log(resp);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const getSingleTourney = createAsyncThunk(
  "singleTourney",
  singleTourThunk,
);

const tourneySlice = createSlice({
  name: "tourney",
  initialState,

  reducers: {
    setData: (state, { payload }) => {
      state.dataTourney = payload.data;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getSingleTourney.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleTourney.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getSingleTourney.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { setData } = tourneySlice.actions;

export default tourneySlice.reducer;
