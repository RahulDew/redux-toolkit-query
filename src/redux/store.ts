import { configureStore } from "@reduxjs/toolkit";
import { MyApi } from "./api";
import { myReducers } from "./reducers";

export const store = configureStore({
  reducer: {
    [MyApi.reducerPath]: MyApi.reducer,
    [myReducers.name]: myReducers.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MyApi.middleware),
});
