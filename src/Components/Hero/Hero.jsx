//icons
import { AiFillGithub } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
//img
import imagen from "./img/Hero-img.png";

const Hero = () => {
  return (
    <section
      id="Home"
      className="w-[95%] flex justify-center text-center items-center md:flex-row sm:flex-col m-auto mb-10 g-4"
    >
      {/* Informacion */}
      <div className="flex flex-col justify-center max-w-[600px] w-[40%]">
        <div className="flex flex-col gap-6 sm:m-5">
          <h1 className="text-5xl md:text-7xl font-bold italic text-center ">
            Analista <span className="text-primary">Programador</span>
          </h1>
          <p className=" mt-2  sm:m-5 text-lg  italic font-semibold">
            Técnico Superior en Programación y Análisis de Sistemas con buenas
            habilidades para la resolución de problemas, capaz de desempeñarse
            bien en un equipo. Apasionado por la codificación y poniendo
            especial énfasis en escribir código de buena calidad.
          </p>
          <div className="mb-5 -mt-5 gap-4 flex ">
            <a
              href="https://github.com/Guerre-Pablo-Agustin"
              target="_blank"
              className="relative py-2 px-6 text-center text-primary border border-primary rounded-full overflow-hidden shadow-md shadow-primary/100 transition-all ease-in-out before:absolute before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white"
              rel="noreferrer"
            >
              <AiFillGithub className="text-3xl" />
            </a>
            <a
              href="https://drive.google.com/file/d/1w-wC2y5NpCsJY1FEKkOHG1KdXaQsqI1j/view?usp=drive_link"
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
