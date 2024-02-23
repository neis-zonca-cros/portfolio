import React from 'react';
import neisImage from '../assets/neis.jpg'; 

const APropos = () => {
  return (
    <div>
      <section id="apropos" className="flex min-h-screen bg-apropos relative flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div className="absolute opacity-10 font-[dream] text-4xl sm:text-4xl md:text-6xl lg:text-6xl rotate-0 md:-rotate-90 lg:-rotate-90 sm:rotate-0 top-20 left-1/2 transform -translate-x-1/2 md:top-1/2 lg:top-1/2 md:left-20 lg:left-20">
          A PROPOS
        </div>

        <div className='lg:w-auto lg:mt-0 lg:ml-40 mt-20'>
          <img src={neisImage} alt="Photo" className='rounded-full h-60 w-auto' />
        </div>
 
      </section>
    </div>
  );
};

export default APropos;
