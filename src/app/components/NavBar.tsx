"use client";
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
const navLinks = [
    {
        title:"About",
        path:"#about"
    },
    {
        title:"Projects",
        path: "#projects"
    },
    {
        title:"Contact",
        path: "#contact"
    }
]
const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    return(
        <nav className="fixed  border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className={'flex container lg:py-4 flex-wrap items-center justify-end mx-auto w-[95%] px-4 py-2'}>
            {/* <Link href={"/"}></Link> */}
            <div className="mobile-menu block md:hidden">
                {navBarOpen ?
                    <button onClick={()=>setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white'><XMarkIcon className="h-5 w-5"/></button>
                    :
                    <button onClick={()=>setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white'><Bars3Icon className="h-5 w-5"/></button>
            }
            </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className="flex p-4 lg:p-0 sm:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index)=>(
                            <li key={index}>
                                <NavLink href={link.path}  title={link.title}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navBarOpen? <MenuOverlay links={navLinks}/>: null}
        </nav>
    )
}

export default NavBar