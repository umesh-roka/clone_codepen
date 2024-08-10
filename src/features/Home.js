import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../ui/Sidebar';
import NotUserHome from './NotuserHome';
import UserHome from './UserHome';

const Home = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const{user} = useSelector((state)=>state.userSlice);
  return (
    <div className='flex'>
      {user === null ?'':<Sidebar expanded={sidebarExpanded} toggleSidebar={toggleSidebar}  />}
     
      <div>
      {user === null ? <NotUserHome sidebarExpanded={sidebarExpanded} />:<UserHome sidebarExpanded={sidebarExpanded}/>}
      </div>
    </div>
  )
}

export default Home
