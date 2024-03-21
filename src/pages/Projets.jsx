import React, { useState } from 'react';
import Card from '../components/Card';
import heuremedic from '../assets/heuremedic.jpg';
import dataviz from '../assets/datavizcopie.png'; 
import portfolio from '../assets/portfolio.png';
import extension from '../assets/extension.jpg';

const Projets = () => {
  const [cards] = useState([
    {
      key: 1,
      lien: 'https://apps.apple.com/fr/app/heuremedic/id6474871002',
      imageUrl: heuremedic,
      title: 'HEUREMEDIC',
      soustitre: 'Application iOS',
      temps: 'Projet réalisé en 17 jours',
      description: (
        <>
          Heuremedic, c’est pour toutes les personnes que j’ai rencontrées quand je portais une blouse blanche,<br />
          Heuremedic c’est ma première application qui me prouve que coder c’est se mettre au service de l’autre,<br />
          Et Heuremedic c’est prendre un Doliprane, et pouvoir oublier l’heure à laquelle on l’a pris et donner cette charge à l’appli !<br />
          Du prototype au déploiement, Heuremedic, c’est un projet fait avec le ♥ 
        </>
      ),
      // description: 'Heuremedic, c’est pour toutes les personnes que j’ai rencontré quand je portais une blouse blanche, \n Heuremedic c’est ma première application qui me prouve que coder c’est se mettre au service de l’autre, \n Et Heuremedic c’est prendre un Doliprane, et pouvoir oublier l’heure à laquelle on l’a pris et donner cette charge à l’appli ! \n Heuremedic, c’est un projet fait avec le ♥ ',
      techStack: ['SwiftUI', 'Xcode', 'CoreData', 'Git', 'Adobe XD', 'Photoshop'],
    },
    {
      key: 2,
      lien: 'https://la-visible-invisibilite.netlify.app/',
      imageUrl: dataviz,
      title: 'La visible invisibilité',
      soustitre: 'Visualisation de données et API',
      temps: 'Projet réalisé en 4 jours',
      description:(
        <>
        La visible invisibilité c’est un projet de visualisation de données, <br />
        C’est récupérer le nom de toutes les rues de LYON grâce à une API, <br />
        Puis trier tout ces noms et les genrer grâce à une base de donnée, <br />
        Et en sortir une visualisation et des statistiques pour visibiliser l’invisible !<br />
        </>
      ),
      techStack: ['ReactJS', 'JSON', 'Git', 'API', 'VSCode', 'Photoshop'],
    },
    {
      key: 3,
      lien: '#accueil',
      imageUrl: portfolio,
      title: 'Portfolio Néïs ZONCA CROS',
      soustitre: 'React JS',
      temps: 'Projet réalisé en 10 jours',
      description:(
        <>
        Mon portfolio c’est des heures de recherche de palettes de couleurs qui me représentent,<br />
        C’est plonger dans de la modélisation 3D avec Spline, <br />
        C’est découvrir React et apprendre à ranger les composants correctement,<br />
        C’est vouloir du beau, du doux, et de la joie !<br />
        </>
      ),
      techStack: ['ReactJS', 'Vite', 'Tailwind', 'Git', 'Spline3D', 'VSCODE'],
    },

    {
      key: 4,
      lien: 'https://github.com/neis-zonca-cros/extension-navigateur-accessibility',
      imageUrl: extension,
      title: 'Extension Chrome',
      soustitre: "Extension d'accessibilité ",
      temps: 'Projet réalisé en 7 jours ',
      description:(
        <>
        Cette extension chrome c’est un projet à trois, <br />
        A la recherche d’un code qui puisse aider à accéder au web, <br />
        C’est la découverte du Manifest, des cookies, et du cache navigateur !<br />
        </>

      ),
      techStack: ['JSON', 'Chrome Développeur', 'JS', 'VSCODE', 'Git'],
    },
  ]);

  return (
    <div id='projets' className='min-h-screen py-10 bg-projets relative flex flex-wrap items-center justify-center '>
      <div className='absolute opacity-20 font-[dream] text-3xl sm:text-3xl md:text-6xl lg:text-6xl rotate-0 md:-rotate-90 lg:-rotate-90 sm:rotate-0 top-10 left-1/2 transform -translate-x-1/2 md:top-1/2 lg:top-1/2 md:left-20 lg:left-20'>PROJETS TECH’</div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl mt-10 px-5'>
        {cards.map((card) => (
          <Card key={card.key} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Projets;