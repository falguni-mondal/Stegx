import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Docs from '../pages/docs/Docs'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docs' element={<Docs />} />
    </Routes>
  )
}

export default Routing