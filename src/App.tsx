import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import { Mainpage } from './pages/Mainpage';
import { Pricingpage } from './pages/Pricingpage';
import { Featurespage } from './pages/Featurespage';
import { Servicespage } from './pages/Servicespage';
import { Orderpage } from './pages/Orderpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />}/>
      <Route path="/pricing" element={<Pricingpage />}/>
      <Route path="/features" element={<Featurespage />}/>
      <Route path="/services" element={<Servicespage />}/>
      <Route path="/order" element={<Orderpage />}/>
    </Routes>
  );
}

export default App;
