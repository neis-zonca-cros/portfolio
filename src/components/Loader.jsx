import React from 'react';
import loader from '../assets/loader.svg';
import bgacc from '../assets/bgacc.jpg';


const Loader = () => {
    
    return (
        <div className="h-screen flex justify-center items-center text-center flex-col" style={{
            backgroundImage: `url(${bgacc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
          }}>
            <img src={loader} alt="Loader" />
            <h1 className="text-border pt-4 font-[dream] text-4xl sm:text-4xl md:text-4xl lg:text-4xl">Monde, <br></br>
            Attends moi...<br></br>
            J'arrive ! </h1>
            
        </div>
    );
};

export default Loader;