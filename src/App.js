import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './uiCollection/SignUp';
import Login from './uiCollection/Login';
import Home from './uiCollection/Home/home'
import PolicyDocs from './uiCollection/policyDocs/policyDocs';
import Navbar from './uiCollection/Navbar/Navbar.jsx'

function App() {
  return (
    <>

      <BrowserRouter>
              <Routes>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/signup' element={<SignUp/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/policy' element={<PolicyDocs/>}></Route>
                <Route path='/nav' element={<Navbar/>}></Route>
              </Routes>
      </BrowserRouter>

    </>
    
    
  );
}

export default App;
