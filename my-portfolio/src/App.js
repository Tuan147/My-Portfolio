import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Routes>
        <Route exact path='/' element={Navbar}/>
        <Route exact path='/home' element={Navbar}/>
        <Route exact path='/about-me' element={About} />
        <Route exact path='/contact' element={Contact}/>
        </Routes>

        </Router>
    </div>
  );
}

export default App;
