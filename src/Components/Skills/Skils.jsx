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
          className="underline decoration-primary decoration-4 
        flex justify-center text-center italic text-5xl 
        max-[600px]:text-3xl max-[500px]:mt-10 
        sm:text-3xl mb-4 -mt-5 md:max-w-[600px] md:mt-10 "
        >
          Mis Conocimientos
        </h1>
      </div>
      <div className=" flex-grow flex items-center justify-center flex-row max-[900px]:flex-col">
        {/*Imagen*/}
        <div className="m-8 flex  h-[40%] items-center justify-center ms:w-full w-[40%]">
          <img
            src={imagen}
            className="shadow-xl min-[400px]:w[80%] shadow-prymary min-[1300px]:ml-10"
            alt="imagen"
            style={{ width: "500px", height: "400px" }}
          />
        </div>
        {/*Habilidades*/}
        <div className="flex flex-col items-center w-full w-[40%]  shadow-xl m-8 text-xl italic">
          <div className="flex flex-row gap-8 text-lg">
            <p className="text-center">Motores de bases de datos</p>
            <div className="flex justify-center gap-4 w-full md:w-[80%] mx-auto">
              <BiLogoMongodb className="text-5xl text-green-400" />
              <SiMysql className="text-5xl text-orange-400" />
              <BiLogoPostgresql className="text-5xl text-blue-400" />
              <SiMicrosoftsqlserver className="text-5xl text-red-400" />
            </div>
          </div>
          <br />
          <div className="flex flex-row  text-lg">
            <p className="text-center">Herramientas de desarrollo</p>
            <div className="flex justify-center gap-4 w-full md:w-[80%] mx-auto">
              <BiLogoHtml5 className="text-5xl text-orange-600" />
              <IoLogoJavascript className="text-5xl text-yellow-400" />
              <SiVite className="text-5xl text-violet-600" />
              <BiLogoWordpress className="text-5xl text-violet-600" />
              <SiNextdotjs className="text-5xl text-black" />
            </div>
          </div>
          <br />
          <div className="flex flex-row gap-10 text-lg">
            <p className="text-left -ml-40">Herramientas de CSS</p>
            <div className="flex justify-center gap-4 w-full md:w-[80%] mx-auto">
              <BiLogoCss3 className="text-5xl text-blue-700" />
              <SiTailwindcss className="text-5xl text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
