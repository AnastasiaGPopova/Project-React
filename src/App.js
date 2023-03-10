import './App.css';
import {Route, Routes} from 'react-router-dom'
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Register from './components/Register';
import { auth } from "./server/fire-base configuration"
import { onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

function App() {
  let isLogged = false


  const [authUser, setAuthUser] = useState({})
  onAuthStateChanged(auth, (currentUser) => {
    setAuthUser(currentUser)
  })

  console.log(authUser)

  if(authUser !== null){
    isLogged = true

  }

  return (
    <>
    <Navigation isLogged={isLogged}/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      {/* <Route path='/register' element={<Register userChange={authUser => setAuthUser(authUser)}/>}/> */}
      <Route path='/catalog' element={<Catalog/>}/>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
