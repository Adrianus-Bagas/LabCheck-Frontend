import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/Auth";

const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

export default store;
