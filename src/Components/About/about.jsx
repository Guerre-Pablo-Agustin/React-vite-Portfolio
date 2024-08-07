
//imagen
import analista from "./img/analista.png";
import diseñador from "./img/diseñador.png";
import programador from "./img/programador.jpg";


import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const About = () => {
  return (
    <motion.section 
    variants={fadeIn("down", 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
    id="about" className="h-screen grid grid-cols-1 md:-mt-20 max-[900px]:grid-cols-1">
      {/*Informacion sobre mi*/}
      <div className="flex justify-center items-center mt-2">
      <h1 className="italic sm-[600px]:mt-10  text-5xl mt-10  p-2 rounded-md text-white font-bold">Sobre mi</h1>
     </div>

     <div className="bg-tertiary grid italic grid-cols-1 md:grid-cols-3  gap-4 p-10 
                     max-[900px]:p-4 max-[900px]:grid-cols-1">
      {/*Analista*/}
      <div className="cursor-pointer md:col-span-1 bg-white max-w-2xl 
                      mx-auto py-4 px-6 rounded-lg shadow-xl 
                      min-[1300px]:hover:scale-110 transition-all duration-500
                      max-[600px]:m-2">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-primary text-white py-2 px-4 text-lg rounded uppercase">
            Analista
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4 items-center justify-center">
            <img 
            className="md:w-[80%] md:h-[200px]"
             src={analista} alt="analista" 
             />
        </div>
        <div className="flex flex-col gap-2 mb-4 ">
          <p className="text-gray-600 font-bold">
            Analista de datos y sistemas con habilidades para identificar
            patrones, analizar información y tomar decisiones basadas en datos.
            Apasionado por comprender y optimizar procesos para mejorar la
            eficiencia y la toma de decisiones.
          </p>
        </div>
        
      </div>

      {/*Programador*/}
      <div className="cursor-pointer md:col-span-1 bg-white max-w-2xl 
                      mx-auto py-4 px-6 rounded-lg shadow-xl 
                      min-[1300px]:hover:scale-110 transition-all duration-500
                      max-[600px]:m-2">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-primary text-white py-2 px-4 text-lg rounded uppercase">
            Programador
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4 items-center justify-center">
            <img 
            className="md:w-[80%] md:h-[200px]"
             src={programador} alt="analista" 
             />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <p className="text-gray-600 font-bold">
            Programador versátil con experiencia en varios lenguajes de
            programación. Capaz de desarrollar soluciones robustas y eficientes,
            y de trabajar en equipo para llevar a cabo proyectos de software
            exitosos.
          </p>
        </div>
      </div>

      {/*Desarrollador Web*/}
      <div className="cursor-pointer md:col-span-1 bg-white max-w-2xl 
                      mx-auto py-4 px-6 rounded-lg shadow-xl 
                      min-[1300px]:hover:scale-110 transition-all duration-500
                      max-[600px]:m-2">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-primary text-white py-2 px-4 text-lg rounded uppercase">
            Desarrollador Web
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4 items-center justify-center">
            <img 
            className="md:w-[80%] md:h-[200px]"
             src={diseñador} alt="analista" 
             />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <p className="text-gray-600 font-bold">
            Desarrollador web creativo y apasionado por la creación de
            experiencias digitales atractivas y funcionales. Experto en HTML,
            CSS y JavaScript, con conocimientos en frameworks como React.
            Comprometido con la entrega de sitios web de alta calidad y
            adaptados a las necesidades del cliente.
          </p>
        </div>
      </div>
      </div>
    </motion.section>
  );
};

export default About;
