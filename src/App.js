import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      

      
      <BrowserRouter>
        <Navbar/>
        The Web app is clean and Running
        <Routes>
          <Route path='/home' element= {<Home/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/contact' element= {<Contact/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
