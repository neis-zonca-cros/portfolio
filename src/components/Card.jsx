import React from 'react';

const Card = ({ imageUrl, title, description, soustitre, techStack, lien, temps }) => {
    const stackedTech = techStack.map((tech, index) => (
        <span key={index} className="text-center font-semibold mt-1 px-2 py-1.5 text-accueil text-xs rounded-2xl bg-border bg-opacity-80 mr-2">
            {tech}
        </span>
    ));

    return (
        <a href={lien} target="_blank" rel="noopener noreferrer" className='mt-10 justify-center flex'>

        <div className="max-w-64 max-h-screen bg-accueil flex flex-col items-center justify-center bg-opacity-50 rounded-lg overflow-hidden shadow-2xl hover:scale-110 transition-transform ease-in-out duration-200">
            
            <img className="w-[50%] rounded-lg shadow-xl mt-5 mb-2" src={imageUrl} alt="Image" />
            <div className="px-2 mb-2">
                <div className="font-[dream] text-xl text-center">{title}</div>
                <p className="text-gray-700 mt-2 text-base text-center font-[dream]">{soustitre}</p>
                <p className="text-gray-700 text-xs text-center italic font-[dream]">{temps}</p>
                <p className="mt-2 text-sm text-center font-[dream] text-gray-700">{description}</p>

                <div className="flex flex-wrap justify-center mt-5 mb-2">
                    {stackedTech}
                </div>
            </div>
            

        </div>
        </a>



    );
};

export default Card;