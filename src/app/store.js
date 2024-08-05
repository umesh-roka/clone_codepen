import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/Api/userApi";
import { userSlice } from "../features/slices/userSlice";
import { codeApi } from "../features/Api/codeApi";




export const store = configureStore({
  reducer:{
    [userSlice.name]:userSlice.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [codeApi.reducerPath]:codeApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    userApi.middleware,
    codeApi.middleware,
 ])
})