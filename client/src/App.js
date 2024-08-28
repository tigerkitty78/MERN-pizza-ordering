import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componenets/Navbar';
import Home from './screens/Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Cartscreen from './screens/Cartscreen';
import login from './screens/login';
import Register from './screens/register';

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();

  let backgroundColor;
  switch (location.pathname) {
    case '/cart':
      backgroundColor = 'white';
      break;
      case '/register':
        backgroundColor = 'white';
        break;

    default:
      backgroundColor = 'rgb(39, 91, 59)';
  }

  return <div style={{ backgroundColor: backgroundColor, minHeight: '100vh' }}>{children}</div>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <BackgroundWrapper>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" exact element={<Cartscreen />} />
            <Route path='/register' exact element={<Register/>}/>
            <Route path='/login' exact element={<login/>}/>
          </Routes>
        </BackgroundWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
