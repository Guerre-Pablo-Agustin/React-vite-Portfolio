import React from 'react'
//icons
import {AiFillGithub} from 'react-icons/ai'
//img
import imagen from './img/Hero-img.png'


const Hero = () => {
  return (
    <section id="Home" className='min-h-[90vh] grid grid-cols-1 md:grid-cols-8 -mt-20 -mb-20 max-[600px]:mt-1'>
    {/* Informacion */}
    <div className='md:col-span-3 flex items-center justify-center m-10 p-9 xl:p-16 lg:m-10 '>
        <div className='flex flex-col gap-6 sm:m-5'>
            <h1 className='text-5xl md:text-7xl font-bold italic text-center xl:-mr-60 '>
                Analista <span className='text-primary'>Programador</span>
            </h1>
            <p className='mt-2 xl:-mr-40 sm:m-5 min-[700px]:text3xl'>
            Tecnico Superior en Programacion y Analisis de Sistemas con buenas habilidades 
            para la resolución de problemas. Capaz de desempeñarse bien en un equipo. 
            Apasionado por la codificación y poniendo especial énfasis en escribir código de buena calidad.
            </p>
            <div className='mt-5 flex '>
                <a href="https://github.com/Guerre-Pablo-Agustin" target="_blank" className='bg-primary px-5 py-3 rounded-full 
                text-white mt-2 flex gap-2 shadow-md animate-bounce'>
                    <AiFillGithub className='text-3xl' />
                </a>
            </div>
        </div>
    </div>
    {/* Imagen */}
    <div className='md:col-span-5 flex items-center justify-center '>
        <img src={imagen} 
         className="w-full md:w-[80%] sm:w-[100%] h-auto  min-[700px]:mb-20 max-[600px]:mb-20 shadow-xl shadow-prymary" 
         alt="imagen" 
         />
    </div>
</section>
  )
}

export default Hero