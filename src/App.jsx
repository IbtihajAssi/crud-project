import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Index from './component/index/Index'
import Createusers from './component/createusers/Createusers'
import Details from './component/details/Details'
import Edit from './component/edit/Edit'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/index' element={<Index/>} />
      <Route path='/createusers' element={<Createusers/>} />
      <Route path='/:id' element={<Details/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path='*' element={<h2>Page not Found</h2>} />
    </Routes>
  )
}

export default App