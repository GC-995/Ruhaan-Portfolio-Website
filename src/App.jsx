import React from 'react';
import Home from './pages/Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
     
      <Helmet>
        <title>Ruhaan Sharma - Portfolio</title>
        <meta name="description" content="Ruhaan Sharma's Portfolio - A Developer and Innovator" />
        <meta name="keywords" content="React, Python, MERN Stack, IoT, Robotics, AI, Developer Portfolio" />
      </Helmet>

      <div className="bg-dark-200 min-h-screen">
        <Home />
      </div>
    </>
  );
}

export default App;
