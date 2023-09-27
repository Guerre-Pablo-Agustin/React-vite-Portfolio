import React from "react";
//imagenes
import pokedex from "./img/pokedex.png";
import clima from "./img/clima.png";
//icons
import { AiFillGithub,AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  return (
    <section id="projects" className="min-h-[90vh] grid grid-cols-1 md:-mt-20">
      <div className="bg-primary flex justify-center items-center mt-2">
        <h1 className="text-white underline decoration-white decoration-4  italic max-[600px]:mt-10 text-5xl mt-10">
          Mis proyectos
        </h1>
      </div>

      {/*Mis proyectos*/}
      <div className="bg-primary grid italic grid-cols-1 md:grid-cols-3  
                gap-4 p-10 max-[600px]:p-4 ">

       {/*Pokedex*/}
       <div className="cursor-pointer md:col-span-1 bg-white max-w-2xl 
                      mx-auto py-4 px-6 rounded-lg shadow-xl 
                      min-[1300px]:hover:scale-110 transition-all duration-500
                      max-[600px]:m-2">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-primary text-white py-2 px-4 text-3xl rounded uppercase">
            Pokedex
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4 items-center justify-center">
            <img 
            className="md:w-[80%] md:h-[200px]"
             src={pokedex} alt="analista" 
             />
        </div>
        <div className="flex flex-col gap-2 mb-4 ">
          <p className="text-gray-600 font-bold">
            Proyecto Pokedex creado con HTML, CSS, JavaScript <br />
            API Pokemon <br />
          </p>
        </div>
        <div className='flex gap-4 -mt-10' >
        <div className='mt-10 flex'>
                <a href="https://github.com/Guerre-Pablo-Agustin/Pokedex" target="_blank" className='bg-primary px-5 py-3 rounded-full 
                text-white mt-2 flex gap-2 shadow-md animate-bounce'>
                    <AiFillGithub className='text-3xl' />
                </a>
        </div>
        <div className='mt-10 flex'>
                <a href="https://app-pokedex-gap.netlify.app" target="_blank" className='bg-primary px-5 py-3 rounded-full 
                text-white mt-2 flex gap-2 shadow-md animate-bounce'>
                    <AiOutlineLink className='text-3xl' />
                </a>
        </div>
        </div>
      </div>

       {/*Clima App*/}
       <div className="cursor-pointer md:col-span-1 bg-white max-w-2xl 
                      mx-auto py-4 px-6 rounded-lg shadow-xl 
                      min-[1300px]:hover:scale-110 transition-all duration-500
                      max-[600px]:m-2">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-primary text-white py-2 px-4 text-3xl rounded uppercase">
            Clima App
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4 items-center justify-center">
            <img 
            className="md:w-[80%] md:h-[200px]"
             src={clima} alt="analista" 
             />
        </div>
        <div className="flex flex-col gap-2 mb-4 ">
          <p className="text-gray-600 font-bold">
            Proyecto Clima creado con HTML, CSS, JavaScript <br />
            API Openweathermap <br />
          </p>
        </div>
        <div className='flex gap-4 -mt-10' >
        <div className='mt-10 flex'>
                <a href="https://github.com/Guerre-Pablo-Agustin/Clima" target="_blank" className='bg-primary px-5 py-3 rounded-full 
                text-white mt-2 flex gap-2 shadow-md animate-bounce'>
                    <AiFillGithub className='text-3xl' />
                </a>
        </div>
        <div className='mt-10 flex'>
                <a href="https://app-clima-gpa.netlify.app" target="_blank" className='bg-primary px-5 py-3 rounded-full 
                text-white mt-2 flex gap-2 shadow-md animate-bounce'>
                    <AiOutlineLink className='text-3xl' />
                </a>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
