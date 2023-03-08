import './App.css';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Register from './components/Register';

function App() {
  return (
    <>
    <Navigation/>
    <Homepage/>
    {/* <Login/>
    <Register/>
    <Catalog/> */}
  
    <Footer/>
    </>

  );
}

export default App;
