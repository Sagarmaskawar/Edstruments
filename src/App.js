import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage';
import Login from './LoginForm/Login.jsx';
import { Route, Router, Routes } from 'react-router-dom';
import RedirectionRoute from './RedirectionRoute.jsx';

function App() {
  return (
    // <div className="App">
    //   {/* <Login/> */}
    //  <HomePage/>
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RedirectionRoute>
              <HomePage />
            </RedirectionRoute>
          }
        />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    
    // </div>
  );
}

export default App;
