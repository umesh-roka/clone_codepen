
import React, { useState } from "react";
import { useLocation, useMatch} from 'react-router-dom';

import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Collapse,
  Input,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams,} from "react-router";
import { userLogout } from "../features/slices/userSlice";
import { NavLink } from "react-router-dom";
import { useGetCodeByIdQuery } from "../features/Api/codeApi";

const userProfile = [
  { label: "My Profile", icon: UserCircleIcon, value: 'profile' },
  { label: "Sign Out", icon: PowerIcon, value: 'logout' },
];

const adminProfile = [
  { label: "My Profile", icon: UserCircleIcon, value: 'profile' },
  { label: "Edit Profile", icon: Cog6ToothIcon, value: 'setting' },
  { label: "Sign Out", icon: PowerIcon, value: 'logout' },
];

function ProfileMenu({ user }) {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const menuitems = user.isAdmin ? adminProfile : userProfile;

  const handleClick = (val) => {
    switch (val) {
      case 'profile':
        break;
      case 'products':
        nav('/allProducts');
        break;
      case 'logout':
        dispatch(userLogout());
        break;
      default:
    }
    closeMenu();
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="User Avatar"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {menuitems.map(({ label, icon, value }, key) => {
          const isLastItem = key === menuitems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => handleClick(value)}
              className={`flex items-center gap-2 rounded ${isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""}`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export const Navlist = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  const isCompilerPage = location.pathname === '/compiler';

  return (
    <div className="flex gap-2">
      {!isSignupPage && (
        <NavLink to="/signup">
          <button className="bg-green-400 px-3 py-2 rounded-lg">Signup</button>
        </NavLink>
      )}
      {!isLoginPage && (
        <NavLink to="/login">
          <button className="bg-gray-700 px-4 py-2 rounded-lg">Login</button>
        </NavLink>
      )}
      {isCompilerPage && (
        <NavLink to="/login">
          <button className="bg-gray-700 px-4 py-2 rounded-lg">Save</button>
        </NavLink>
      )}
    </div>
  );
};

const Header = ({ CodeEditorRef,compilerRef, title, setTitle,updatetitle,setUpdateTitle }) => {
  const location = useLocation();
  const isCompilerPage = location.pathname === '/compiler';
  const match = useMatch('/codedit/:id');
  const isCodeEditorPage = !!match;


 const{id} = useParams();
 const{data} = useGetCodeByIdQuery(id);

 
  const { user } = useSelector((state) => state.userSlice);
// updatetitle
  const [Editing, setEditing] = useState(false);
 

  const togglEditing = () => setEditing(!isEditing);


//settitle

  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => setIsEditing(!isEditing);


  

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  const handleSave = () => {
    if (compilerRef.current) {
      compilerRef.current.handleSave();
    }
  };

  const handleUpdate =()=>{
    if(CodeEditorRef.current){
      CodeEditorRef.current.handleUpdate();
    }
  }


  return (
    <Navbar className="bg-gray-900 rounded-none sm:w-[370px] overflow-hidden border-black text-white">
      <div className="relative mx-auto flex items-center justify-between">
        <div className="flex gap-4">
          {!isCodeEditorPage && !isCompilerPage && (
            <Typography
            as="a"
            href="#"
            className="font-bold lg:text-2xl sm:text-sm  uppercase"
          >
            Codepen Clone
          </Typography>
          )}
          

          {isCompilerPage && (
            <div className="flex items-center gap-3">
              {isEditing ? (
                <Input
                  className="text-white"
                  variant="standard"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <span className="text-xl">{title|| 'Untitled Project'}</span>
              )}
              <PencilIcon
                className="h-6 w-6 cursor-pointer mr-2 sm:mr-[90px]"
                onClick={toggleEditing}
              />
             
            </div>
          )}


          {isCodeEditorPage && (
            <div className="flex items-center gap-3">
              {Editing ? (
                <Input
                  className="text-white "
                  variant="standard"
                  value={updatetitle}
                  onChange={(e) => setUpdateTitle(e.target.value)}
                />
              ) : (
                <span className="text-xl">{data?.data?.title || 'Untitled Project'}</span>
              )}
              <PencilIcon
                className="h-6 w-6 cursor-pointer mr-2"
                onClick={togglEditing}
              />
            </div>
          )}
        </div>

       
        {user === null ? <Navlist /> : <div className="flex gap-4">
           {isCompilerPage && <button
                onClick={handleSave}
                className="bg-gray-700 px-4 py-2 rounded-lg">
                Save </button>
              
}

      { isCodeEditorPage &&  
            <button
          onClick={handleUpdate}
                className="bg-gray-700 px-4 py-2 rounded-lg">
                Save </button>}
              <ProfileMenu user={user} /> </div> }
      </div>
      
      <Collapse open={isNavOpen} className="overflow-scroll"></Collapse>
    </Navbar>
  );
};

export default Header;
