import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import UpButton from 'components/UpButton';
import React from 'react';
import Route from 'router/Router';

function App() {
  return (
    <>
      <Navbar />
      <Route />
      <Footer />
      <UpButton/>
    </>

  );
}

export default App;
