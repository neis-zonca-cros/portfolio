import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Accueil from './pages/Accueil';
import Apropos from './pages/APropos';
import Projets from './pages/Projets';

const App = () => {

  return (
      <div>
        <Sidenav />
        <Accueil />
        <Apropos />
        <Projets />
      </div>

  );

}

export default App;
