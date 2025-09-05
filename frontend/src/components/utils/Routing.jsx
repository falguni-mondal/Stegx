import { Route, Routes } from 'react-router-dom'
import HomeTemp from '../pages/home/HomeTemp.jsx'
import Docs from '../pages/docs/Docs.jsx'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeTemp />} />
        <Route path='/docs' element={<Docs />} />
    </Routes>
  )
}

export default Routing