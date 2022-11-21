
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Signin from "./Components/Registration/Signin"
import Login  from "./Components/Registration/Login";
import Otp  from "./Components/Registration/Otp";
import Dashborad  from "./Components/Registration/Dashborad";
import Forget  from "./Components/Registration/Forget";
import Changepassword from "./Components/Registration/Changepassword";
import Borad from "./Dashborad/Borad"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Signin />} ></Route>
          <Route path='/Login' element={ <Login />} ></Route>
          <Route path='/Otp' element={ <Otp />} ></Route>
          <Route path='/Forget' element={ <Forget />} ></Route>
          <Route path='/Dashborad' element={ <Dashborad />} ></Route>
          <Route path='/Changepassword' element={ <Changepassword />} ></Route>
          <Route path='/Borad' element={ <Borad />} ></Route>
        </Routes>
      </Router>
    
     {/* <Login /> */}
    </div>
  );
}

export default App;
