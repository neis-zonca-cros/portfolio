import React, { useState, useEffect } from 'react';
import Sidenav from './components/Sidenav';
import Accueil from './pages/Accueil';
import Apropos from './pages/APropos';
import Projets from './pages/Projets';
import Loader from './components/Loader';


const App = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      
      setLoading(false); 
    }, 5000); 
  });


  return (
      <div>        
        {loading && <Loader />} 
        <div className={`content ${loading ? "hidden" : ""}`}>
        <Sidenav />
        <Accueil />
        <Apropos />
        <Projets />
      </div>
      </div>

  );

}

export default App;