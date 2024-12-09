import React from 'react'; 
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { User } from "./Component/User"
import { Details } from './Component/Details';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path = "/InputUser" element = {<User/>}>User</Route>
      <Route path = "/Details" element = {<Details/>}>Details</Route>
     </Routes>
    </div>
  );
}

export default App;
