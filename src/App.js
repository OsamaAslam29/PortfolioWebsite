import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar.jsx"
import Project from './Components/Projects/Project';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Project/>
    </>
  );
}

export default App;
