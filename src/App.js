import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import FarmerProfile from './components/FarmerProfile';
import Cooperative from './Cooperative';
import Farmer from './Farmer';

function App() {
  return (
    <>
   <div>
    <Router>
   <Navbar/>
   
   <Routes>
   <Route exact path="/" element={<Home/>}/>
   <Route exact path="/cooperative" element={<Cooperative/>}/>
   <Route exact path="/farmer" element={<Farmer/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/farmerprofile" element={<FarmerProfile name='jkj'/>}/>
      
        </Routes>
       
   
   
        </Router>
   </div>
   </>
  );
}

export default App;
