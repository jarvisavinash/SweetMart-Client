import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        < Header />

        <br/> <br/> <br/>

        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/login" element={< Login />} />
          <Route path="/signup" element={< Signup />} />
        </Routes>

        <br/> <br/> <br/>

        < Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
