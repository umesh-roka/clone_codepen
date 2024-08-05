// services/codeApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { codeUrl } from '../../Constant/constant';

export const codeApi = createApi({
  reducerPath: 'codeApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl:codeUrl }),

  endpoints: (builder) => ({
    saveCode: builder.mutation({
      query: (query) => ({
        url: '/',
        method: 'POST',
        body: query.body,
        headers:{
        Authorization:query.token
        }
      }),
      invalidatesTags: ['code']

    }),
    

   getByUser:builder.query({
query:(query)=>({
url:'/usercode',
method:'GET',
params:{
page:query?.page,
},
headers:{
  Authorization:query.token,
}
}),
providesTags:['code'],

   }),
  
getCodeById:builder.query({
query:(query)=>({
url:`/${query}`,
method:'GET'
}),
providesTags:['code'],
}),




updateCode: builder.mutation({
  query: (query) => ({
    url: `/${query.id}`,
    method: 'PATCH',
    body: query.body,
    headers:{
    Authorization:query.token
    }
  }),
  invalidatesTags: ['code']

}),

getAllCode:builder.query({
  query:(query)=>({
  url:'/',
  method:'GET',
  params:{
  page:query?.page,
  },
  }),
  providesTags:['code'],
  
     }),
    

     removeCode:builder.mutation({
      query:(query)=>({
        url:`/${query.id}`,
        method:'DELETE',
        headers:{
          Authorization:query.token,
        }
      }),
      invalidatesTags:['code'],
     })

  }),
 
});

export const { useSaveCodeMutation, useGetByUserQuery,useGetCodeByIdQuery,useUpdateCodeMutation,useGetAllCodeQuery,useRemoveCodeMutation } = codeApi;
