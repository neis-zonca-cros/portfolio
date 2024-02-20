import React from 'react';
import Sidenav from './components/Sidenav';
import Accueil from './pages/Accueil';
import Apropos from './pages/APropos';
import Projets from './pages/Projets';

const App = () => {
  return (
    <div>
      <Sidenav />
      <div >
        <Accueil />
        <Apropos />
        <Projets />
      </div>
    </div>
  );
}

export default App;
