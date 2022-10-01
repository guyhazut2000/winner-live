import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  data: {
    name: String,
    email: String,
    isOnline: Boolean,
  };
  isFetching: Boolean;
  error: Boolean;
}

const initialState: UserState = {
  data: {
    name: "",
    email: "",
    isOnline: false,
  },
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.isFetching = true;
    },
    logoutSuccess: (state, action) => {
      state.isFetching = false;
      state.data = initialState.data;
      state.error = false;
    },
    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    resetUsersData: (state) => {
      state.data = initialState.data;
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutFailure,
  logoutSuccess,
  resetUsersData,
} = userSlice.actions;
export default userSlice.reducer;
