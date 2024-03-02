import React from 'react';
import Spline from '@splinetool/react-spline';
import bgacc from '../assets/bgacc.jpg';



const Accueil = () => {
  
  return (

    
    <section id="accueil" >
      <div className="h-screen relative flex flex-col "         style={{
          backgroundImage: `url(${bgacc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
        }}>
        <div className="absolute opacity-20 font-[dream] text-4xl sm:text-4xl md:text-6xl lg:text-6xl rotate-0 md:-rotate-90 lg:-rotate-90 sm:rotate-0 top-20 left-1/2 transform -translate-x-1/2 md:top-1/2 lg:top-1/2 md:left-20 lg:left-20">
          PORTFOLIO
        </div >
        <Spline scene="https://prod.spline.design/q9KgjBw7qRiINVp5/scene.splinecode" />

        </div>
    </section>
  );
}
export default Accueil;
