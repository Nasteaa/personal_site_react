import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Routes from './Routes';
import NavBar from './NavBar';
import ContactFooter from './ContactFooter';
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <ContactFooter /> */}
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
