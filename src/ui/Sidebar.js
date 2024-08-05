import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = ({ expanded, toggleSidebar }) => {
const {user} = useSelector((state)=>state.userSlice);
 return(
  
  <aside className={` bg-gray-900 text-white transition-all ${expanded ? "w-[200px]" : "w-10"}`}>
    <div className="flex justify-end p-2">
      <button onClick={toggleSidebar}>
        {expanded ? <ChevronLeftIcon className="w-6 h-6" /> : <ChevronRightIcon className="w-6 h-6 fixed" />}
      </button>
    </div>
    <div className={`overflow-hidden transition-all ${expanded ? "block" : "hidden"}`}>
     {user === null ?  <nav className=' pl-3'>
        <ul>
          <button className=' border-2  hover:animate-rainbow bg-blue-gray-900 rounded-lg px-3 py-2 text-xl'>
          <NavLink  to='/compiler'>Start Coading</NavLink>
          </button>
          

          <NavLink><li className="p-2 text-xl pt-6">Search Pen</li>
          </NavLink>
          <NavLink><li className="p-2 text-xl">Challanges</li>
          </NavLink>
          <NavLink><li className="p-2 text-xl">Spark</li></NavLink>
          <NavLink><li className="p-2 text-xl">CodePen Pro</li></NavLink>
          
          


        </ul>
      </nav> : 
      <nav className=' pl-3'>
        <ul>
          
        <button className=' border-2  hover:animate-rainbow bg-blue-gray-900 rounded-lg px-3 py-2 text-xl'>
          <NavLink  to='/compiler'>Start Coading</NavLink>
          </button>        
          <li className="p-2">Your Work</li>
          <li className="p-2">Activity</li> 
          <li className="p-2">Assets</li> 
          <li className="p-2">Challenges</li> 
          <li className="p-2">Spark</li> 
          <li className="p-2">CodePen Pro</li> 

        </ul>
      </nav>}
    </div>
  </aside>
)};

export default Sidebar;
