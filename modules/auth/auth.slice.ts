import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_TOKEN_KEY } from "@/constants/auth";

interface IInitialState {
  isLoggedIn: boolean;
}

const initialState: IInitialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken(state, action: PayloadAction<string>) {
      localStorage.setItem(USER_TOKEN_KEY, action.payload);
      state.isLoggedIn = true;
    },

    checkSession(state) {
      const token = localStorage.getItem(USER_TOKEN_KEY);
      state.isLoggedIn = !!token;
    },

    removeToken(state) {
      localStorage.removeItem(USER_TOKEN_KEY);
      state.isLoggedIn = false;
    },
  },
});

export const { saveToken, removeToken, checkSession } = authSlice.actions;

export default authSlice.reducer;
