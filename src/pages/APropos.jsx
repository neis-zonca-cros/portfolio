import React from 'react';
import bgap from '../assets/bgap.jpg';

const APropos = () => {
  return (
    <section id="apropos">
      <div
        className="relative min-h-screen py-10" 
        style={{
          backgroundImage: `url(${bgap})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
        }}
      >
        <div className="absolute text-white opacity-40 font-[dream] text-4xl sm:text-4xl md:text-6xl lg:text-6xl rotate-0 md:-rotate-90 lg:-rotate-90 sm:rotate-0 top-20 left-1/2 transform -translate-x-1/2 md:top-1/2 lg:top-1/2 md:left-20 lg:left-20">
          A PROPOS
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="min-h-screen w-full font-[dream] pt-20 mt-4 items-center text-center text-white z-10">
          

          <h1 className="text-white items-center text-2xl sm:text-2xl md:text-6xl lg:text-7xl font-bold mb-4 mt-20 pt-20">
            Néïs ZONCA CROS
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
            Apprenante développeuse Full Stack<br></br>
            

            à l'école Ada tech School
          </p>
          

          


          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
            De soignante à travailleuse sociale, <br></br>
            

            40 saisons et beaucoup de souvenirs,<br></br>
            

            De la créativité, de l'adaptabilité,<br></br>
            

            De la rencontre de l'autre,<br></br>
            

            Beaucoup de joie,<br></br>
            

            Et une grande soif d'apprendre !<br></br>
            

          </p>
          


          <div className="inline-block m-2 rounded-md bg-black opacity-60 p-2 hover:scale-110 transition-transform ease-in-out duration-200">
            <a
              href="/CV-zonca-cros.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white uppercase font-['dream'] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl block w-full truncate"
            >
              Mon CV
            </a>
          </div>

          <div className="inline-block m-2 rounded-md bg-black opacity-60 p-2 hover:scale-110 transition-transform ease-in-out duration-200">
            <a
              href="https://adatechschool.fr/"
              target="blank"
              className="text-white uppercase font-['dream'] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl block w-full truncate"
            >
              Ada Tech School
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;