import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const MobileNavMenu = ({navReveal, navRevealer}) => {

    return (
        <div className={`fixed lg:hidden top-0 left-0 h-[100dvh] w-[100.2vw] bg-[#000] ${navReveal ? "" : "translate-x-[100%]"} transition-all duration-700 ease-in-out z-[998]`} id="mobile-nav-menu">
            <nav className="menu-wrapper text-zinc-300 border-r border-[#504e75fb]">
                <ul className="menu-container pl-10 pt-10">
                    <li className={`menu-item-container flex gap-2 items-center py-1`}>
                        <Link onClick={navRevealer} to="/" className={`hover:text-[#938bff] mobile-nav-link`}>Home</Link>
                    </li>
                    <li className={`menu-item-container flex gap-2 items-center py-1`}>
                        <Link onClick={navRevealer} to="/docs" className={`hover:text-[#938bff] mobile-nav-link`}>Docs</Link>
                    </li>
                    <li className={`menu-item-container flex gap-2 items-center py-1`}>
                        <a onClick={navRevealer} href="mailto:connect.stegx@gmail.com?subject=Amazed by Stegx&body=From Stegx Webapp" target='_blank' className={`hover:text-[#938bff] mobile-nav-link`}>Connect</a>
                    </li>
                    <li className={`menu-item-container flex gap-2 items-center py-1`}>
                        <a onClick={navRevealer} href="https://github.com/falguni-mondal/Stegx" target='_blank' className={`hover:text-[#938bff] mobile-nav-link`}>GitHub</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNavMenu