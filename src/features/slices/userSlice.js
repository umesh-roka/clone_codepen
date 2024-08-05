import { createSlice } from "@reduxjs/toolkit";
import { addUserToLocal, celarFormLocal, getUserFromLocal } from "../shared/localstorage";


export const userSlice = createSlice({
  name:'userSlice',
  initialState:{
    user:getUserFromLocal()
  },
  reducers:{
addUser:(state,action)=>{
state.user = action.payload;
addUserToLocal(state.user);
},
userLogout:(state,action)=>{
  state.user = null;
  celarFormLocal();
}
  }
});

export const {addUser,userLogout} = userSlice.actions;