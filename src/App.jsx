import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' exact element={<Login/>}/>

        </Routes>
      </Router>
  )
}

export default App
