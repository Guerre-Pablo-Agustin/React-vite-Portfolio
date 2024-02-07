
//icons
import {AiFillGithub} from 'react-icons/ai'
import { FaFileAlt } from "react-icons/fa";
//img
import imagen from './img/Hero-img.png'


const Hero = () => {
  return (
<section id="Home" className='w-[95%] flex justify-center text-center items-center md:flex-row sm:flex-col m-auto mb-10 g-4'>
    {/* Informacion */}
    <div className='flex flex-col justify-center max-w-[600px] w-[40%]'>
        <div className='flex flex-col gap-6 sm:m-5'>
            <h1 className='text-5xl md:text-7xl font-bold italic text-center '>
                Analista <span className='text-primary'>Programador</span>
            </h1>
            <p className=' mt-2  sm:m-5 text-lg  italic font-semibold'>
                Técnico Superior en Programación y Análisis de Sistemas con buenas habilidades 
                para la resolución de problemas. Capaz de desempeñarse bien en un equipo. 
                Apasionado por la codificación y poniendo especial énfasis en escribir código de buena calidad.
            </p>
            <div className='mb-5 -mt-5 gap-2 flex'>
                <a href="https://github.com/Guerre-Pablo-Agustin" target="_blank" className='bg-primary px-5 py-3 rounded-md 
                text-white flex  gap-2 shadow-md shadow-primary hover:transform hover:scale-110 transition-all' rel="noreferrer">
                    <AiFillGithub className='text-3xl' />
                </a>
                <a href="https://drive.google.com/file/d/1Rbomf8r-fjUohI0uXImn4fQIfRq89Afz/view" target="_blank" className='bg-primary px-5 py-3 rounded-md 
                text-white flex  gap-2 shadow-md hover:transform hover:scale-110 transition-all shadow-primary ' rel="noreferrer">
                 Descargar CV  <FaFileAlt className='text-2xl' />
                </a>
            </div>
        </div>
    </div>
    {/* Imagen */}
    <div className='flex  items-center justify-center w-[60%]'>
        <img src={imagen} 
            className="w-full  sm:w-full  h-auto min-[700px] max-[600px] mb-10" 
            alt="imagen" 
        />
    </div>
</section>



  )
}

export default Hero