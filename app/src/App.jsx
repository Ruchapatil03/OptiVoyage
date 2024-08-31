import {BrowserRouter as Router, Routes,Route}from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navigation from './pages/Navigation'
import NavBar from './components/NavBar'
import RegisterVehicle from './pages/RegisterVessel'
import StartNavigationForVessel from './pages/StartNavigationForVessel'
import Details from './pages/details'
import ShowReport from './pages/report'

function App() {
  

  return (
   <Router>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register-vessel' element={<RegisterVehicle/>}/>
      <Route path='/start-navigation' element={<Navigation/>}/>
      <Route path='/start-navigation-for-vessel' element={<StartNavigationForVessel/>}/>
      <Route path='/vessel-assessment-reports' element={<ShowReport/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
   </Router>
  )
}

export default App
