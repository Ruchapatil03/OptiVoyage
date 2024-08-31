import { useLocation } from "react-router-dom"
import NavBar from "../components/NavBar";
export default function StartNavigationForVessel() {
    const location = useLocation();
  const { registration_number, vessel_name } = location.state || {}; // Default to {} if no state is provided
  
    return(

        <div className="hero-container min-h-screen flex flex-col ">
        <NavBar/>

        
        
        </div>
    
   
    )
    
}