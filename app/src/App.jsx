import {BrowserRouter as Router, Routes,Route}from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navigation from './pages/Navigation'
import NavBar from './components/NavBar'
import RegisterVehicle from './pages/RegisterVessel'
import StartNavigationForVessel from './pages/StartNavigationForVessel'

function App() {
  

  return (
   <Router>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register-vessel' element={<RegisterVehicle/>}/>
      <Route path='/start-navigation' element={<Navigation/>}/>
      <Route path='/start-navigation-for-vessel' element={<StartNavigationForVessel/>}/>
    </Routes>
   </Router>
  )
}

export default App
