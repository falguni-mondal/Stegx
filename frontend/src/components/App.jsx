import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Routing from './utils/Routing'
import MobileNavMenu from './navbar/MobileNavMenu'

const App = () => {
  const [navReveal, setNavReveal] = useState(false);
  const navRevealer = () => {
    setNavReveal(prev => !prev);
  }
  return (
    <div className='main-container w-full relative'>
      <Navbar navReveal={navReveal} navRevealer={navRevealer} />
      <MobileNavMenu navReveal={navReveal} />
      <main className='w-full min-h-[100dvh] backdrop-blur-[100px] lg:bg-[#00000028]'>
        <Routing />
      </main>
    </div>
  )
}

export default App