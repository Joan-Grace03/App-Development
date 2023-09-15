// import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Signup from './Signup';

function App() {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;