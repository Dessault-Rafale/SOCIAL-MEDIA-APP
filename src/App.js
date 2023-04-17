import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
  
    <>
  
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/Login" element={<Login/>}></Route>
  <Route path="/Register" element={<Register/>}></Route>
  </Routes>
  </BrowserRouter>
  
    </>
  );
}

export default App;
