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
    <section id="skills" className="min-h-[90vh] max-[700px]:m-8 min-[1100px]:flex-col">
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
      <div className="flex-grow w-full ms:bg-primary flex items-center justify-center flex-row max-[900px]:flex-col">
        {/*Imagen*/}
        <div className="flex items-center justify-center ms:w-full w[40%]">
        <img
          src={imagen}
          className="shadow-xl shadow-prymary min-[1300px]:ml-10"
          alt="imagen"
          style={{ width: "500px", height: "400px" }}
        />
        </div>
        {/*Habilidades*/}
        <div
          className="flex justify-center items-center w-full flex-col  shadow-xl 
                      shadow-prymary  m-5 mt-10 text-2xl"
        >
          <div className="  sm:text-1xl sm:m-2 flex justify-center items-center mb-4 flex-row gap-10 ">
            <button
              className={`  mr-4 py-2 px-4 rounded uppercase ${
                activeTab === "database"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handleTabClick("database")}
            >
              Motores de base de datos
            </button>
            <button
              className={`  py-2 px-4 rounded uppercase ${
                activeTab === "development"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handleTabClick("development")}
            >
              Desarrollo
            </button>
          </div>

          {activeTab === "database" && (
            <div className="flex flex-wrap items-center justify-center mt-5 gap-10 mb-10 text-2xl">
              <div className="sm:m-5 max-[600px]:gap-10 w-full md:w-[80%] gap-3 grid grid-cols-2 md:grid-cols-4">
                <div>
                  <BiLogoMongodb className="text-7xl text-green-400" />
                </div>
                <div>
                  <SiMysql className="text-7xl text-orange-400" />
                </div>
                <div>
                  <BiLogoPostgresql className="text-7xl text-blue-400" />
                </div>
                <div className="">
                  <SiMicrosoftsqlserver className="text-7xl text-red-400 " />
                </div>
              </div>
            </div>
          )}

          {activeTab === "development" && (
            <div className="flex flex-wrap items-center justify-center mt-5 mb-10 italic text-2xl">
              <div className="w-full md:w-[80%] grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0">
                  <BiLogoHtml5 className="text-7xl text-orange-600" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0">
                  <BiLogoCss3 className="text-7xl text-blue-700" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0">
                  <BiLogoPhp className="text-7xl text-red-600" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0">
                  <IoLogoJavascript className="text-7xl text-yellow-300" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0">
                  <SiVite className="text-7xl text-violet-600" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0">
                  <SiCsharp className="text-7xl text-violet-600" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0">
                  <BiLogoWordpress className="text-7xl text-violet-600" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
