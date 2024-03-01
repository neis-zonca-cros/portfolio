import React from 'react';

const Card = ({ imageUrl, title, description, soustitre, techStack, lien }) => {
    const stackedTech = techStack.map((tech, index) => (
        <span key={index} className="text-center font-semibold mt-1 px-2 py-1.5 text-accueil text-xs rounded-2xl bg-border bg-opacity-80 mr-2">
            {tech}
        </span>
    ));

    return (
        <a href={lien} target="_blank" rel="noopener noreferrer" className='justify-center flex'>

        <div className="m-10 max-w-64 max-h-auto bg-accueil flex flex-col items-center justify-center bg-opacity-50 rounded-lg overflow-hidden shadow-2xl hover:scale-110 transition-transform ease-in-out duration-200">
            
            <img className="w-[50%] rounded-lg shadow-xl my-5" src={imageUrl} alt="Image" />
            <div className="px-2 mb-2">
                <div className="font-[dream] text-xl text-center">{title}</div>
                <p className="text-gray-700 text-base text-center font-[dream]">{soustitre}</p>
                <p className="text-gray-700 text-xs text-center italic font-[dream]">{description}</p>

                <div className="flex flex-wrap justify-center m-1">
                    {stackedTech}
                </div>
            </div>
            

        </div>
        </a>



    );
};

export default Card;