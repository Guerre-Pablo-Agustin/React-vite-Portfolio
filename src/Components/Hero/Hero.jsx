//framer-motion
import { motion } from "framer-motion";
//icons
import { AiFillGithub } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
//img
import imagen from "./img/Hero-img.png";
import { fadeIn } from "../../variants";

const Hero = () => {
  return (
    <motion.section
      id="Home"
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}
      className="w-full h-[90vh] flex justify-center  items-center md:flex-row flex-col-reverse  mb-20 mt-80 md:mt-10 g-2  "
    >
      {/* Informacion */}
      <motion.div 
       variants={fadeIn("right", 0.5)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once: false, amount: 0.3}}
      className="flex flex-col justify-center p-4 w-[100%] md:w-[40%] mb-40">
        <div className="flex flex-col  md:py-20  w-full h-screen my-8">
          <div className="flex flex-col m-auto items-center justify-center ">
            <h1 className=" text-wrap text-5xl md:text-7xl font-bold italic text-center py-5 flex items-center justify-center flex-col">
              Analista{" "}
              <span className=" text-primary text-center ">
                Programador
              </span>
            </h1>
            <p className="text-left  text-white mt-2 text-lg italic flex  h-[230px] w-[375px] px-10">
              Técnico Superior en Programación y Análisis de Sistemas con buenas
              habilidades para la resolución de problemas, capaz de desempeñarse
              bien en un equipo. Apasionado por la codificación y poniendo
              especial énfasis en escribir código de buena calidad.
            </p>
          </div>

          <div className="mb-10 h-[230px]  w-[300px] gap-2 flex  justify-center max-[800px]:flex-col items-center md:mx-auto">
            <a
              href="https://github.com/Guerre-Pablo-Agustin"
              target="_blank"
              className="relative py-2 px-6 text-center text-primary border border-primary rounded-full overflow-hidden shadow-md shadow-primary/100 transition-all ease-in-out before:absolute before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white max-[800px]:w-[200px] "
              rel="noreferrer"
            >
              <AiFillGithub className="text-3xl max-[800px]:justify-center max-[800px]:items-center max-[800px]:mx-auto " />
            </a>
            <a
              href="https://drive.google.com/file/d/1IAkXppQJOyE5cbmEYu9mpoTSSpJXkvao/view?usp=sharing"
              target="_blank"
              className="relative flex flex-row gap-2 py-2 px-6 text-center text-primary border border-primary rounded-full shadow-md shadow-primary/100 overflow-hidden transition-all ease-in-out before:absolute before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white max-[800px]:w-[200px]"
              rel="noreferrer"
            >
              Descargar CV <FaFileAlt className="text-2xl" />
            </a>
          </div>
        </div>
      </motion.div>
      {/* Imagen */}
      <motion.div 
       variants={fadeIn("left", 0.5)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once: false, amount: 0.3}}
      className="flex h-screen items-center justify-center w-[60%] max-[800px]:w-[90%] ">
        <img
          src={imagen}
          className="w-full h-auto min-[700px] max-[600px] max-[800px]:-mb-10 max-[800px]:w-[800px] max-[800px]:h-[400px] max-[800px]:mx-auto mb-auto"
          alt="imagen"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
