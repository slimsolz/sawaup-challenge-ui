import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IState } from "./../utils/types";
import skillServices from "../services/skills.services";

const initialState: IState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  skills: [],
};

export const getAllSkills = createAsyncThunk(
  "/skills",
  async (_: void, thunkAPI: any) => {
    try {
      return await skillServices.getAllSkills();
    } catch (error: any) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSkills.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSkills.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.skills = action.payload;
      })
      .addCase(getAllSkills.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload as string;
        state.skills = [];
      });
  },
});

export const { reset } = skillsSlice.actions;
export default skillsSlice.reducer;
