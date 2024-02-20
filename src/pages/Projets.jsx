// Projets.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';


const Projets = () => {
  return (

<div id="projets" className="min-h-screen pt-5 bg-projets flex flex-col lg:flex-row justify-center lg:justify-between items-center">
  <div className="lg:w-auto lg:mt-0 lg:ml-10 justify-center mt-20">
      <Spline scene="https://prod.spline.design/7RH54U32uBqj7L4T/scene.splinecode" />
  </div>
  <div className="lg:w-auto lg:mt-0 mt-20">
    {/* Contenu de la deuxième div */}
    <Spline scene="https://prod.spline.design/Mec7MSSPCI8Gtixs/scene.splinecode" />
  </div>
  <div className="lg:w-auto lg:mt-0 mt-20">
    {/* Contenu de la troisième div */}
    <Spline scene="https://prod.spline.design/liL1Ykfm61a0gvSM/scene.splinecode" />
  </div>
  <div className="lg:w-auto lg:mt-0 lg:mb-0 lg:mr-10 mt-20 mb-20">
    {/* Contenu de la quatrième div */}
    <Spline scene="https://prod.spline.design/hGdSXh12uZJYGhqN/scene.splinecode" />
  </div>



</div>








  );
};

export default Projets;
