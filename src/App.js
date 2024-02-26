import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import Exp from './Exp';
import Project from './work';
import Contact from './contact';


function App() {
  return (
    <div className="App">
    <Home></Home>
      <div className="wrapper">
        <Navbar></Navbar>
        <div className="main">
          <About></About>
          <Project></Project>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;
