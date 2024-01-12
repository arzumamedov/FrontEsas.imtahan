import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Mainlayout from './layouts/Mainlayout'
import Addpage from './pages/Addpage'
import Homepage from './pages/Homepage'
import Detail from './pages/detail'

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Mainlayout />}>
            <Route index element={<Homepage />} />
            <Route path='/add' element={<Addpage />} />
            <Route path='/detail/:id' element={<Detail />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
