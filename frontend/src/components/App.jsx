import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
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
      <main className='w-full min-h-[100dvh]'>
        <Routing />
      </main>
    </div>
  )
}

export default App