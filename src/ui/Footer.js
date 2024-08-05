import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black text-white pt-[60px] h-[200px]'>
    <div className='mx-[150px]'>
    <div className='flex gap-3 '>
    <h1 className='font-bold'>CodePen</h1>
    <NavLink>About</NavLink>
    <NavLink>Blog</NavLink>
    <NavLink>Podcast</NavLink>
    <NavLink>Documentation</NavLink>
    <NavLink>Support</NavLink>
    <NavLink>Advertise</NavLink>
  
    </div>
  
  
    <div className='flex gap-3 '>
    <h1 className='font-bold'>For</h1>
    <NavLink>Teams</NavLink>
    <NavLink>Education</NavLink>
    <NavLink>Privacy</NavLink>
    <NavLink>Embedsasset</NavLink>
    <NavLink>Hosting</NavLink>
    </div>
  
    <div className='flex gap-3 '>
    <h1 className='font-bold'>Social</h1>
    <NavLink>YouTube</NavLink>
    <NavLink>Instagram</NavLink>
    <NavLink>Mastodon</NavLink>
    <NavLink>Facebook</NavLink>
    </div>
  
    <div className='flex gap-3 '>
    <h1 className='font-bold'>Community</h1>
    <NavLink>Spark</NavLink>
    <NavLink>Challenges</NavLink>
    <NavLink>Topics</NavLink>
    <NavLink>Code of Conduct</NavLink>
    </div>
  
  </div>
  </div>
  )
}

export default Footer
