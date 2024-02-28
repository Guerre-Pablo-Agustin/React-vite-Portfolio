//icons
import { AiFillGithub } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
//img
import imagen from "./img/Hero-img.png";

const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full flex justify-center text-center items-center md:flex-row max-[800px]:flex-col m-auto mb-20 g-2  "
    >
      {/* Informacion */}
      <div className="flex flex-col justify-center  w-[40%]">
        <div className="flex flex-col ">
          <div className="flex flex-col m-4 items-center justify-center p-6 h-auto">
            <h1 className=" text-wrap text-5xl md:text-7xl font-bold italic text-center py-5 flex items-center justify-center flex-col">
              Analista{" "}
              <span className=" text-primary text-center max-[800px]:m-10">
                Programador
              </span>
            </h1>
            <p className="text-wrap mt-2 text-lg italic flex text-justify h-[230px] w-[400px] p-8">
              Técnico Superior en Programación y Análisis de Sistemas con buenas
              habilidades para la resolución de problemas, capaz de desempeñarse
              bien en un equipo. Apasionado por la codificación y poniendo
              especial énfasis en escribir código de buena calidad.
            </p>
          </div>

          <div className="mb-5  gap-4 flex item-center justify-center max-[800px]:justify-between max-[800px]:flex-col">
            <a
              href="https://github.com/Guerre-Pablo-Agustin"
              target="_blank"
              className="relative py-2 px-6 text-center text-primary border border-primary rounded-full overflow-hidden shadow-md shadow-primary/100 transition-all ease-in-out before:absolute before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white"
              rel="noreferrer"
            >
              <AiFillGithub className="text-3xl" />
            </a>
            <a
              href="/docs/CV_Pablo_guerreño.pdf"
              target="_blank"
              className="relative flex flex-row gap-2 py-2 px-6 text-center text-primary border border-primary rounded-full shadow-md shadow-primary/100 overflow-hidden transition-all ease-in-out before:absolute before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white"
              rel="noreferrer"
            >
              Descargar CV <FaFileAlt className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      {/* Imagen */}
      <div className="flex  items-center justify-center w-[60%]">
        <img
          src={imagen}
          className="w-full  sm:w-full  h-auto min-[700px] max-[600px] mb-10"
          alt="imagen"
        />
      </div>
    </section>
  );
};

export default Hero;
