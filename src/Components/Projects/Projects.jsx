import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import pokedex from "./img/pokedex.png";
import clima from "./img/clima.png";
import henrucci from "./img/henrucci.png";
import paises from "./img/paises.png";
import propiedades from "./img/propiedades.png";
import dashboard from "./img/dashboard.jpg";
import easybank from "./img/easybank.png";
import socialbutton from "./img/socialbutton.png";
import { useState } from "react";
//notion
import {motion} from "framer-motion"
//variants
import { fadeIn } from "../../variants";

const projects = [
  {
    name: "Pokedex",
    image: pokedex,
    description: "Proyecto Pokedex creado con la API de PokeApi",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Guerre-Pablo-Agustin/Pokedex",
    liveLink: "https://app-pokedex-gap.netlify.app",
  },
  {
    name: "Clima App",
    image: clima,
    description: "Proyecto Clima creado con la API de OpenWeather",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Guerre-Pablo-Agustin/Clima",
    liveLink: "https://app-clima-gpa.netlify.app",
  },
  {
    name: "Henrucci tienda",
    image: henrucci,
    description:
      "Ecommerce de ropa creado con Next.js, tailwind css, pasarela de pago paypal",
    tecnologias: [
      "Next.js",
      "Tailwindcss",
      "Paypal",
      "Javascript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    githubLink: "https://github.com/Guerre-Pablo-Agustin/Clima",
    liveLink: "https://pf-henry-15a-ecommerce-frontend.vercel.app",
  },
  {
    name: "App de Paises",
    image: paises,
    description: "Proyecto Paises creado con Vite, node, express y postgres",
    tecnologias: ["Vite", "Node", "Express", "PostgreSQL"],
    githubLink: "https://github.com/Guerre-Pablo-Agustin/cr-pi-countries-main",
    liveLink: "https://countries-project-iota.vercel.app",
  },
  {
    name: "App de propiedades",
    image: propiedades,
    description: "Proyecto para venta y alquiler de propiedades",
    tecnologias: ["Next.js", "Tailwindcss", "Javascript", "Framer Motion"],
    githubLink: "https://github.com/Guerre-Pablo-Agustin/App-Properties",
    liveLink: "https://propiedades-app.netlify.app",
  },
  {
    name: "Dashboard",
    image: dashboard,
    description: "Proyecto dashboard creado para manejo de clientes y gastos",
    tecnologias: ["Next.js", "Tailwindcss", "Javascript", "PostgreSQL"],
    githubLink: "https://github.com/Guerre-Pablo-Agustin/next-dashboard",
    liveLink: "https://dashboard-next14-coral.vercel.app/dashboard",
  },
  {
    name: "easybank landing page",
    image: easybank,
    description: "Proyecto landing page creado con Next.js",
    tecnologias: ["Next.js", "Tailwindcss", "Typescript"],
    githubLink: "https://github.com/Guerre-Pablo-Agustin/easybank-landing",
    liveLink: "https://landingpagebank.netlify.app",
  },
  {
    name: "Social Button",
    image: socialbutton,
    description: "Proyecto landing page creado con Next.js",
    tecnologias: ["Next.js", "Tailwindcss", "Typescript"],
    githubLink: "https://github.com/Guerre-Pablo-Agustin/social-profile",
    liveLink: "https://socials-buttons.netlify.app",
  }
];

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <motion.div 
    variants={fadeIn("down", 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
    id="projects" 
    className="h-screen grid grid-cols-1 bg-tertiary">
      <div className=" flex justify-center items-center mt-2">
        <h1 className=" p-2 rounded-md text-white font-bold italic max-[600px]:mt-10 text-5xl mt-10">
          Mis proyectos
        </h1>
      </div>
      <div className="flex items-center justify-center flex-col">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            700: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1,
          }}
          modules={[FreeMode, Pagination]}
          className="w-[90%] sm:w-[full]"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center rounded-md"
            >
              <div
                className="relative"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div
                  className={`${
                    hoverIndex === index ? "opacity-100" : "opacity-0"
                  } absolute inset-0 bg-hover  transition-opacity duration-200 rounded-md`}
                />
                <div
                  className={`${
                    hoverIndex === index ? "opacity-100" : "opacity-0"
                  } absolute inset-0 text-white flex flex-col gap-3 justify-center items-center transition-opacity cursor-pointer duration-300 px-6 py-8`}
                >
                  <h1 className="text-xl lg:text-md">{project.name} </h1>
                  <p className="lg:text-md">{project.description} </p>
                  <div className="gap-2 grid grid-cols-3 justify-center text-sm">
                    {project.tecnologias.map((tecnologia, index) => (
                      <p
                        key={index}
                        className="border-secondary  px-4 py-2 justify-center text-center rounded-md text-white flex shadow-md text-sm"
                      >
                        {tecnologia}
                      </p>
                    ))}
                  </div>
                  <div className="flex gap-4 relative group">
                    <div className="flex">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="bg-primary px-5 py-3 rounded-md text-white mt-2 flex gap-2 shadow-md shadow-primary hover:scale-110 transition-all duration-100 "
                        rel="noreferrer"
                        title="Repositorio"
                      >
                        <AiFillGithub className="text-3xl" />
                      </a>
                      <span className="absolute bottom-full mb-2 right-1/4 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Repositorio
                      </span>
                    </div>
                    <div className="flex relative group">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="bg-secondary px-5 py-3 rounded-md text-white mt-2 flex gap-2 shadow-md shadow-secondary hover:scale-110 transition-all duration-100"
                        rel="noreferrer"
                      >
                        <AiOutlineLink className="text-3xl" />
                      </a>
                      <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Sitio web
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  className="w-[215px] lg:w-[350px] max-[900px]:w-[400px]  h-[250px] lg:h-[400px] max-[900px]:h-[400px] object-cover  rounded-md cursor-pointer "
                  src={project.image}
                  alt={project.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Projects;
