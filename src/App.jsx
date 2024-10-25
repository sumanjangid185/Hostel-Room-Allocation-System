import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

import Home from './pages/Dahboard'
import FormComponent from './pages/InputDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/add' element={<FormComponent></FormComponent>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
