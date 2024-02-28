//icono
import {
  BiLogoMongodb,
  BiLogoPostgresql,
  // BiLogoPhp,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoWordpress,
} from "react-icons/bi";
import {
  SiMysql,
  SiMicrosoftsqlserver,
  SiVite,
  // SiCsharp,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

//img
import imagen from "./img/habilidades.avif";

const Skills = () => {


  // const [activeTab, setActiveTab] = useState("database"); // Estado para controlar la pestaña activa

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

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
      <div className=" w-[80%] m-5 flex items-center justify-center text-center flex-row max-[900px]:flex-col mx-auto my-auto mt-4">
        {/*Imagen*/}
        <div className="  flex items-center justify-center ms:w-full ">
          <img
            src={imagen}
            className=" min-[400px]:w[80%]  min-[1300px]:ml-10"
            alt="imagen"
          />
        </div>
        {/*Habilidades*/}
        <div className="flex flex-col items-center w-full  text-xl italic">
          <div className="flex flex-wrap flex-col gap-4 text-lg">
            <p className="text-center text-xl font-bold">
              Motores de bases de datos
            </p>
            <div className="flex flex-wrap justify-center gap-1 w-full">
              <BiLogoMongodb className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white  shadow-md shadow-primary/100" />
              <SiMysql className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white shadow-md shadow-primary/100" />
              <BiLogoPostgresql className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white shadow-md shadow-primary/100" />
              <SiMicrosoftsqlserver className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white shadow-md shadow-primary/100" />
            </div>
          </div>
          <br />
          <div className="flex flex-wrap flex-col gap-4 text-lg">
            <p className="text-center text-xl font-bold">
              Herramientas de desarrollo
            </p>
            <div className="flex flex-wrap justify-center gap-1 w-full">
              <BiLogoHtml5 className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white shadow-md shadow-primary/100" />
              <IoLogoJavascript className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white shadow-md shadow-primary/100" />
              <SiVite className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white shadow-md shadow-primary/100" />
              <BiLogoWordpress className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white shadow-md shadow-primary/100" />
              <SiNextdotjs className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white shadow-md shadow-primary/100" />
              <BiLogoCss3 className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white shadow-md shadow-primary/100" />
              <SiTailwindcss className="text-5xl md:text-7xl  bg-primary p-2 rounded-md text-white shadow-md shadow-primary/100" />
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
};

export default Skills;
