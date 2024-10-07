//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
  <>
  <Router>
      <Navbar title="Textutils"/> 
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter The Text Below"/>} />
      </Routes>
      </div>
  </Router>
    {/* <About/> */}
  </>
  );
}

export default App;
