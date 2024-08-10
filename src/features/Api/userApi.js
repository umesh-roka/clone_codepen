import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { userUrl } from '../../Constant/constant';



export const userApi = createApi({
  reducerPath:'userApi',
  baseQuery:fetchBaseQuery({
    baseUrl:userUrl,
    // credentials:'include'
  }),

  
  endpoints:(builder)=>({

    userLogin:builder.mutation({
      query:(query)=>({
        url:'/login',
        body:query,
        method:'POST'
      })
    }),


    userSignup:builder.mutation({
      query:(query)=>({
        url:'/signup',
        body:query,
        method:'POST'
      })
    }),

  
  }),
});

export const { useUserSignupMutation, useUserLoginMutation } = userApi;


