import React from 'react';
import bgap from '../assets/bgap.jpg';



const APropos = () => {
  return (
    <div > 
        <section id="apropos" className="min-h-screen relative" style={{ backgroundImage: `url(${bgap})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }}>
        <div className="absolute text-white opacity-40 font-[dream] text-4xl sm:text-4xl md:text-6xl lg:text-6xl rotate-0 md:-rotate-90 lg:-rotate-90 sm:rotate-0 top-20 left-1/2 transform -translate-x-1/2 md:top-1/2 lg:top-1/2 md:left-20 lg:left-20">
          A PROPOS
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="font-[dream] pt-20 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-center text-white z-10">
    <br></br>
      <h1 className="text-white  items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ">Néïs</h1>
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">ZONCA CROS</h2>
      <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl">Apprenante développeuse Full Stack<br />
      à l'école Ada tech School</p>
      <br />
      <br />
      
      <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl">De soignante à travailleuse sociale <br /> 
      40 saisons et beaucoup de souvenirs, <br /> 
      De la créativité, de l'adaptabilité, <br /> 
      De la rencontre de l'autre,<br />
      Beaucoup de joie, <br /> 
      Et une grande soif d'apprendre !<br /> 
      </p>
      <br></br>
   
      <div className='m-2 rounded-md bg-black opacity-60 p-2 hover:scale-110 transition-transform ease-in-out duration-200'>
              <a href='/cv.pdf' target="_blank" rel="noopener noreferrer"  className="text-white uppercase font-['dream']text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl">Mon CV</a>
          </div>
        
 
      <div className='m-2 rounded-md bg-black opacity-60 p-2 hover:scale-110 transition-transform ease-in-out duration-200'>
     
          <a href="https://adatechschool.fr/" target='blank'className="text-white uppercase font-['dream'] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl">
           Ada Tech School
          </a> 
          
          </div>
          
        


    </div>

      </section>
    </div>
  );
};

export default APropos;
