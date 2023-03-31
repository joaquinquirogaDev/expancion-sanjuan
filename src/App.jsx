import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import HomeCitizen from './Pages/HomeCitizen/HomeCitizen';
import Admin from './Pages/Admin/Admin';
function App() {

  return (
      <Router>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/home-citizen' exact element={<HomeCitizen/>}/>
          <Route path='/admin' exact element={<Admin/>}/>

        </Routes>
        <Footer />
      </Router>
  )
}

export default App
