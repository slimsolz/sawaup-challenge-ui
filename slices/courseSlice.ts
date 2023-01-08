import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICourseState, PageDetailsType, ParamsType } from "./../utils/types";
import courseServices from "../services/course.services";

const initialState: ICourseState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  courses: {
    courses: [],
    pageDetails: {
      page: 1,
      perPage: 3,
      totalCount: 1,
      totalPage: 1,
    },
  },
  isSkillLoading: false,
  isSkillSuccess: false,
  isSkillError: false,
  skillsCourses: {
    courses: [],
    pageDetails: {
      page: 1,
      perPage: 3,
      totalCount: 1,
      totalPage: 1,
    },
  },
};

export const getAllCourses = createAsyncThunk(
  "/courses",
  async (query: PageDetailsType, thunkAPI: any) => {
    try {
      return await courseServices.getAllCourses(query);
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

export const getAllCoursesBasedOnSkills = createAsyncThunk(
  "/skills-courses",
  async (query: ParamsType, thunkAPI: any) => {
    try {
      return await courseServices.getAllCourses(query);
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

export const toggleLikesCourses = createAsyncThunk(
  "/like-courses",
  async (query: PageDetailsType, thunkAPI: any) => {
    try {
      return await courseServices.getAllCourses(query);
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

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses = action.payload;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
        state.courses.courses = [];
      })
      .addCase(getAllCoursesBasedOnSkills.pending, (state) => {
        state.isSkillLoading = true;
      })
      .addCase(getAllCoursesBasedOnSkills.fulfilled, (state, action) => {
        state.isSkillLoading = false;
        state.isSkillSuccess = true;
        state.skillsCourses = action.payload;
      })
      .addCase(getAllCoursesBasedOnSkills.rejected, (state, action) => {
        state.isSkillLoading = false;
        state.isSkillSuccess = false;
        state.isSkillError = true;
        state.skillsCourses.courses = [];
      });
  },
});

export const { reset } = courseSlice.actions;
export default courseSlice.reducer;
