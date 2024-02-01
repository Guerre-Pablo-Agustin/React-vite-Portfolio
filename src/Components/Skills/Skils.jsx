import { useState } from "react";
//icono
import {
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoPhp,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoWordpress,
} from "react-icons/bi";
import {
  SiMysql,
  SiMicrosoftsqlserver,
  SiVite,
  SiCsharp,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

//img
import imagen from "./img/habilidades.avif";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("database"); // Estado para controlar la pestaña activa

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      id="skills"
      className="min-h-[90vh] max-[700px]:m-8 min-[1100px]:flex-col"
    >
      <div className="flex items-center text-center flex-col ">
        <h1
          className="bg-primary p-4 rounded-md text-white flex justify-center text-center italic text-5xl font-bold
        max-[600px]:text-3xl max-[500px]:mt-10 
        sm:text-3xl  md:max-w-[600px] md:mt-10 "
        >
          Mis Conocimientos
        </h1>
      </div>
      <div className=" m-5 flex-grow flex items-center justify-center flex-row max-[900px]:flex-col">
        {/*Imagen*/}
        <div className=" p-10 flexitems-center justify-center ms:w-full ">
          <img
            src={imagen}
            className=" min-[400px]:w[80%]  min-[1300px]:ml-10"
            alt="imagen"
          />
        </div>
        {/*Habilidades*/}
        <div className="flex flex-col items-center w-full m-8 text-xl italic">
          <div className="flex flex-wrap flex-col gap-4 text-lg">
            <p className="text-center text-xl font-bold">
              Motores de bases de datos
            </p>
            <div className="flex flex-wrap justify-center gap-1 w-full">
              <BiLogoMongodb className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white" />
              <SiMysql className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white" />
              <BiLogoPostgresql className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white" />
              <SiMicrosoftsqlserver className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white" />
            </div>
          </div>
          <br />
          <div className="flex flex-wrap flex-col gap-4 text-lg">
            <p className="text-center text-xl font-bold">
              Herramientas de desarrollo
            </p>
            <div className="flex flex-wrap justify-center gap-1 w-full ">
              <BiLogoHtml5 className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white" />
              <IoLogoJavascript className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white" />
              <SiVite className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white" />
              <BiLogoWordpress className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white" />
              <SiNextdotjs className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white" />
              <BiLogoCss3 className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white" />
              <SiTailwindcss className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white" />
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
};

export default Skills;
