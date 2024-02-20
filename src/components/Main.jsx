import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Main() {
  return (
    <div id='main' className='bg-gradient-to-r from-gray-700 via-gray-900 to-black w-full h-screen object-cover object-left'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold, text-white'>Néïs ZONCA CROS</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>
                <TypeAnimation
                    sequence={[
                        'Je suis développeuse junior',
                        1000, 
                        'Je suis slameuse',
                        1000,
                        'Je suis une ancienne travailleuse social',
                        1000,
                        'Je suis amoureuse des couchers de soleil',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                    repeat={Infinity}
                    />
                
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaLinkedinIn className='cursor-pointer' size={20} />
            </div>

        </div>

    
    </div>
  )
}
