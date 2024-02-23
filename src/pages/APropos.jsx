import React from 'react';
import neisImage from '../assets/neis.jpg'; 


const APropos = () => {
  return (
    <div>
      <section id="apropos" className="min-h-screen bg-apropos relative ">
        <div className="absolute opacity-10 font-[dream] text-4xl sm:text-4xl md:text-6xl lg:text-6xl rotate-0 md:-rotate-90 lg:-rotate-90 sm:rotate-0 top-20 left-1/2 transform -translate-x-1/2 md:top-1/2 lg:top-1/2 md:left-20 lg:left-20">
          A PROPOS
        </div>

        <div class="flex flex-col justify-center items-center pt-20">

        <div className='px-4 pt-6 mt-10 '>
          <img src={neisImage} alt="Photo" className='rounded-full h-60' />
        </div>
        <div className=' m-10 text-center text-2xl font-[dream]'>
          Apprenante à l'école Ada Tech School
          <br></br>depuis Octobre 2023
          <br></br>En recherche d'alternance pour 12 mois:
          <br></br>Juillet 2024 - Juillet 2025
          <br></br> Lundi au Jeudi: Entreprise
          <br></br> Vendredi: École <br></br>
          <br></br>
          <br></br>
          <div className='hover:scale-110 transition-transform ease-in-out duration-200 m-0 p-0'>
          <a href="https://adatechschool.fr/" target='blank'className="text-border uppercase font-['dream']">
           En savoir plus sur Ada Tech School
          </a> 
          </div>
          <br></br>

          {/* <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-border text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-['dream']">Mon CV !</a> */}
          <div className='hover:scale-110 transition-transform ease-in-out duration-200 m-0 p-0'>
              <a href='/cv.pdf' target="_blank" rel="noopener noreferrer"  className="text-border uppercase font-['dream']">Mon CV</a>
          </div>
        </div>
        </div>




 
      </section>
    </div>
  );
};

export default APropos;
